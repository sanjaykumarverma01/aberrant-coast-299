import { Box, Button, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"

const Inputs = styled.input`
width:98%;
// outline:none;
margin:5px;
padding:10px;
border :1px solid black;
padding-right:-15px;
border-redius:26px;

`
const Login = () => {
  return (
    <Box w={"100%"} mt="5" >

      <Box w={"600px"} m="auto" boxShadow= "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" p="30px">

        <Box display={"flex"} alignItems="center" justifyContent={"center"} mt="10" mb={"5"}>
          <Image w={"328px"} src='https://cdn1.cronometer.com/2020/landing/cronometer-logo.png' />
        </Box>

        <Box w={"100%"} m={"auto"} py={5} >



          <Inputs type='email' placeholder='Email Address' defaultValue={""} />
          <Inputs type='password' placeholder='password ' defaultValue={""} />


          <Button w={"100%"} h={"50px"} fontSize="20px" mt={"15px"} color="black" fontWeight={"bold"} >Create Account</Button>

          <Box display={"flex"} fontSize="20px" justifyContent={"space-between"} mt="50px">
            <Box>Not a member? <Text as="span" color="red">Sign Up Now</Text></Box>
            <Box>Forgot password?</Box>
          </Box>

        </Box>

      </Box>


    </Box>
  )
}

export default Login