import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AuthContainer from "../../components/AuthContainer";
// import ErrorText from "../../components/Error_Text";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
// import { SignInWithSocialMedia } from "./modules";
import { TextField } from "@mui/material";

const LoginPage = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        navigate("/");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
      });
  };

  return (
    <div className=" h-full w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center bg-white px-6 py-8 rounded-xl shadow-2xl text-black gap-6">
        <h2 className="text-bgColor text-3xl">Login </h2>

        <AuthContainer header="">
          <div className="flex flex-col gap-6 w-full">
            {/* <FormGroup> */}
            <TextField
              className=" border border-grey-light w-96 p-3 rounded mb-4"
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
              className="border border-grey-light w-full p-3 rounded mb-4"
              autoComplete="new-password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            {/* </FormGroup> */}

            <Button
              // className="w-full text-center py-3 rounded bg-green hover:bg-green-dark focus:outline-none my-1"
              className={`text-xl font-bold drop-shadow-md`}
              disabled={authenticating}
              variant="contained"
              color="success"
              onClick={() => signInWithEmailAndPassword()}
            >
              Login
            </Button>
          </div>

          <div>
            <p className="text-grey-dark text-lg text-bgColor mt-6 flex justify-center ">
              Dont have an account?
              <Link className="text-lg text-secondary" to="/signup">
                Signup here.
              </Link>
            </p>
            {/* <p className="text-grey-dark text-bgColor mt-6">
                <Link to="/forget">Forget your password?</Link>
              </p> */}
          </div>
          {/* <ErrorText error={error} /> */}
        </AuthContainer>
      </div>
    </div>
  );
};

export default LoginPage;
