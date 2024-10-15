// import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

// import "./../../../assets/css/main.css";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import FormSignup from "./FormSignup";
import { Alert, IconButton } from "@mui/joy";
import React from "react";
import axios from "axios";
const Signup = () => {
  const submit = (value, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 1000);
  
    axios.post("https://66eba35c2b6cf2b89c5b2596.mockapi.io/login", value)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: FormSignup,
    onSubmit: submit,
  });

  // const navigate =useNavigate()

  return (
    <form onSubmit={handleSubmit} className="form flex justify-center p-5">
      <div className="card bg-zinc-100 w-[440px] m-[15px] p-[30px] rounded-3xl drop-shadow-md">
        <h2 className="font-jost font-semibold text-[39px] text-stone-800 text-center leading-5 p-4">
          SignUp
        </h2>
        <div className="type flex flex-col p-[25px] gap-[15px]">
          <div className="user-name flex flex-col">
            <label htmlFor="userName">
              <span className="font-jost text-[17px] text-stone-800 leading-5 pl-[7px] font-medium">
                Full Name
              </span>
            </label>
            <div className="input anime relative flex items-center p-[10px] w-[329px] border-b-[2px] border-stone-500">
              <CiUser />
              <input
                className="font-jost text-[16px] text-stone-800 leading-5 block h-[55px] bg-transparent pt-0 pr-2 pb-0 pl-4 border-0 outline-none"
                type="text"
                id="userName"
                name="userName"
                placeholder="Jhon Doe"
                value={values.userName}
                onChange={handleChange}
              />
            </div>
            {errors.userName && (
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
                {errors.userName}
              </Alert>
            )}
          </div>
          <div className="email flex flex-col">
            <label htmlFor="email">
              <span className="font-jost text-[17px] text-stone-800 leading-5 pl-[7px] font-medium">
                Email Address
              </span>
            </label>
            <div className="input anime relative flex items-center p-[10px] w-[329px] border-b-[2px] border-stone-500">
            <MdOutlineMailOutline />

              <input
                type="email"
                id="e-mail"
                name="email"
                placeholder="johndoe@gmail.com"
                value={values.email}
                onChange={handleChange}
                className="font-jost text-[16px] text-stone-800 leading-5 block h-[55px] bg-transparent pt-0 pr-2 pb-0 pl-4 border-0 outline-none"
              />
            </div>
            {errors.email && (
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
                {errors.email}
              </Alert>
            )}
          </div>
          <div className="password flex flex-col">
            <label htmlFor="password">
              <span className="font-jost text-[17px] text-stone-800 leading-5 pl-[7px] font-medium">
                Password
              </span>
            </label>
            <div className="input anime relative flex items-center p-[10px] w-[329px] border-b-[2px] border-stone-500">
              <MdLockOutline />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
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
          </div>
          <div className="confirmPassword flex flex-col">
            <label htmlFor="confirmPassword">
              <span className="font-jost text-[17px] text-stone-800 leading-5 pl-[7px] font-medium">
                Confirm Password
              </span>
            </label>
            <div className="input anime relative flex items-center p-[10px] w-[329px] border-b-[2px] border-stone-500">
              <MdLockOutline />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Password"
                value={values.confirmPassword}
                onChange={handleChange}
                className="font-jost text-[16px] text-stone-800 leading-5 block h-[55px] bg-transparent pt-0 pr-2 pb-0 pl-4 border-0 outline-none"
              />
            </div>
            {errors.confirmPassword && (
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
                {errors.confirmPassword}
              </Alert>
            )}
          </div>
        </div>
        <div className="button flex flex-col items-center">
          <div className="forgot flex flex-col justify-end gap-[20px] w-[85%]">
            <a
              href="#"
              className="font-jost text-[14px] leading-5 text-stone-800 flex justify-end"
            >
              Forgot password?
            </a>
            <button className="text-[16px] leading-5 uppercase flex justify-center items-center py-[20px]  h-[50px] bg-gradient-to-r from-purple-500 to-pink-300 rounded-full text-white font-bold hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-500">
              LOGIN
            </button>
          </div>
        </div>
        <div className="about flex flex-col items-center">
          <div className="social-media flex flex-col items-center gap-[10px] p-[20px]">
            <a
              href="#"
              className="font-fost text-14px leading-6 text-stone-800"
            >
              Or Sign Up Using
            </a>
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
            <a
              href="#"
              className="font-fost text-14px leading-6 text-stone-800"
            >
              Or Sign Up Using
            </a>
            <a href="" className="font-fost text-14px leading-6 text-stone-800">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Signup;
