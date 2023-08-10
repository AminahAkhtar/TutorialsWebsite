import React from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div id="login-page">
       <svg
      id="logo"
      width="333"
      height="44"
      viewBox="0 0 333 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.53 9.28L26.21 0.599997H43.57L56.59 13.62V44H17.53L0.17 26.64L13.19 13.62H26.21L13.19 26.64L21.87 35.32H45.74V15.79L39.23 9.28H17.53ZM69.6294 44V13.62H58.7794V44H69.6294ZM73.9694 35.32H82.6494L95.6694 22.3L82.6494 9.28H56.6094L48.1154 0.599997H86.9894L108.689 22.3L86.9894 44H73.9694V35.32ZM156.4 15.79L143.38 28.81H119.51L106.49 15.79V0.599997H117.34V13.62L123.85 20.13H139.04L145.55 13.62V0.599997H156.4V15.79ZM136.87 44H126.02V30.98H136.87V44ZM204.131 9.28L212.811 0.599997H167.241L158.561 9.28H204.131ZM167.241 35.32L158.561 44H193.281L201.961 35.32H167.241ZM158.561 13.62H171.581L175.921 17.96H188.941L201.961 30.98H188.941L184.601 26.64H171.581L158.561 13.62ZM243.183 9.28L251.863 0.599997H206.293L197.613 9.28H243.183ZM206.293 35.32L197.613 44H232.333L241.013 35.32H206.293ZM197.613 13.62H210.633L214.973 17.96H227.993L241.013 30.98H227.993L223.653 26.64H210.633L197.613 13.62ZM284.435 9.28L293.115 0.599997H232.665L241.035 9.28H284.435ZM243.205 13.62H254.055V15.79H275.755L267.075 24.47H254.055V35.32H273.585L282.265 44H243.205V13.62ZM332.168 15.79L319.148 28.81H295.278L282.258 15.79V0.599997H293.108V13.62L299.618 20.13H314.808L321.318 13.62V0.599997H332.168V15.79ZM312.638 44H301.788V30.98H312.638V44Z"
        fill="white"
      /></svg
    > <Link to="/"><span id="signupbutton">Sign Up</span></Link>

    <div>
      <div className="left">
        <h3>We Missed You!</h3>
        <p>
          Let's get back to <span><b>&lt;</b></span
          ><span>coding</span><span><b>/&gt; </b></span>right now!
        </p>

        <input type="text" placeholder="Email" className="email" />
        <input type="text" placeholder="Password" className="password" />
        <Link to="/home"><button className="loginbutton">Login</button></Link>
        <p id="forgetpassword">Forget Password</p>
      </div>
      <div className="slash"></div>
      <div className="right">
        <button className="google">
          <span
            ><svg
              id="googleicon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0.875C6.75195 0.875 0.875 6.75195 0.875 14C0.875 21.248 6.75195 27.125 14 27.125C21.248 27.125 27.125 21.248 27.125 14C27.125 6.75195 21.248 0.875 14 0.875ZM18.8926 19.4375C17.7031 20.5332 16.0801 21.1777 14.1436 21.1777C11.3398 21.1777 8.91406 19.5693 7.7334 17.2256C7.24707 16.2559 6.96875 15.1602 6.96875 14C6.96875 12.8398 7.24707 11.7441 7.7334 10.7744C8.91406 8.42773 11.3398 6.81934 14.1436 6.81934C16.0771 6.81934 17.7002 7.53125 18.9453 8.68848L16.8887 10.748C16.1445 10.0361 15.1982 9.67578 14.1465 9.67578C12.2773 9.67578 10.6953 10.9385 10.1299 12.6348C9.98633 13.0654 9.9043 13.5254 9.9043 14C9.9043 14.4746 9.98633 14.9346 10.1299 15.3652C10.6953 17.0615 12.2773 18.3242 14.1436 18.3242C15.1104 18.3242 15.9307 18.0693 16.5723 17.6387C17.334 17.1289 17.8379 16.3701 18.0049 15.4707H14.1436V12.6934H20.9023C20.9873 13.165 21.0312 13.6543 21.0312 14.1611C21.0312 16.3496 20.249 18.1865 18.8926 19.4375Z"
                fill="#F7FFBC"
              /></svg></span
          >Continue With Google
        </button>

        <button className="twitter">
          <span
            ><svg
              id="twittericon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0.875C6.75195 0.875 0.875 6.75195 0.875 14C0.875 21.248 6.75195 27.125 14 27.125C21.248 27.125 27.125 21.248 27.125 14C27.125 6.75195 21.248 0.875 14 0.875ZM20.3076 10.7686C20.3164 10.9062 20.3164 11.0498 20.3164 11.1904C20.3164 15.4912 17.041 20.4453 11.0557 20.4453C9.20996 20.4453 7.49902 19.9092 6.05762 18.9863C6.32129 19.0156 6.57324 19.0273 6.84277 19.0273C8.36621 19.0273 9.7666 18.5117 10.8828 17.6387C9.45312 17.6094 8.25195 16.6719 7.8418 15.3828C8.34277 15.4561 8.79395 15.4561 9.30957 15.3242C8.57342 15.1747 7.91174 14.7749 7.43696 14.1927C6.96218 13.6106 6.70357 12.8821 6.70508 12.1309V12.0898C7.13574 12.333 7.64258 12.4824 8.17285 12.5029C7.72708 12.2058 7.3615 11.8034 7.10853 11.3311C6.85556 10.8589 6.72302 10.3316 6.72266 9.7959C6.72266 9.18945 6.88086 8.63574 7.16504 8.15527C7.98214 9.16114 9.00175 9.98382 10.1576 10.5698C11.3135 11.1558 12.5797 11.4921 13.874 11.5566C13.4141 9.34473 15.0664 7.55469 17.0527 7.55469C17.9902 7.55469 18.834 7.94727 19.4287 8.58008C20.1641 8.44238 20.8672 8.16699 21.4941 7.79785C21.251 8.55078 20.7412 9.18652 20.0645 9.58789C20.7207 9.51758 21.3535 9.33594 21.9395 9.08105C21.4971 9.73145 20.9434 10.3086 20.3076 10.7686Z"
                fill="#F7FFBC"
              /></svg></span
          >Continue With Twitter
        </button>

        <button className="facebook">
          <span>
            <svg
              id="facebookicon"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 13C25.5 6.1 19.9 0.5 13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.05 4.8 24.0875 10.5 25.25V16.75H8V13H10.5V9.875C10.5 7.4625 12.4625 5.5 14.875 5.5H18V9.25H15.5C14.8125 9.25 14.25 9.8125 14.25 10.5V13H18V16.75H14.25V25.4375C20.5625 24.8125 25.5 19.4875 25.5 13Z"
                fill="#F7FFBC"
              /></svg></span
          >Continue With Facebook
        </button>
      </div>
    </div>
    <p id="account">Don't Have An Account? <Link to="/"><span id="now">Signup Now</span></Link></p>
    </div>
  )
}

export default Login
