import { useFormik } from 'formik'
import "./signupForm.css"
import { formSchema } from '../inputSchema/inputSchema';

const onSubmit = () => console.log("submitted");

function SignupForm() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            email: "",
            tel:""
        },
        validationSchema: formSchema,
        onSubmit
    });

    console.log(formik, formik.errors)

    return (
        <>
            <div >
                <form className="login-sinup-card" onSubmit={formik.handleSubmit} autoComplete='off'>
                    <h2 className="heading">Create free account</h2>
                    <div className={"customInput"}>
                        <label className="input-label">First Name</label> <br></br>
                        <input
                            className={formik.errors.firstName ? "errorInputField" : "inputField"}
                            id='firstName'
                            type="text" value={formik.values.firstName}
                            placeholder="Enter your First Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.firstName ? <label className='errorsField'>{formik.errors.firstName}</label> : ""}

                    </div>
                    <div className={"customInput"}>
                        <label className="input-label">Last Name</label> <br></br>
                        <input
                            className={formik.errors.lastName ? "errorInputField" : "inputField"}
                            id='lastName'
                            type="text" value={formik.values.lastName}
                            placeholder="Enter your Last Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.lastName ? <label className='errorsField'>{formik.errors.lastName}</label> : ""}
                    </div>
                    <div className={"customInput"}>
                        <label className="input-label">Password</label> <br></br>
                        <input
                            className={formik.errors.password ? "errorInputField" : "inputField"}
                            id='password'
                            type="password" 
                            value={formik.values.password}
                            placeholder="Enter Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.password ? <label className='errorsField'>{formik.errors.password}</label> : ""}
                    </div>
                    <div className={"customInput"}>
                        <label className="input-label">Confirm Password</label> <br></br>
                        <input
                            className={formik.errors.confirmPassword ? "errorInputField" : "inputField"}
                            id='confirmPassword'
                            type="password" value={formik.values.confirmPassword}
                            placeholder="Enter your password again"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.confirmPassword? <label className='errorsField'>{formik.errors.confirmPassword}</label> : ""}
                    </div>
                    <div className={"customInput"}>
                        <label className="input-label">Email</label> <br></br>
                        <input
                            className={formik.errors.email ? "errorInputField" : "inputField"}
                            id='email'
                            type="email" value={formik.values.email}
                            placeholder="Enter your email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.email?<label className='errorsField'>{formik.errors.email}</label> : ""}

                    </div>
                    <div className={"customInput"}>
                        <label className="input-label">Phone</label> <br></br>
                        <input
                            className={formik.errors.tel ? "errorInputField" : "inputField"}
                            id='tel'
                            type="tel" value={formik.values.tel}
                            placeholder="Enter your phone number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.tel?<label className='errorsField'>{formik.errors.tel}</label> : ""}

                    </div>

                    <button type="button" style={{width:"90%"}} className="btn btn-primary">Sign Up</button>



                </form>
            </div>

        </>
    )
}
export default SignupForm;