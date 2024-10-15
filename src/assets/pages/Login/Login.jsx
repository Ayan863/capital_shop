// import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";
import { useFormik } from "formik";

import FormLogin from "./FormLogin";
import { Alert, Button, IconButton,Typography } from "@mui/joy";
import React, { useState } from "react";
import axios from "axios";
// import { Typography } from "@mui/material";
// import { Alert, IconButton, Typography } from "@mui/joy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(null)
  const submit = (value, action) => {
    setTimeout(() => {
      // const getApi=()=>{
        axios.get("https://66eba35c2b6cf2b89c5b2596.mockapi.io/login")
        .then((res=>{
          let data=res.data
          const isitTrue=data.some((item)=> (item.name==value.userName && item.password==value.password))
          if (isitTrue) {
            setLoginSuccess(true);
          } else {
            setLoginSuccess(false);
          }
        
        }))
      // }
      console.log(value);
      action.resetForm();
    });
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: FormLogin,
    onSubmit: submit,
  });

  // const navigate =useNavigate()

  return (
    <form onSubmit={handleSubmit} className="card-Section flex justify-center p-5">
      <div className="card bg-zinc-100 w-[440px] m-[15px] p-[30px] rounded-3xl drop-shadow-md">
        <h2 className="font-jost font-semibold text-[39px] text-stone-800 text-center leading-5 p-4">
          Login
        </h2>
        <div className="type flex flex-col p-[25px] gap-[15px]">
          <div className="user-name flex flex-col">
            <label htmlFor="name">
              <span className="font-jost text-[17px] text-stone-800 leading-5 pl-[7px] font-medium">Username</span>
            </label>
            <div className="input anime relative flex items-center p-[10px] w-[329px] border-b-[2px] border-stone-500">
              <CiUser />
              <input className="font-jost text-[16px] text-stone-800 leading-5 block h-[55px] bg-transparent pt-0 pr-2 pb-0 pl-4 border-0 outline-none" type="text" id="name" name="name" placeholder="Type your username" value={values.name} onChange={handleChange} />
            </div>
            {errors.name && (
              <Alert
                startDecorator={<WarningIcon />}
                variant="soft"
                color="danger"
                endDecorator={
                  <React.Fragment>
                    <IconButton variant="soft" size="m" color="danger">
                      <CloseIcon />
                    </IconButton>
                  </React.Fragment>
                }
              >
                {errors.name}
              </Alert>
            )}
          </div>
          <div className="password flex flex-col">
            <label htmlFor="password">
              <span className="font-jost text-[17px] text-stone-800 leading-5 pl-[7px] font-medium">Password</span>
            </label>
            <div className="input anime relative flex items-center p-[10px] w-[329px] border-b-[2px] border-stone-500">
              <MdLockOutline />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Type your password"
                value={values.password}
                onChange={handleChange}
                className="font-jost text-[16px] text-stone-800 leading-5 block h-[55px] bg-transparent pt-0 pr-2 pb-0 pl-4 border-0 outline-none"
              />
            </div>
            {errors.password && (
              <Alert
                startDecorator={<WarningIcon />}
                variant="soft"
                color="danger"
                endDecorator={
                  <React.Fragment>
                    {/* <Button variant="soft" color="danger" sx={{ mr: 1 }}>
              Undo
            </Button> */}
                    <IconButton variant="soft" size="m" color="danger">
                      <CloseIcon />
                    </IconButton>
                  </React.Fragment>
                }
              >
                {errors.password}
              </Alert>
            )}
            {
              (loginSuccess==true) ? ( <Alert
                sx={{ alignItems: 'flex-start' }}
                variant="soft"
                color="success"
                startDecorator={<CheckCircleIcon />}
                endDecorator={
                  <IconButton variant="soft" color="success">
                    <CloseRoundedIcon />
                  </IconButton>
                }
              >
                <div>
                  <Typography level="h6">Success</Typography> {/* Displaying the title */}
                  <Typography level="body-sm" color="success">
                    Qeydiyyat uğurla tamamlandı
                  </Typography>
                </div>
              </Alert>):  (<Alert
                startDecorator={<WarningIcon />}
                variant="soft"
                color="danger"
                endDecorator={
                  <React.Fragment>
                    {/* <Button variant="soft" color="danger" sx={{ mr: 1 }}>
              Undo
            </Button> */}
                    <IconButton variant="soft" size="m" color="danger">
                      <CloseIcon />
                    </IconButton>
                  </React.Fragment>
                }
              >
                İstifadəçi adı və ya şifrə yalnış daxil olunub
              </Alert>)
            }
          </div>
        </div>
        <div className="button flex flex-col items-center">
          <div className="forgot flex flex-col justify-end gap-[20px] w-[85%]">
            <a href="#" className="font-jost text-[14px] leading-5 text-stone-800 flex justify-end">Forgot password?</a>
            <button className="text-[16px] leading-5 uppercase flex justify-center items-center py-[20px]  h-[50px] bg-gradient-to-r from-purple-500 to-pink-300 rounded-full text-white font-bold hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-500">LOGIN</button>
          </div>
        </div>
        <div className="about flex flex-col items-center">
          <div className="social-media flex flex-col items-center gap-[10px] p-[20px]">
            <a href="#" className="font-fost text-14px leading-6 text-stone-800">Or Sign Up Using</a>
            <div className="icons flex gap-[10px]">
              <div className="facebook social w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-[#3b5998] hover:bg-[#666666]">
                <FaFacebookF className="fb media w-[20px] h-[20px] text-white" />
              </div>
              <div className="twitter social w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-[#1da1f2] hover:bg-[#666666]">
                <FaTwitter className="tw media  w-[20px] h-[20px] text-white" />
              </div>
              <div className="google social w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-[#ea4335] hover:bg-[#666666]">
                <FaGoogle className="g media w-[20px] h-[20px] text-white" />
              </div>
            </div>
          </div>
          <div className="sign flex flex-col items-center">
            <a href="#" className="font-fost text-14px leading-6 text-stone-800">Or Sign Up Using</a>
            <a href="" className="font-fost text-14px leading-6 text-stone-800">Sign Up</a>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Login;
