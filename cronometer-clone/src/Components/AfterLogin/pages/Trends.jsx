import React from 'react'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import styles from '../css/trends.module.css'
import InnerNavTrend from '../../InnerNavTrend';
import { Text, Box, Spacer, Stack, Image, Button, Flex, } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import trendsearch from "../images/trendsearch.png"
const Trends = () => {
  return (
    <div>
      <InsideNavbar/>
      <InnerNavTrend/>
      <div >
      <Box  pl="200px" pr="200px" pt="50px" pb="100px" border={'1px solid black'}>
      <Box textAlign='left' pb="30px">
      <Text fontSize='3xl' fontWeight={"600"}>Charts</Text>
      <Stack  direction='row' >
      <Box>
      <Text fontSize='sm'>Customize your charts to review and analyze the information you’re most interested in.</Text>
      </Box>  
      <Spacer/>
      <Stack direction='row' justify={'center'}>
       <WarningIcon/>
       <Text  fontSize='sm' >LEARN MORE</Text>
               
            </Stack>
      </Stack>
      </Box>

      <Box  bg='gray.50'
  columns={{ sm: 2, md: 4 }}
  spacing='8'
//   p='10'
  textAlign='center'
  rounded='lg'
  color='gray.400'>

      <Flex  boxShadow='xl' p='6' rounded='md' bg='white' h="auto"  justifyContent={'center'} pb="40px" borderRadius={'5px'}  >
      
        <Box w='200%' pt="40px" >
            <Image w="240px" pl="40px" src="https://cdn1.cronometer.com/logos/cronometer-logo-gold.png"></Image>
            <Text  textAlign={'center'} fontWeight={'600'} >GOLD</Text>
        </Box>
       <Spacer/>
        <Box w='200%' ml="50px" pt="20px"  >
        <Image h="100px" w="120px" src={trendsearch}></Image>
        </Box>
        <Spacer/>
        <Box w='300%' pt="40px" textAlign={'left'} >
            <Text fontWeight={'600'} color="black">Gain valuable insights with Gold!</Text>
            <Text color={'black'}>Create custom charts for the biometrics and nutrients that matter most to you.</Text>
        </Box>
        <Spacer/>
        <Box w='200%' >
        <Button bg='#67ac5b' h="30px" w="200px" color='white' size='sm'  mt="50px">
   See All Features
  </Button>
        </Box>
 
     </Flex>
      </Box>
      
      <Box mt="50px">
        <Box textAlign={'right'} color={'orange'}>Manage Charts →</Box>
      </Box>

      <Box border={'1px solid black'} h="700px" mt="30px">
        <Box pl="50px" pr="50px">

        <Flex >
            <Box>
                <Text fontSize={'xl'} mt="10px" fontWeight="600">Energy Consumed (kcal)</Text>
                <Text fontSize={'sm'}>From Sep 29, 2022 to Sep 30, 2022</Text>
            </Box>
           
           
        </Flex>
        </Box>
        
      </Box>

       </Box>         
      </div>
      <InsideFooter/>
    </div>
  )
}

export default Trends