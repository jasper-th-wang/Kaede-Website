import React, { useState, useEffect, useReducer } from 'react';
import classes from './ContactForm.module.scss';


const ContactForm = () => {

  const initialForm = {
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

  const formReducer = (prevState, { type, key, value }) => {
    switch (type) {
      case 'update':
        return { ...prevState, [key]: value };
        break;
      case 'submit':
        return { ...initialForm };
      default:
        throw new Error('there is an error in the form');
    }
  }

  const [formState, dispatchForm] = useReducer(formReducer, initialForm);

  const updateFormHandler = (event) => {
    dispatchForm({ type: 'update', key: event.target.name, value: event.target.value });
  }

  // test submitting form to firebase
  const submitFormHandler = (event) => {
    event.preventDefault();
    fetch('https://react-hooks-update-e68e5.firebaseio.com/formTest.json', {
      method: 'POST',
      body: JSON.stringify(formState),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      console.log('success!');
      dispatchForm({ type: 'submit' });
    }).catch(error => {
      console.log('error');
    })
  }


  useEffect(() => {
    console.log(formState);
  }, [formState])

  const encodeData = (data) => {
    Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  return (

    <form className={ classes.contactForm } onSubmit={ submitFormHandler }>

      {
        Object.keys(initialForm).map(key => (
          <label key={ key }>
            {`${ key }:` }
            { !(key === 'message') ?
              <input
                type="text"
                name={ key }
                placeholder={ placeHolder[key] }
                value={ formState[key] }
                onChange={ updateFormHandler } /> :
              <textarea
                type="text"
                name={ key }
                placeholder={ placeHolder[key] }
                value={ formState[key] }
                onChange={ updateFormHandler }
              ></textarea>
            }
          </label>
        ))
      }

      <button type="submit" className="small-button small-button--white-text">Submit</button>


    </form >
  );
}

export default ContactForm;