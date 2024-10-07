import React,{useState}  from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { config } from "../Components/GeneralFunction";
import { Notify } from "../Components/Notify";
import cookies from 'js-cookies';
import Swal from "sweetalert2";


const SignIn=()=> {
  const [user, setUser] = useState({
    email_address: "",
    password: "",
  })

  const handleChange = (event) => {
    let {name, value} = event.target
      setUser({...user, [name]:value})
    }
    
 const handleSubmit = (event) => {
    event.preventDefault();

      Swal.fire({
        ImageUrl:'../assets/loader.png',
        ImageHeight:1000,

    })

    const fd = new FormData();
    fd.append('email_address', user.email_address);
    fd.append('password', user.password);

    let url = 'http://solidrockschool.com.ng/api/people/applicant/login' 
    axios.post(url, fd, config).then(response =>{
      if(response.data.status === 200){
        cookies.setItem ('token',response.data.token)
        Notify({
          title:'saved',
          message:response.data.message,
          type:'success'
        })
       
        window.location.href='/profile'
      }else{
        Notify({
          title:'error',
          message:response.data.message,
          type:'danger'
        })
        console.log("unable to save data")
      }
    })
   
  }

  return (
    <div>
      <Header page={"SignIn"} />
      <section className="clearfix job-bg user-page">
        <div className="container text-center">
          <div className="user-account-content">
            <div className="user-account">
              <h2>User Login</h2>

              <form action="#">
                <div className="form-group">
                  <input
                    type="email"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                    name="email_address"
                    value={user.email_address}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    required
                  />
                </div>

                
                <button onClick={handleSubmit} type="submit" href="" className="btn">
                  Login
                </button>
              </form>

              <div className="user-option">
                <div className="checkbox pull-left">
                  <label for="logged">
                    <input type="checkbox" name="logged" id="logged" /> Keep me
                    logged in{" "}
                  </label>
                </div>
                <div className="pull-right forgot-password">
                  <a href="#">Forgot password</a>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary">
              Create a New Account
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SignIn;
