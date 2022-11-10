import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from './Innavbar.module.css';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  Flex,
  Grid,
  Box,
  GridItem,
  Text,
} from '@chakra-ui/react'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
const InsideNavbar = () => {
  const [open, setopen] = useState(false)

var email = localStorage.getItem("login")
  const handleArrow = () => {
    let status = !open;
    setopen(status);
  };

  return (
    <div className={styles.navbar}>
      <div style={{display:"flex"}} >
        <img className={styles.logo} src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png" alt="" />
        
          <div style={{paddingTop:"30px"}}>
          <Popover >
            <PopoverTrigger>
              <Button color="orange.500" size="lg" onClick={handleArrow}>{open ? <IoMdArrowDropdown/> : <IoMdArrowDropup/>}</Button>
            </PopoverTrigger>
            <Portal >
              <PopoverContent w="550px" h='300px' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" ml='100px'>
                <PopoverArrow />
                <Flex>
                <PopoverHeader display="flex">Signed in as:{email}</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
            <Button colorScheme='orange' variant='outline' ml='30px' onClick={()=>{
                  localStorage.clear()

         
                }}>
                      <Link to="/login"></Link>
                    Logout
                  </Button>
  
                </PopoverBody>
                </Flex>
                <Grid templateColumns='repeat(2, 1fr)' gap={6} mt='20px'>
                  <GridItem border='1px solid white'  _hover={{border:"1px solid rgb(221, 99, 17)"}} pl='20px'>
                    <Flex  gap={20}>
                      <Text fontSize='2xl'>Gold</Text>
                      <Text fontSize='sm'>$49.99USD/Year</Text>
                    </Flex>
                    <Box>
                      <Text fontSize='xs' mt='20px'>Our primimum features likes timestamps and food suggestion will help you plan customers and share your prefect diet</Text>
                    </Box>
                    <Link to="/plan" border='1px solid red'>
                      <Text ml='60%' mt='70px' color='rgb(221, 99, 17)'>Learn More</Text>
                      </Link>
                  </GridItem >


                  <GridItem border='1px solid white'  _hover={{border:"1px solid rgb(221, 99, 17)"}} pl='20px'>
                    <Flex  gap={10}>
                      <Text fontSize='2xl'>Professional</Text>
                      <Text fontSize='sm'>$29.95/mo</Text>
                    </Flex>
                    <Box>
                      <Text fontSize='xs' mt='20px'>Are you a Coach or Healthcare professional that believes diet is a critical compoenets heatlh and fitness ? Learn how you can monitor clients nutrients in real time with Cronamerter pro</Text>
                    </Box>
                    <Link to="/plan" border='1px solid red'>
                      <Text ml='60%' mt='40px' color='rgb(221, 99, 17)'>Learn More</Text>
                      </Link>
                  </GridItem >
                </Grid>
              </PopoverContent>
            </Portal>
          </Popover>
          </div>
      </div>

      <div className={styles.links}>
        <Link className={styles.link} to="/dairy"><h4>Diary</h4></Link>
        <Link className={styles.link} to="/trends"><h4>Trends</h4></Link>
        <Link className={styles.link} to="/foods"><h4>Foods</h4></Link>
        <Link className={styles.link} to="/setting"><h4>Settings</h4></Link>
        <Link className={styles.link} to="/plans"><h4>Plans</h4></Link>
        <Link className={styles.link} to="/helps"><h4>Help</h4></Link>
      </div>


    </div>
  );
};

export default InsideNavbar;
