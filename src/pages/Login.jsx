import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

import Input from "../components/LoginInput/Input";
import loginImage from "../assets/images/LoginBackground.png";
import TSL_LOGO_SM from "../assets/images/TSL_LOGO_SM.png";
import googleIcon from "../assets/images/googleIcon.png";

const Login = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div className="flex justify-center items-center w-screen ">
      {/* background image */}
      <img
        className="object-cover h-screen w-screen absolute top-0 left-0 z-0"
        src={loginImage}
        alt="login image"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center md:gap-x-0 lg:gap-x-10 xl:gap-x-20 h-4/5 px-2 py-1 z-10">
        <div className="hidden md:flex flex-col justify-around">
          <div className="flex items-center pt-10">
            <div>
              <img src={TSL_LOGO_SM} alt="" />
            </div>
            <div className="lg:flex hidden text-white text-6xl">
              <p>The Suit Lab</p>
            </div>
          </div>
          <div className="flex flex-col items-start text-white text-4xl">
            <p className="text-center w-full">WELCOME TO THE SUIT LAB</p>
          </div>
        </div>

        <div className="flex flex-col w-11/12 bg-white px-5 py-3 lg:py-10 drop-shadow-2xl rounded-3xl h-fit">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
            Login
          </h1>

          <form className="flex flex-col align-center justify-center md:px-5 lg:px-10 pl-2 pr-2 mt-4">
            {/* <div className="font-semibold text-sm lg:text-base text-red-600 text-center mb-1 md:mb-3">
              Account does not exist or Password is incorrect
            </div> */}

            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              error={error}
              className={"mb-5 lg:mb-8"}
            />
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              error={error}
              className={"mb-2 lg:mb-3"}
            />

            <div className="text-sm lg:text-base text-stone-500 mb-2">
              Forgot Password?
            </div>
            <div className="flex items-center flex-col">
              <div className="flex flex-col items-start px-1"></div>
              <Button
                width={{ base: "100%", md: "70%" }}
                padding={{ base: "5px", lg: "20px" }}
                fontSize={{ base: "l", lg: "xl" }}
                color={"white"}
                bg={"gray.700"}
                _hover={{ bg: "gray.800" }}
                _active={{ bg: "black" }}
              >
                Login
              </Button>

              <div className="flex item-center justify-center items-center float-left m-2 md:m-4 w-full md:w-3/4">
                <hr className="w-full mx-2 border-2 rounded-sm" />
                Or
                <hr className="w-full mx-2 border-2 rounded-sm" />
              </div>
            </div>
            <div className="flex flex-col items-center rounded-bl-3xl rounded-br-3xl float-left">
              <Button width={{ base: "100%", md: "70%" }} mb={"10px"}>
                <img className="mr-2" src={googleIcon} alt="googleIcon" />
                <span className="text-stone-800">Signup with Google</span>
              </Button>
              <div className="flex flex-col lg:flex-row justify-center align-center text-center float-left">
                <div className="text-stone-500 md:mr-2">New Here?</div>
                <div className="text-black">Create New Account</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
