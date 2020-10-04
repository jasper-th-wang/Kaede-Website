import React, { useState, useEffect } from 'react';
import classes from './ContactForm.module.scss';

const encodeData = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

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

  const [formState, setFormState] = useState(initialForm)

  const updateFormHandler = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setFormState(prevState => {
      return { ...prevState, [name]: value }
    });

  }

  // test submitting form to firebase
  // body should jjust be encodeData(formState);
  const submitFormHandler = (event) => {
    event.preventDefault();
    fetch('https://react-hooks-update-e68e5.firebaseio.com/formTest.json', {
      method: 'POST',
      body: JSON.stringify({ form: encodeData(formState) }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      if (!res.ok) throw new Error('Error occured when submitting this form');
      console.log(encodeData(formState));
      console.log('success!');
      setFormState(initialForm);
    }).catch(error => {
      console.log(error);
    });
  }

  // // test
  // useEffect(() => {
  //   console.log(formState);
  // }, [formState])


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