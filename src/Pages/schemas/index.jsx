import * as Yup from "yup"
export const loginSchema = Yup.object({
    username: Yup.string().min(4).max(10).required("Please Enter Your Name*"),
    Password: Yup.string().min(6).max(12).required("Please Enter Your Password*"),
    email: Yup.string().required("Please  Enter valid email address."),
})
