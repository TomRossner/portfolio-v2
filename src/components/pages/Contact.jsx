import React, { useState } from 'react';
import Heading from '../common/Heading';
import "../../styles/contact.scss";
import useScrollReset from '../../hooks/useScrollReset';
import {IoMailOutline} from "react-icons/io5";
import {BsTelephone, BsGithub, BsLinkedin} from "react-icons/bs";
import { sendMail } from '../../services/api';
import {RxCross1} from "react-icons/rx";
import Spinner from "../../assets/spinner.svg";
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const Contact = () => {
  useScrollReset();
  
  const INITIAL_VALUES = {
    name: '',
    email: '',
    message: '',
  } 

  const [formValues, setFormValues] = useState(INITIAL_VALUES);
  const {name, message, email} = formValues;
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);
  const [hasSentEmail, setHasSentEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailSentStatusShown, setEmailSentStatusShown] = useState(true);
  
  const {theme} = useTheme();
  const {DARK} = THEME; 

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    // Set emailSent to true because an email is being sent 
    setHasSentEmail(true);

    // Set isLoading to true until we get a response
    setIsLoading(true);

    // Reset error
    setError('');
    
    // Show message response next to 'Send' button
    setEmailSentStatusShown(true);

    try {
      // Send email
      await sendMail(formValues);
      
      // sendMail succeeded, set emailSentSuccess to true
      setEmailSentSuccess(true);

      // Reset formValues
      setFormValues(INITIAL_VALUES);
      
      // Received a success response, set isLoading to false
      setIsLoading(false);
    } catch (error) {
      // Set emailSentSuccess to false because we received an error
      setEmailSentSuccess(false);

      // Received an error, set isLoading to false
      setIsLoading(false);

      // Set error to be the error we received
      setError(error.response.data.error);
    }
  }

  const handleFormValuesChange = (ev) => {
    setFormValues({...formValues, [ev.target.name]: ev.target.value});
  }

  const closeEmailSentStatus = () => {
    setEmailSentStatusShown(false);
  }

  return (
    <div id='contact' className='container'>
      <Heading text={'Contact me'}/>
      <div id='contactContent'>
        
        <div id='contactForm'>
          <h2>I'd love to hear from you! Feel free to get in touch using the form below or by sending an email directly to <span id='gmail' className={`${theme === DARK && 'dark'}`}>tomrossner2@gmail.com</span>.</h2>

          <form onSubmit={handleSubmit}>

            <div className="inputs-container">
              <div className='form-input'>
                <label htmlFor="name" className={`${theme === DARK && 'dark'}`}>Your name</label>
                <input type="text" id='name' name='name' value={name} onChange={handleFormValuesChange} className={`${theme === DARK && 'dark'}`}/>
              </div>

              <div className='form-input'>
                <label htmlFor="email" className={`${theme === DARK && 'dark'}`}>Your email</label>
                <input type="email" id='email' name='email' value={email} onChange={handleFormValuesChange} className={`${theme === DARK && 'dark'}`}/>
              </div>
            </div>

            <div className="form-input">
              <label htmlFor="message" className={`${theme === DARK && 'dark'}`}>Message</label>
              <textarea id='message' name='message' value={message} onChange={handleFormValuesChange} className={`${theme === DARK && 'dark'}`}/>
            </div>

            <div className="buttons-container">
              <button type='submit' disabled={isLoading}>{isLoading ? <img  id='spinner' src={Spinner} alt="loading" /> : 'Send'}</button>
              {emailSentStatusShown && (
                <p id='emailResponse' className={hasSentEmail ? emailSentSuccess ? 'green' : error ? 'red' : null : null}>
                  {hasSentEmail ? emailSentSuccess ? 'Email sent successfully!' : error ? error : null : null}
                  <span className='icon-container' onClick={closeEmailSentStatus}><RxCross1 className='icon'/></span>
                </p>)}
            </div>
          </form>
        </div>

        <div id='personalInfo' className={`${theme === DARK && 'dark'}`}>
          <h3>Tom Rossner</h3>
          <div id='phone-email'>
            <p><BsTelephone className='icon'/>058-4844789</p>
            <p><IoMailOutline className='icon'/>tomrossner2@gmail.com</p>
          </div>
          <div className="buttons-container">
            <a href='https://www.linkedin.com/in/tom-rossner/' target='_blank' rel='noreferrer'><BsLinkedin id='linkedin' className='icon'/>LinkedIn</a>
            <a href='https://github.com/TomRossner/' target='_blank' rel='noreferrer'><BsGithub id='github' className='icon'/>Github</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact;