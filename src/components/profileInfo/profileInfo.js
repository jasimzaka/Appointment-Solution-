import { useFormik } from 'formik'
import "./profileInfo.css"
import { formSchema } from '../inputSchema/inputSchema';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuid } from 'uuid';

function ProfileInfo() {
    const userid= uuid();
    const onSubmit = () => {
        console.log(formik.isSubmitting)
        formik.values.id=userid.slice(0,8)
        console.log(formik.values)
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
        }
    }


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            gender: "",
            city: "",
            currentAddress: "",
            parmanentAddress: "",
            startingTime:"",
            closingTime:"",
            tel: "",
            profession: "",
            checkbox:false,
           

        },

        validationSchema: formSchema,
        onSubmit,
    });
    console.log(formik)

    return (
        <>
            <div >
                <form className="login-sinup-card" onSubmit={formik.handleSubmit} autoComplete='off'>
                    <h2 className="heading">Profile Info</h2>

                    <div className='customInputContainer'>
                        <div className={"customInput"}>
                            <label className="input-label">First Name</label> <br></br>
                            <input
                                className={formik.errors.firstName && formik.touched.firstName ? "errorInputField" : "inputField"}
                                id='firstName'
                                type="text" value={formik.values.firstName}
                                placeholder="Enter your First Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.firstName && formik.touched.firstName ? <label className='errorsField'>{formik.errors.firstName}</label> : ""}
                        </div>
                        <div className={"customInput"}>
                            <label className="input-label">Last Name</label> <br></br>
                            <input
                                className={formik.errors.lastName && formik.touched.lastName ? "errorInputField" : "inputField"}
                                id='lastName'
                                type="text" value={formik.values.lastName}
                                placeholder="Enter your Last Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.lastName && formik.touched.lastName ? <label className='errorsField'>{formik.errors.lastName}</label> : ""}

                        </div>

                    </div>

                    <div className='customInputContainer'>
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
                    </div>
                    <div className='customInputContainer'>
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
                    </div>
                    <div className='customInputContainer'>
                        <div className={"customInput"}>
                            <label className="input-label">Gender</label> <br></br>
                            <input
                                className={formik.errors.gender && formik.touched.gender ? "errorInputField" : "inputField"}
                                id='gender'
                                type="text" value={formik.values.gender}
                                placeholder="Enter your Gender 'male/female'"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.email && formik.touched.gender ? <label className='errorsField'>{formik.errors.gender}</label> : ""}

                        </div>
                        <div className={"customInput"}>
                            <label className="input-label">City</label> <br></br>
                            <input
                                className={formik.errors.city && formik.touched.city ? "errorInputField" : "inputField"}
                                id='city'
                                type="text" value={formik.values.city}
                                placeholder="Enter your City"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.city && formik.touched.city ? <label className='errorsField'>{formik.errors.city}</label> : ""}

                        </div>
                    </div>
                    <div className='customInputContainer'>
                        <div className={"customInput"}>
                            <label className="input-label">Current Address</label> <br></br>
                            <input
                                className={formik.errors.currentAddress && formik.touched.currentAddress ? "errorInputField" : "inputField"}
                                id='currentAddress'
                                type="text" value={formik.values.currentAddress}
                                placeholder="Enter your Current Address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.currentAddress && formik.touched.currentAddress ? <label className='errorsField'>{formik.errors.currentAddress}</label> : ""}

                        </div>
                        <div className={"customInput"}>
                            <label className="input-label">Permanent Address</label> <br></br>
                            <input
                                className={formik.errors.parmanentAddress && formik.touched.parmanentAddress ? "errorInputField" : "inputField"}
                                id='parmanentAddress'
                                type="text" value={formik.values.parmanentAddress}
                                placeholder="Enter your Permanent Address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.parmanentAddress && formik.touched.parmanentAddress ? <label className='errorsField'>{formik.errors.parmanentAddress}</label> : ""}

                        </div>
                    </div>
                    <div className='customInputContainer'>
                        <div className={"customInput"}>
                            <label className="input-label">Profession</label> <br></br>
                            <input
                                className={formik.errors.profession && formik.touched.profession ? "errorInputField" : "inputField"}
                                id='profession'
                                type="text" value={formik.values.profession}
                                placeholder="Enter your Profession"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.profession && formik.touched.profession ? <label className='errorsField'>{formik.errors.profession}</label> : ""}

                        </div>
                        <div className={"customInput"}>
                            <label className="input-label">Working Hours</label> <br></br>
                            <input
                                className={formik.errors.startingTime && formik.touched.startingTime ? "errorInputFieldWorkingHours" : "inputFieldWorkingHours"}
                                id='startingTime'
                                type="time" value={formik.values.startingTime}
                                placeholder="Enter your Profession"
                                
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.startingTime && formik.touched.startingTime? <label className='errorsField'>{formik.errors.startingTime}</label> : ""}
                           
                            <label className={"timeFeild"}>To</label>
                           
                            <input
                                className={formik.errors.closingTime && formik.touched.closingTime ? "errorInputFieldWorkingHours" : "inputFieldWorkingHours"}
                                id='closingTime'
                                type="time" 
                                value={formik.values.closingTime}
                                
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </input>
                            {formik.errors.closingTime && formik.touched.closingTime? <label className='errorsField'>{formik.errors.closingTime}</label> : ""}
                             

                        </div>

                    </div>
                    <div className='customInputContainer checkBoxContainer'>
                        <div className={"customInput"}> 
                            <input
                                className={"inputField checkboxInputFeild"}
                                id='checkbox'
                                type="checkbox" value={formik.values.checkbox}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                                Check if you want to work as a service provider
                            
                        </div>

                    </div>

                    
                    <button type="submit" className="btn btn-primary bttn">Save Info</button>


                </form>
            </div>

        </>
    )
}
export default ProfileInfo;