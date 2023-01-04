import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContainer from "../AuthContainer";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
// import { FormGroup } from "reactstrap";

const SignUp = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  // const [userName, setuserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError("Please make sure your passwords match.");
      return;
    }

    if (error !== "") setError("");

    setRegistering(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        logging.info(result);
        navigate("/login");
      })
      .catch((error: { code: string | string[] }) => {
        logging.error(error);

        // if (error.code.includes("auth/userName")) {
        //   setError("Please enter your Name.");
        // } else
        if (error.code.includes("auth/weak-password")) {
          setError("Please enter a stronger password.");
        } else if (error.code.includes("auth/email-already-in-use")) {
          setError("Email already in use.");
        } else {
          setError("Unable to register.  Please try again later.");
        }

        setRegistering(false);
      });
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(Schemasignup),
  // });
  // const submitForm = async (signupValues: any, e: any) => {
  //   e.preventDefault();

  //   console.log("signupValues", signupValues);
  //   navigate("/login");
  // };
  return (
    <div className="bg-txtColor text-txtColor h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center bg-white px-6 py-8 rounded-xl shadow-2xl text-black w-full gap-6">
          <h2 className="text-bgColor text-3xl">Sign Up</h2>

          <AuthContainer header="">
            <div className="flex flex-col gap-6 w-full">
              {/* <FormGroup> */}
              {/* <TextField
                  className=" border border-grey-light w-full p-3 rounded mb-4"
                  type="name"
                  name="Name"
                  id="name"
                  placeholder="Name"
                  onChange={(event) => setuserName(event.target.value)}
                  value={userName}
                /> */}
              {/* </FormGroup> */}
              {/* <FormGroup> */}
              <TextField
                className=" border border-grey-light w-full p-3 rounded mb-4"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              {/* </FormGroup>
              <FormGroup> */}
              <TextField
                className=" border border-grey-light w-full p-3 rounded mb-4"
                autoComplete="new-password"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              {/* </FormGroup>
              <FormGroup> */}
              <TextField
                className=" border border-grey-light w-full p-3 rounded mb-4"
                autoComplete="new-password"
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Confirm Password"
                onChange={(event) => setConfirm(event.target.value)}
                value={confirm}
              />
              {/* </FormGroup> */}

              {/* <Button
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              variant="contained"
              color="success"
              type="submit"
            >
              Create Account
            </Button> */}

              <Button
                // className="w-full text-center py-3 rounded bg-green hover:bg-green-dark focus:outline-none my-1"
                className={`text-xl drop-shadow-md font-bold`}
                disabled={registering}
                variant="contained"
                color="success"
                onClick={() => signUpWithEmailAndPassword()}
              >
                Create Account
              </Button>
            </div>

            <div className="text-center text-bgColor text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a className="no-underline border-b text-secondary" href="#">
                Terms of Service
              </a>{" "}
              and
              <a className="no-underline border-b text-secondary" href="#">
                Privacy Policy
              </a>
            </div>

            {/* <p className="text-sm text-bgColor font-light text-gray-500 dark:text-gray-400">
            Already a member?
            <Link to="/login">
              <span>LogIn</span>
            </Link>
          </p> */}
          </AuthContainer>
        </div>
        <div className="text-grey-dark text-bgColor mt-6">
          Already have an account?
          <a className="text-lg text-secondary" href="/login">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
