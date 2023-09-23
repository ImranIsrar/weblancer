
import { useNavigate } from "react-router-dom";

const LoginForm = ({ activeForm, Formik }) => {

  const { values, errors, touched, isValid, dirty, handleBlur, handleChange, handleSubmit, resetForm  } = Formik;

  return (
    <>
      <form onSubmit={handleSubmit}>

        {
          /* Name */
          activeForm != 'login' ? (
            <div className="form-floating mb-3">
              <input id="singup_name" type="text" name="name" placeholder="Name"
                autoComplete="off"
                className={`form-control ${errors.name && touched.name ? 'input-error' : ''}`}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="name">Name</label>
            </div>
          ) : (
            ''
          )
        }
                    
        {/* Email */}
        <div className="form-floating mb-3">
          <input id="email" type="email" name="email" placeholder="name@example.com"
            autoComplete="off"
            className={`form-control ${errors.email && touched.email ? 'input-error' : ''}`}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="email">Email</label>
        </div>

        {
          /* Phone */
          activeForm != 'login' ? (
          <div className="form-floating mb-3">
            <input id="phone" type="text" name="phone" placeholder="Phone"
              autoComplete="off"
              className={`form-control ${errors.phone && touched.phone ? 'input-error' : ''}`}
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="phone">Phone</label>
          </div>
          ) : (
            ''
          )
        }

        {/* Password */}
        <div className="form-floating mb-3">
          <input id="password" type="password" name="password" placeholder="Password"
            autoComplete="off"
            className={`form-control ${errors.password && touched.password ? 'input-error' : ''}`}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="password">Passowrd</label>
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <div>
            <button className={`btn btn-primary btn-xl ${dirty && isValid ? '' : 'disabled'}`}
              id="submitButton" type="submit">Send</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm
