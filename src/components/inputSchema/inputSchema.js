import * as yup from "yup";


// Minimum 8 characters at least one small alphabet,one capital alphabet, one number, at least one special character,
// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const formSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(8).matches(/(?=.*[a-z])/, "The string must contain at least 1 lowercase alphabetical character")
        .matches(/(?=.*[A-Z])/, "The string must contain at least 1 uppercase alphabetical character")
        .matches(/(?=.*[0-9])/, "The string must contain at least 1 numeric character")
        .matches(/(?=.*[!@#$%^&*])/, "The string must contain at least one special character")
        .matches(/(?=.{8,})/, "The string must be eight characters or longer").required("Required"),
    confirmPassword: yup.string().label('Confirm Password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
    firstName:yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    tel:yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('Required'),
});