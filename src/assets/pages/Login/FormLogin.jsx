// import React from 'react'
import * as yup from "yup"
export const FormLogin=yup.object().shape({
  name:yup.string().required("Zehmet olmasa as daxil edin"),
  password:yup.string().required("Parol daxil edin"),
})

export default FormLogin
