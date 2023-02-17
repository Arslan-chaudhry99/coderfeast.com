import * as Yup from "yup"
export const applySchema = Yup.object({
    name: Yup.string().min(4).max(10).required("Please Enter Your Name*"),
    phone: Yup.string().min(6).max(12).required("Please Enter Your phone*"),
    email: Yup.string().required("Please  Enter valid email address."),
    file: Yup.object().required("Please  Enter valid email address."),

})