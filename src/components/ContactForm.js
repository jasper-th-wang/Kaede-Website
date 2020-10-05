import React from 'react';
import classes from './ContactForm.module.scss';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const phoneValidate = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

const formSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required().matches(phoneValidate, 'Your phone number must match the following format: (111) 222-3333, 1112223333, 111-222-3333'),
  message: yup.string().required(),
});

const encodeData = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactForm = () => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });


  const formFields = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  const placeHolder = {
    name: 'Your name',
    email: 'Your email address',
    phone: 'Your number',
    message: 'Please enter your message',
  }


  // test submitting form to firebase
  // body should jjust be encodeData(formState);
  const submitFormHandler = (data) => {
    fetch('https://react-hooks-update-e68e5.firebaseio.com/formTest.json', {
      method: 'POST',
      body: JSON.stringify({ form: encodeData(data) }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      if (!res.ok) throw new Error('Error occured when submitting this form');
      console.log(data);
      console.log(encodeData(data));
      console.log('success!');
      // here you should redirect to a success page!
    }).catch(error => {
      // here you should redirect to a error page!
      console.log(error);
    });
  }

  // const testSubmit = (data) => {
  //   console.log(data);
  // }


  return (

    <form className={ classes.contactForm } onSubmit={ handleSubmit(submitFormHandler) }>

      {
        Object.keys(formFields).map(key => (
          <label key={ key }>
            {`${ key }:` }
            { !(key === 'message') ?
              <input
                ref={ register }
                type="text"
                name={ key }
                placeholder={ placeHolder[key] }
              // value={ formState[key] } onChange={ updateFormHandler } 
              /> :
              <textarea
                ref={ register }
                type="text"
                name={ key }
                placeholder={ placeHolder[key] }
              // value={ formState[key] } onChange={ updateFormHandler }
              ></textarea>
            }
            {
              errors[key] && <span className={ classes.error }>{ errors[key].message }</span>
            }
          </label>
        ))
      }

      <button type="submit" className="small-button small-button--white-text">Submit</button>


    </form >
  );
}

export default ContactForm;