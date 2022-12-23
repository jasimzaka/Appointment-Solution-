import { useFormik } from 'formik'
import "./signupForm.css"
import { formSchema } from '../inputSchema/inputSchema';
import 'react-toastify/dist/ReactToastify.css';


function SignupForm() {
    const onSubmit = () => {
        if (formik.values !== null) {
            fetch("http://localhost:5000/userss", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(formik.values)

            })
            .then(response => console.log(response))
            .then(json => console.log(json))
            console.log("not null")
        }
    
    }
    


    const formik = useFormik({
        initialValues: {
            fullName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            tel: "",
            id:"",
        },
        validationSchema: formSchema,
        onSubmit,
    });
   
    console.log(formik.values.id)


    return (
        <>
            <div >
                <form className="login-sinup-card" onSubmit={formik.handleSubmit} autoComplete='off'>
                    <h2 className="heading">Create free account</h2>
                    <div className={"customInput"}>
                        <label className="input-label">Full Name</label> <br></br>
                        <input
                            className={formik.errors.fullName && formik.touched.fullName ? "errorInputField" : "inputField"}
                            id='fullName'
                            type="text" value={formik.values.fullName}
                            placeholder="Enter your Full Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.fullName && formik.touched.fullName ? <label className='errorsField'>{formik.errors.fullName}</label> : ""}

                    </div>

                    <div className={"customInput"}>
                        <label className="input-label">Username</label> <br></br>
                        <input
                            className={formik.errors.userName && formik.touched.userName ? "errorInputField" : "inputField"}
                            id='userName'
                            type="text" value={formik.values.userName}
                            placeholder="Enter your Userame"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.userName && formik.touched.userName ? <label className='errorsField'>{formik.errors.userName}</label> : ""}
                    </div>

                    <div className={"customInput"}>
                        <label className="input-label">Password</label> <br></br>
                        <input
                            className={formik.errors.password && formik.touched.password ? "errorInputField" : "inputField"}
                            id='password'
                            type="password"
                            value={formik.values.password}
                            placeholder="Enter Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.password && formik.touched.password ? <label className='errorsField'>{formik.errors.password}</label> : ""}
                    </div>
                    <div className={"customInput"}>
                        <label className="input-label">Confirm Password</label> <br></br>
                        <input
                            className={formik.errors.confirmPassword && formik.touched.confirmPassword ? "errorInputField" : "inputField"}
                            id='confirmPassword'
                            type="password" value={formik.values.confirmPassword}
                            placeholder="Enter your password again"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.confirmPassword && formik.touched.confirmPassword ? <label className='errorsField'>{formik.errors.confirmPassword}</label> : ""}
                    </div>
                    <div className={"customInput"}>
                        <label className="input-label">Email</label> <br></br>
                        <input
                            className={formik.errors.email && formik.touched.email ? "errorInputField" : "inputField"}
                            id='email'
                            type="email" value={formik.values.email}
                            placeholder="Enter your email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.email && formik.touched.email ? <label className='errorsField'>{formik.errors.email}</label> : ""}

                    </div>
                    <div className={"customInput"}>
                        <label className="input-label">Phone</label> <br></br>
                        <input
                            className={formik.errors.tel && formik.touched.tel ? "errorInputField" : "inputField"}
                            id='tel'
                            type="tel" value={formik.values.tel}
                            placeholder="Enter your phone number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </input>
                        {formik.errors.tel && formik.touched.tel ? <label className='errorsField'>{formik.errors.tel}</label> : ""}

                    </div>

                    <button disabled={formik.isSubmitting} type="submit" style={{ width: "90%" }} className="btn btn-primary">Sign Up</button>



                </form>
            </div>

        </>
    )
}
export default SignupForm;