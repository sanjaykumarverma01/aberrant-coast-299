import { Avatar, Box, Button, Checkbox, FormControl, Heading, Image, Input, Radio, Select, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import styled from "styled-components"

const Inputs = styled.input`
width:98%;
// outline:none;
margin:5px;
padding:10px;
border :1px solid black;
padding-right:-15px;

`

const Signin = () => {
    const [checkedItems, setCheckedItems] = React.useState([false, false,false])
    const [isDisableds,setDisables]=useState(false)

    const allChecked = checkedItems.every(Boolean)
  
 
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
    const handlersubmit=()=>{

    }
    useEffect(()=>{
        console.log(allChecked)
        if(allChecked){
            setDisables(!isDisableds)
        }
    },[allChecked])
    return (
        <Box >
            <Box w="100%" display="flex" alignContent={"center"} justifyContent="center" p={3} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>

                <Image w={"328px"} src='https://cdn1.cronometer.com/2020/landing/cronometer-logo.png' />
            </Box>
            <Box bgColor={"#FBFBFA"}>



                <Box bgColor={"white"} w="50%" m={"auto"}>

                    <Box w="100%" display="flex" fontFamily="normal normal bold 28px/42px Open Sans" justifyContent="center" m={"50px"}>
                        <Heading size={"xl"} fontWeight="700" textAlign={"center"} >Create Your Free Account</Heading>
                    </Box>
                    <Box display="flex" alignContent={"center"} justifyContent="center" p={5} w={"100%"} m="auto" flexDirection={"column"} boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" >
                        <FormControl onSubmit={handlersubmit}>
                            <Box w={"100%"} m={"auto"} py={5} >



                                <Inputs type='email' placeholder='Email Address'  name='email'/>
                                <Inputs type='password' placeholder='password ' name='password' />
                                <Inputs type='password' placeholder=' Confirm password ' name='confirmpassword' />


                            </Box>

                            <Box w={"100%"} display="flex" alignItems={"center"} flexDirection={"column"} my={5} fontSize="16px" fontWeight={"medium"} boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"  >

                                <Heading fontSize={"25px"} my={5} >
                                    Your Body Type
                                </Heading>

                                <Box display={"flex"} alignItems="center" textAlign="center" flexDirection={"column"} mb={5}   >

                                    <Stack spacing={5} direction='row' my={2}>
                                        <Text>sex:</Text>
                                        <Radio size='lg' name='male' colorScheme='red'>
                                            Male
                                        </Radio>
                                        <Radio size='lg' name='female' colorScheme='red'>
                                            Female
                                        </Radio>

                                    </Stack>
                                    <Stack display={"flex"} direction='row' my={2} >
                                        <Text>Born:</Text>
                                        <Box>  <Input type={"date"} name="date" /></Box>

                                    </Stack>

                                    <Stack display={"flex"} direction='row' my={2} >
                                        <Text>Height:</Text>

                                        <Select border="1px solid black" size={"sm"} >
                                            <option value='1'>1</option>
                                            <option value='2'> 2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'> 5</option>
                                            <option value='6'>6</option>
                                        </Select>
                                        <Text>'</Text>
                                        <Select size={"sm"}>
                                            <option value='1'>1</option>
                                            <option value='2'> 2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'> 5</option>
                                            <option value='6'>6</option>
                                        </Select>
                                        <Text>"/</Text>
                                        <Input type={"number"} size={"sm"} name="cm" />
                                        <Text>cm</Text>



                                    </Stack>
                                    <Stack display={"flex"} direction='row' >
                                        <Text>Weights:</Text>
                                        <Input type={"number"} w="50px" size={"sm"}  name="weight"/>
                                        <Select size={"sm"} placeContent="select" w="100px">

                                            <option value='kg'> kg</option>
                                            <option value='Pounds'>Pounds</option>

                                        </Select>

                                      




                                    </Stack>





                                </Box>






                            </Box>
                        </FormControl>

                        <Box m="auto" my={3} px="5" py={"8"} boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" >
                            <Text textAlign={"center"} fontSize="25px" fontWeight={"medium"}> Terms of Service & Privacy Settings</Text>

                            <Box px={5} py={2}>
                                <Checkbox   isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}> Check All</Checkbox>
                                <Text fontWeight={"medium"}>
                                    By checking the box below you are indicating you have read and agree to our <Text as={"span"} color={"red"}> Terms of Service</Text> and  <Text as={"span"} color={"red"}>Privacy Policy.</Text>
                                </Text>
                            </Box>

                            <Box px={5} py={2}>
                                <Checkbox isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>  I agree to the cronometer.com <Text as={"span"} color={"red"}>Terms of Service</Text></Checkbox>
                                <Text fontWeight={"medium"}>
                                    In order to give you the best experience using Cronometer, we need certain data permissions. (These are optional and can be updated in your settings any time.)
                                </Text>
                            </Box>

                            <Box px={5} >
                                <Checkbox   isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])} >I agree to receive newsletters and promotional materials.</Checkbox>

                            </Box>
                            <Box px={5}>
                                <Checkbox isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([ checkedItems[0],e.target.checked])}  >  I agree to receive personalized in-app ads. (You will receive less relevant, non-personalized ads if you opt out)</Checkbox>

                            </Box>





                        </Box>
                    </Box>

{!isDisableds ?   <Button w={"95%"} ml="5" h={"60px"} isDisabled  fontSize="20px" px="10px" py={"15px"} color="white" mt={"45px"} bgColor="#67AC5B" opacity={"0.5"}>Create Account</Button> : <Button w={"95%"} ml="5" h={"60px"}  fontSize="20px" px="10px" py={"15px"} color="white" mt={"45px"} bgColor="#67AC5B" >Create Account</Button> }
                    

                </Box>

                <Box textAlign={"center"} mt={"125px"} fontSize>
                    <Text>Need help?</Text>
                    <Text>Email Support</Text>
                </Box>





            </Box>


        </Box>
    )
}

export default Signin