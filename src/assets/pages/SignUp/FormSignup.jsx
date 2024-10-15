// import React from 'react'
import * as yup from "yup"
export const FormSignup=yup.object().shape({
  userName:yup.string().required("Zehmet olmasa as daxil edin"),
  email:yup.string().required("email addresinizi daxil edin").email("email adresinizi dighru daxil edin"),
  password:yup.string().required("Parol daxil edin"),
  confirmPassword:yup.string().required("Qeyd etdiyiniz parolu yeniden daxil edin")
  .oneOf([yup.ref("password")],"duzgun daxil edin")

})

export default FormSignup
