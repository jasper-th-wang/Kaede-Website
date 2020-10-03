import React from 'react';



const ContactForm = () => {

  return (
    <form>
      <label>
        Name:
      </label>
      <input type="text" placeholder="Your name" />
      <label>
        Email:
        </label>
      <input type="text" placeholder="Your email address" />
      <label>
        Phone:
        </label>
      <input type="text" placeholder="Contact number" />
      <label>
        Message:
        </label>
      <textarea placeholder="Please enter your message"></textarea>
    </form>
  );
}

export default ContactForm;