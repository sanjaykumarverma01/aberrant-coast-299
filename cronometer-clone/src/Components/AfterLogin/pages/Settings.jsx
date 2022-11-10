import React from "react";
import InsideNavbar from "../../InsideNavbar";
import InsideFooter from "../../InsideFooter";
import styles from "../css/setting.module.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Flex,
  Button,
  VStack,
  Switch,
  Input,
  useToast,
} from "@chakra-ui/react";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { saveData } from "../../../Utils/accessLocalStorage";
const Inputs = styled.input`
width:98%;
// outline:none;
margin:5px;
padding:10px;
border :1px solid black;
padding-right:-15px;

`

const Settings = () => {
    
  const toast = useToast()
  const navigate = useNavigate();
  const [form, setform] = useState({});
  const Targetvalue = (e) => {
    const { name, value } = e.target;
    setform({
        ...form,
        [name]: value
    })
}
  const handleLogout = () => {
    navigate("/");
  };
  const handleDeleteAccount = () => {
    navigate("/");
  };
  const token = JSON.parse(localStorage.getItem("token"))
  console.log(token)
  const handlersubmit = () => {
   
  console.log(form,"form")
    localStorage.setItem("login",form.updateemail)
   fetch("http://localhost:8000/auth/updateemail",{
method:"POST",
headers: {
  "Content-type": "application/json",
  authorization: `breaer ${token}`
},
body:JSON.stringify(form)


   }).then((res)=>{
    console.log(res)
    if(res){

   
      toast({
                title: " successful change email",
             
                status: "success",
                duration: 5000,
                isClosable: true,
            });
    }else{
      toast({
        title: " failed",
        description: res.message,
        status: "error",
        duration: 5000,
        isClosable: true,
    });
    }

    }).catch((err) => {
      console.log(err);
 
     })
   
    
  };
  const handlersubmit2 = () => {
   
    console.log(form,"form")
      localStorage.setItem("login",form.email)
     fetch("http://localhost:8000/auth/updatepassword",{
  method:"POST",
  headers: {
    "Content-type": "application/json",
    authorization: `breaer ${token}`
  },
  body:JSON.stringify(form)
  
  
     }).then((res)=>{
      console.log(res)
      if(res){
  
     
        toast({
                  title: " successful change password",
               
                  status: "success",
                  duration: 5000,
                  isClosable: true,
              });
      }else{
        toast({
          title: " failed",
          description: res.message,
          status: "error",
          duration: 5000,
          isClosable: true,
      });
      }
  
      }).catch((err) => {
        console.log(err);
   
       })
      
    };
  return (
    <div>
      <InsideNavbar />
      <div className={styles.setting}>
        <div>
          <Tabs variant="enclosed" size="sm" align="center">
            <TabList>
              <Tab>Account</Tab>
              <Tab>Profile+Target</Tab>
              <Tab>Target Scheduler</Tab>
              <Tab>Fasting</Tab>
              <Tab>Display</Tab>
              <Tab>Devices</Tab>
              <Tab>Sharing</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box textAlign="left">
                  <h1 className={styles.heading2}>Account Settings</h1>
                </Box>
                {/* Login box */}
                <Box border="1px solid #e0e0dc" alignItems={"center"}>
                  <Box
                    px="5"
                    py="2"
                    bgColor={"#fbfbfa"}
                    borderBottom="1px solid #e0e0dc"
                  >
                    <h2 className={styles.heading3}>Login</h2>
                  </Box>
                  <VStack spacing={"4"} margin="30px" className={styles.text}>
                    <Flex gap={"10"}>
                    {/* <Inputs w="100px" type='email' onChange={Targetvalue} placeholder='Email Address' name='email' />
                                <Inputs type='password' placeholder='password ' name='password' onChange={Targetvalue} />
                                <Inputs type='password' placeholder=' Confirm password ' name='confirmpassword' onChange={Targetvalue} /> */}
                      <Text >Email</Text>
                      {/* <Box
                     
                      >
                        Your Email
                      </Box> */}
                      <Inputs    px="2"
                        py="2"
                        bgColor={"#fbfbfa"}
                        border="1px solid #e0e0dc"
                        w="400px"  type='email' onChange={Targetvalue} placeholder='Email Address' name='updateemail' />
                      <Button colorScheme={"orange"} variant="ghost" onClick={()=>{
                        console.log("log")
                  handlersubmit()
                      }}>
                        Update
                      </Button>
                    </Flex>
                    <Flex gap={"10"}>
                      <Text w="100px">password</Text>
                      <Inputs type='password'   px="2"
                        py="2"
                        bgColor={"#fbfbfa"}
                        border="1px solid #e0e0dc"
                        w="400px" placeholder='password ' name='updatepassword' onChange={Targetvalue} />
                    
                      <Button colorScheme={"orange"} variant="ghost" onClick={()=>{
                        console.log("log")
                  handlersubmit2()
                      }}>
                        Update
                      </Button>
                    </Flex>
                    <hr style={{ width: "700px" }} />
                    <h2
                      className={styles.heading3}
                      style={{ position: "relative", left: "-250px" }}
                    >
                      Two-Factor Authentication
                    </h2>
                    <p className={styles.smalltext} style={{ width: "700px" }}>
                      Cronometer supports Two-Factor Authentication. To enable
                      two-factor authentication, download an authenticator app
                      from the app store or Google Play store such as Google
                      Authenticator app. Two factor is an optional additional
                      security feature
                    </p>
                    <Flex gap="20px">
                      <p>Enable Two-Factor Authentication</p>{" "}
                      <Switch size="sm" colorScheme={"orange"} />
                    </Flex>
                    <Button
                      colorScheme={"orange"}
                      size="sm"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </VStack>
                </Box>
                <br />
                {/* subscription box */}
                <Box border="1px solid #e0e0dc" alignItems={"center"}>
                  <Box
                    px="5"
                    py="2"
                    bgColor={"#fbfbfa"}
                    borderBottom="1px solid #e0e0dc"
                  >
                    <h2 className={styles.heading3}>Subscription</h2>
                  </Box>
                  <VStack spacing={"4"} margin="30px" className={styles.text}>
                    <Flex gap="40px">
                      <p>Account Type</p>
                      <p style={{ fontWeight: "600" }}>PRO</p>
                    </Flex>
                  </VStack>
                </Box>
                <br />
                {/* Notifications box */}
                <Box border="1px solid #e0e0dc" alignItems={"center"}>
                  <Box
                    px="5"
                    py="2"
                    bgColor={"#fbfbfa"}
                    borderBottom="1px solid #e0e0dc"
                  >
                    <h2 className={styles.heading3}>Notifications</h2>
                  </Box>
                  <VStack spacing={"4"} margin="30px" className={styles.text}>
                    <Flex gap="40px">
                      <p>
                        Email me a reminder if I forget to enter diary details
                      </p>
                      <Switch size="sm" colorScheme={"orange"} />
                      <p>by</p>
                      <Input type="time" size={"sm"} w="30" />
                    </Flex>
                  </VStack>
                </Box>
                <br />
                {/* privacy box */}
                <Box border="1px solid #e0e0dc" alignItems={"center"}>
                  <Box
                    px="5"
                    py="2"
                    bgColor={"#fbfbfa"}
                    borderBottom="1px solid #e0e0dc"
                  >
                    <h2 className={styles.heading3}>Privacy</h2>
                  </Box>
                  <VStack spacing={"4"} margin="30px" className={styles.text}>
                    <Flex gap="40px">
                      <p>Send me newsletters and promotional emails</p>
                      <Switch size="sm" colorScheme={"orange"} defaultChecked />
                    </Flex>
                    <Flex gap="40px">
                      <p>
                        Send me personalized in-app ads. <br />
                        (You will receive less relevant, non-personalized ads if
                        you opt out)
                      </p>
                      <Switch size="sm" colorScheme={"orange"} defaultChecked />
                    </Flex>
                  </VStack>
                </Box>
                <br />
                {/* Account data box */}
                <Box border="1px solid #e0e0dc" alignItems={"center"}>
                  <Box
                    px="5"
                    py="2"
                    bgColor={"#fbfbfa"}
                    borderBottom="1px solid #e0e0dc"
                  >
                    <h2 className={styles.heading3}>Account Data</h2>
                  </Box>
                  <VStack spacing={"4"} margin="30px" className={styles.text}>
                    <Flex gap="50px">
                      <BsFillCloudArrowDownFill size="1.5em" color="#999999" />
                      <p style={{ width: "400px" }}>
                        <span
                          style={{ fontWeight: "600", textAlign: "justify" }}
                        >
                          Export Data{" "}
                        </span>
                        <br />
                        Export all of your diary data to .csv files
                      </p>
                      <Button size="sm" colorScheme={"orange"} variant="ghost">
                        Export Data
                      </Button>
                    </Flex>
                    <Flex gap="40px">
                      <RiDeleteBin2Fill size="1.5em" color="#999999" />
                      <p style={{ width: "400px" }}>
                        <span
                          style={{ fontWeight: "600", textAlign: "justify" }}
                        >
                          Delete Account
                        </span>{" "}
                        <br />
                        Permanently delete your account and all of your data.
                      </p>
                      <Button
                        colorScheme={"orange"}
                        variant="outline"
                        size="sm"
                        onClick={handleDeleteAccount}
                      >
                        Delete Account
                      </Button>
                    </Flex>
                  </VStack>
                </Box>
              </TabPanel>
              {/* 2nd Tab */}
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <InsideFooter />
    </div>
  );
};

export default Settings;
