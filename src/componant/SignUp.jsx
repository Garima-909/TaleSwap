import React from 'react';

// import css
import './SignUp.css';

const SignUp = () => {
  return (
    <div className=' SignUpPage'>
       <div className='SignUp_form'>
       <h2 className=' SignUpText'>SignUp</h2>
       <form action="./action.php">
        <input type="text"  placeholder='Enter UserName' required className='UserName SignUp_field'/>
        <input type="email" placeholder='Enter Email' required className='SignUp_field'/>
        <input type='password' placeholder='Enter Password' required className='SignUp_password'/>
        <input type='password' placeholder='Confirm Password' required className='SignUp_password'/>
        <input type="submit" value="Continue" className='SignUp_btn' />
       </form>
       <div className='signUp'> Sign Up </div>
       <div className='T&C'>
       <input type="checkbox" name="T&C" id='checkBtn' />
       <label htmlFor="checkBtn" className='T&C_label'> I accept all <span>Terms and conditions</span> .</label>
       </div>
       </div>

    </div>
  );
}

export default SignUp;