import React from 'react'
import "./css/main.css"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import CommentIcon from '@mui/icons-material/Comment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import auth from './controllers/authentication'
import getCookie from './controllers/cookieManagement'

const Contact = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const getData = async () => {
    const token = getCookie('jwtoken')
    const reqUrl = 'http://localhost:5000/user/getInfo';
    const reqOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ token: token })
    }
    const result = await fetch(reqUrl, reqOptions);
    const response = await result.json();
    setName(response.name)
    setEmail(response.email)
  }
  useEffect(() => {
    auth()
    getData()
  }, [])


  const Submitfun = async () => {
    const uname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    if (uname === '' || email === '' || comment === '') {
      alert("Enter all the details properly...")
      document.getElementById("name").focus();
    }
    else {
      const requrl = "http://localhost:5000/user/feedback";
      const reqOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ "email": email, "feedback": comment, "name": uname , "date":Date.now()})
      }

      const result = await fetch(requrl, reqOptions);
      const response = await result.json();
      // console.log(response);
      if (response.status === "success") {
        alert("Feedback Added successfully!!!")
        window.location.href = "/";
      }
    }
  }

  return (
    <>
      <div className='superdiv'>
        <div className='headingdiv '>
          <h2>Reach Us</h2>
        </div>

        <div className='maindiv'>
          <div className='infodiv'>
            <div>
              <span className='icons'><EmailIcon /></span>
              <a href="mailto:rkandsons1996@yahoo.in">unofficialamitlimbasiya@gmail.com</a>
            </div>
            <div>
              <span className='icons'><LocalPhoneIcon /></span>

              <span>97373 47361</span>
            </div>
            <div>
              <span className='icons'><EmailIcon /> Address:</span><br />
              <p>
                BVM Engineering college. <br />
                Vallabh Vidyanagar <br />
                Anand, Gujarat 388120 <br />
                India. <br />
              </p>
              <iframe title='BVM' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620177.101232328!2d70.97264662612587!3d23.978249498846345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e74c03b7749%3A0xab364c66fd4834c!2sBirla%20Vishvakarma%20Mahavidyalaya%20(BVM)!5e0!3m2!1sen!2sin!4v1670959120083!5m2!1sen!2sin" width="450vh" height="250vh"></iframe>
              <br /><br />
              <a href="https://www.google.co.in/maps/place/Birla+Vishvakarma+Mahavidyalaya+(BVM)/@22.5525136,72.923825,17z/data=!4m12!1m6!3m5!1s0x395e4e74c03b7749:0xab364c66fd4834c!2sBirla+Vishvakarma+Mahavidyalaya+(BVM)!8m2!3d22.5525136!4d72.923825!3m4!1s0x395e4e74c03b7749:0xab364c66fd4834c!8m2!3d22.5525136!4d72.923825?hl=en&authuser=0">
                  {/* <a href="https://www.google.co.in/maps/place/Birla+Vishvakarma+Mahavidyalaya+(BVM)/@22.5525136,72.9216363,17z/data=!3m1!4b1!4m5!3m4!1s0x395e4e74c03b7749:0xab364c66fd4834c!8m2!3d22.5525136!4d72.923825?hl=en&authuser=0"> */}
              <button className='gdb-font'>Get Direction</button>
              </a>
            </div>
          </div>
          <div className='reachusdiv'>
            <div>
              <div>
                <span className='icons'><DriveFileRenameOutlineIcon /></span>
                <label htmlFor='name' className='Label'>Name:</label> <br />
                <input type="text" name="name" id="name" size="40" className='Input_take' value={name} readOnly /><br /> <br />
              </div>
              <div className='ContactinputDivs'>
                <span className='icons'><EmailIcon /></span>
                <label htmlFor="email" className='Label'>Email:</label><br />
                <input type="email" name="email" id="email" size="40" className='Input_take' value={email} readOnly /><br /> <br />
              </div>
              <div>
                <span className='icons'><CommentIcon /></span>
                <br />
                <textarea rows={10} cols={60} type="text" className='Input_take' placeholder='Enter the suggestions/query/feedback...' name="feedback" id="comment" required /><br /> <br />
              </div>

              <div>
                <input type="button" className='SubmitButtonCss csb-fh' value="Submit" onClick={Submitfun} />
              </div>

              <br />
              <a href="/login">Already have an account? Login here!</a><br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact