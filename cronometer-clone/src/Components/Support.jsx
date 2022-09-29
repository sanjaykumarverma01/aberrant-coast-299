import React from 'react'
import {Search2Icon } from '@chakra-ui/icons'
import {Box,Flex,Spacer,Image,Text,Input,InputGroup,InputLeftElement,Grid,GridItem} from "@chakra-ui/react";
const Support = () => {
  return (
    <div>
        {/* <header></header> */}
      <Box h="71px">
        <Box ml="200px" mr="200px" p="5px">

          <Flex >
           <Box p="4">
            <Image w="120px"  src='https://theme.zdassets.com/theme_assets/197219/111fe6921e8b22116b39eaa745ea08e38a718e0d.png' alt='Dan Abramov' />
           </Box>
             <Spacer />
           <Box p='4' color={"orange"}>
            <Text> Submit a request</Text>
           </Box>
          </Flex>
       
       </Box>
      </Box>

      <Flex mb="40px" justify="center" align="center" h="400px" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url("https://theme.zdassets.com/theme_assets/197219/baaad44a0afe757ffa490034f9f3b731b9b6b121.jpg")`}>
        
        <InputGroup m="auto" w="50%" bg="white" borderRadius="700%">
          <InputLeftElement w={30}>
            <Search2Icon />
          </InputLeftElement>
          <Input focusBorderColor="#ff763f" pr="4.5rem" placeholder="Search"/>
        </InputGroup>
      </Flex>

      <Box h="71px" >
        <Box  ml="230px" mr="230px">

        <Grid templateColumns='repeat(3, 1fr)' gap={2}>
            <GridItem w='100%' h='100' bg='white' border={"1px solid rgba(255, 118, 63, 1)"} color="rgba(255, 118, 63, 1)" borderRadius={"10px"} p="20px" textAlign={"center"} fontWeight="600px" _hover={{bg: "#ff763f",color: "#fff"}}>
                <h4 >Web Version</h4>
                <Text fontSize='sm'> User Manual for Cronometer on Web</Text>
                
            </GridItem>
            <GridItem w='100%' h='100'  bg='white' border={"1px solid rgba(255, 118, 63, 1)"} color="rgba(255, 118, 63, 1)" borderRadius={"10px"}  p="20px" textAlign={"center"} fontWeight="600px" _hover={{bg: "#ff763f",color: "#fff"}}>
            <h4>Mobile App</h4>
            <Text fontSize='sm'> User Manual for the Cronometer Mobile App</Text>
                
            </GridItem>
            <GridItem w='100%' h='100'  bg='white' border={"1px solid rgba(255, 118, 63, 1)"} color="rgba(255, 118, 63, 1)" borderRadius={"10px"}  p="20px" textAlign={"center"} fontWeight="600px" _hover={{bg: "#ff763f",color: "#fff"}}>
            <h4>Professional Version</h4>
            <Text fontSize='sm'> User Manual for Cronometer Pro</Text>
              
            </GridItem>
 
        </Grid>
        <br/>
        <Box border={"1px solid rgba(255, 118, 63, 1)"} color="rgba(255, 118, 63, 1)" borderRadius={"10px"}  p="20px" textAlign={"center"} fontWeight="600px" _hover={{bg: "#ff763f",color: "#fff"}}>
            <h4>FAQ</h4>
            <Text fontSize='sm'> Cronometer Frequently Asked Questions </Text>
        </Box>
        
       <br/>
        <Box mb="100px" mt="100px">
          <hr/>
        </Box>
        <br/>
      
       
       </Box>
     
     <hr />
     <Box ml="200px" mr="200px" mt="50px" pb="100px">
        <Text>Cronometer</Text>
     </Box>
      </Box>

   
     
      
    </div>
  )
}

export default Support
