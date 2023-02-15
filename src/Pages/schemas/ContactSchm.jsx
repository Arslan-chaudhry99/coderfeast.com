import * as Yup from "yup"
export const contactSchm = Yup.object({
    name: Yup.string().min(2).max(20).required("Please Enter Your Name*"),
    email: Yup.string().min(9).max(28).required("Please Enter Your Email*"),
    phone: Yup.number().min(6).required("Please Enter Your Phone*"),
    message: Yup.string().min(6).max(4000).required("Please enter your message*"),
})