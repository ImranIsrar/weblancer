

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { StarFilled } from '@ant-design/icons';

import LoginForm from "../widgets/LoginForm";
import { SingupSchema, loginSchema } from "../../schemas";
import { addUser, setActiveUser } from "../../features/userDetails";
import 'react-phone-input-2/lib/style.css'
// import Auth from "../../services/AuthDashboardService";
// import secureLocalStorage from "react-secure-storage";



const Login = () => {
  
  // Form Data
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);
  
  const FormikLogin = useFormik({
    
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (value) => {
      
      const check = users.findIndex((find) => find?.email === value?.email);
      check != -1 ? (
 
        /* 
          * Login User Exists In Store
            # Only Set Active Email
        */
        dispatch(setActiveUser(value?.email)),
        navigate("/dashboard")
      ) : (

        /* 
          * Login User Not Exists in Store
            # Should be active Signup Form 
        */
        setActiveForm('signup')
      )

      // Auth.login(value)
      //   .then((res) => {
      //     console.log(res);
      //     secureLocalStorage.setItem("auth", res.data.token);
        
      //   }).catch((error) => {
      //     console.log(error)
      //   });
    }
  });

  const FormikSignup = useFormik({
    
    initialValues: { name: "", email: "", phone: "", password: "" },
    validationSchema: SingupSchema,
    onSubmit: (value) => {
      
      const check = users.findIndex((find) => find?.email === value?.email);
      check != -1 ? (
 
        /*
          * Singup User Exists In Store 
            # Login Form Should be Active
        */
        setActiveForm('login')
      ) : (

        /* 
          * Singup User Not Exists in Store 
            # Store in Redux
            # Set Active User Email
        */
        value['id'] = `${users?.length + 1}`,
        value['selected_theme'] = {},
        value['profile'] = {},
        value['fav'] = [],
        dispatch(addUser(value)),
        dispatch(setActiveUser(value?.email)),
        navigate("/dashboard")
      )
    }
  });

  // Switch Form
  const [activeForm, setActiveForm] = useState('login');
  const handleSwitchForm = (e) => {
    e.preventDefault();

    activeForm == 'login' ? (
      setActiveForm('signup')
    ) : (
      setActiveForm('login')
    )
  }

  return (
    <>
      <section className="login">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 p-0">
              <div className="login__banner bg-primary vh-100 d-flex align-items-center justify-content-center">
                <img className="masthead-avatar" src={`${import.meta.env.VITE_IMAGES_PATH}/avataaars.svg`} alt="..." width="200" height="212" />
              </div>
            </div>

            <div className="col-lg-7">

            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{activeForm}</h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <StarFilled />
              </div>
              <div className="divider-custom-line"></div>
            </div>

              <div className="row">
                <div className="col-md-8 mx-auto">
                  {/* Swtich Form */}
                  <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                    <ul className="breadcrumb">
                      <li className={`breadcrumb-item ${activeForm == "login" ? 'active'  : ''}`}>
                        <Link type="button" 
                          className="decoration-none change-form text-uppercase"
                          aria-current = {activeForm == "login" ? 'page'  : null}
                          onClick={handleSwitchForm}
                        >
                          Login
                        </Link>
                      </li>
                      <li className={`breadcrumb-item ${activeForm != "login" ? 'active'  : ''}`}>
                        <Link type="button" 
                          className={`decoration-none change-form text-uppercase`}
                          aria-current = {activeForm != "login" ? 'page'  : null}
                          onClick={handleSwitchForm}
                        >
                          Signup
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <LoginForm activeForm={activeForm} Formik={activeForm == 'login' ? FormikLogin : FormikSignup} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
