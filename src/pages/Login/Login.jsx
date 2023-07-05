import { useGoogleLogin, GoogleLogin } from '@react-oauth/google';

import loginImage from '../../assets/images/loginImage.png'
import googleIcon from '../../assets/images/googleIcon.png'
import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import api from '../../config/api';

import styleProps from './styleProps';

const handleSuccess = (response) => {
    console.log(response)
    const token = response.access_token

    const data = {
        token
    }

    api.post("/test", data)
}

const handleFailure = (response) => {
    console.log(response)
}

const Login = () => {

    const googleLogin = useGoogleLogin({
        onSuccess: handleSuccess,
        onFailure: handleFailure,
        cookiePolicy: 'single_host_origin',
    })

    return (
        <Box>
            <img src={loginImage} alt="login image" style={styleProps.loginBgImage} />
            <Box {...styleProps.form} >
                <Text textAlign="center" fontSize="4xl" fontWeight="bold">
                    L O G I N
                </Text>
                <Flex
                    flex="1"
                    flexDirection="column"
                    mt="10"
                    mb="10"

                >
                    <Box display="flex" flexDirection="column">
                        <Box mb="10" width="500px" float="left">
                            <Text fontWeight="semibold" fontSize="xl">
                                Email
                            </Text>
                            <Input {...styleProps.inputEmail} />
                        </Box>
                        <Box mb="10" width="500px" float="left" >
                            <Text fontWeight="semibold" fontSize="xl">
                                Password
                            </Text>
                            <Input {...styleProps.inputPassword} />
                        </Box>

                    </Box>
                    <Text color="red.700" mb="2">
                        Account does not exist or Password is incorrect
                    </Text>
                    <Text color="stone.500" mb="2">
                        Forgot Password?
                    </Text>
                    <Flex justify="center" pb="5">
                        <Button
                            {...styleProps.button}

                        >
                            Login
                        </Button>
                    </Flex>
                    <Text align="center" pb="5">
                        ----------------Or------------------
                    </Text>
                    <Box {...styleProps.lowerContainer}>
                        {/* <GoogleLogin
                            onSuccess={handleSuccess}
                            onFailure={handleFailure}
                            render={renderProps => (
                                <Button onClick={renderProps.onClick} >
                                    <img src={googleIcon} alt="googleIcon" />
                                    <Text color="stone.500" ml='2'>Sign Up with Google</Text>
                                </Button>
                            )}
                            cookiePolicy='single_host_origin'
                        /> */}
                        <Button onClick={() => googleLogin()}>
                            <img src={googleIcon} alt="googleIcon" />
                            <Text color="stone.500" ml='2'>Sign Up with Google</Text>
                        </Button>
                        <Flex justify="center" align="center">
                            <Text color="stone.500" mr="2">New Here?</Text>
                            <Text color="black">Create New Account</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Login