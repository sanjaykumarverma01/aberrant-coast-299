import { Box, Button, Image, Img, Text,Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from "styled-components"
import axios from "axios"
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
  const [form, setform] = useState({});
  const Targetvalue = (e) => {
    const { name, value } = e.target;
    setform({
        ...form,
        [name]: value
    })
}

const handlersubmit = async(e) => {
  
    e.preventDefault();
    console.log(form, "form")
  //  const res =  await axios.post("",form)
  //  const data = res.data;

}
  return (
    <Box w={"100%"} mt="5" >

      <Box w={"600px"} m="auto" boxShadow= "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" p="30px">

        <Box display={"flex"} alignItems="center" justifyContent={"center"} mt="10" mb={"5"}>
          <Image w={"328px"} src='https://cdn1.cronometer.com/2020/landing/cronometer-logo.png' />
        </Box>
        <form onSubmit={handlersubmit}>
          

        <Box w={"100%"} m={"auto"} py={5} >



          <Inputs type='email' onChange={Targetvalue} placeholder='Email Address' name='email' defaultValue={""} />
          <Inputs type='password' placeholder='password ' name='password' onChange={Targetvalue} defaultValue={""} />

          <Input type={"submit"} w={"98%"}  cursor="pointer"
              flex={1}
             mt={2}
              fontSize={"lg"}
              ml={1}
         
              bg={"#67AC5B"}
              color={"white"}
              _hover={{
                bg: "#67AC5B",
              }}
              height="50px"
              _focus={{
                bg: "#67AC5B",
              }}/>
          

          <Box display={"flex"} fontSize="20px" justifyContent={"space-between"} mt="50px">
            <Box>Not a member? <Text as="span" color="red">Sign Up Now</Text></Box>
            <Box> <Text as="span" color="red">Forgot password?</Text></Box>
          </Box>

        </Box>

        </form>

      </Box>


    </Box>
  )
}

export default Login