import React from 'react'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import styles from '../css/trends.module.css'
import InnerNavTrend from '../../InnerNavTrend';
import { Text, Box, Spacer, Stack, Image, Button, Flex, } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import trendsearch from "../images/trendsearch.png"
import trendgraph from "../images/trendgraph.jpg"
import trendgraphh from "../images/trendgraphh.jpg"
const Trends = () => {
  return (
    <div>
      <InsideNavbar/>
 <div className={styles.trends}>

      <InnerNavTrend/>
      <div >
      <Box pt="50px" pb="100px" >
      <Box textAlign='left' pb="30px" w="95%">
      <Text fontSize='3xl' fontWeight={"600"}>Charts</Text>
      <Stack  direction='row' >
      <Box>
      <Text fontSize='sm'>Customize your charts to review and analyze the information you’re most interested in.</Text>
      </Box>  
      <Spacer/>
      <Stack direction='row' color="grey" justify={'center'}>
       <WarningIcon/>
       <Text  fontSize='sm' color="grey">LEARN MORE</Text>
               
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

      <Box border={'1px solid grey'} h="auto" pb="50px" mt="30px">
        <Box pl="50px" pr="50px">

        <Flex >
            <Box>
                <Text fontSize={'xl'} mt="10px" fontWeight="600">Energy Consumed (kcal)</Text>
                <Text fontSize={'sm'}>From Sep 29, 2022 to Sep 30, 2022</Text>
            </Box>
            <Spacer/>
            <Box mr="10px" mt="20px">
            <select name="cars" id="cars" >
            <option value="volvo">Last 3 days</option>
            <option value="volvo">Last 7 weeks</option>
            <option value="saab">Last 2 weeks</option>
            <option value="opel">Last 3 weeks</option>
            <option value="audi">Last 4 weeks</option>
            <option value="volvo">Last 3 months</option>
            <option value="saab">Last 6 months</option>
            <option value="opel">Last year</option>
            <option value="audi">All Time</option>
            <option value="audi">Custom Range</option>
          </select>
            </Box>
            
            <Box mt="20px">
            <select name="cars" id="cars">
            <option value="volvo">All Days</option>
            <option value="saab">Non-Empty Days</option>
            <option value="opel">Completed</option>
            
          </select>
            </Box>
         
           
        </Flex>
        <Stack direction='row' justifyContent={'right'}>
          <Text fontSize={'sm'} mr="10px">Left Y-Axis Unit</Text>
          <Box mt="20px">
            <select name="cars" id="cars">
            <option value="volvo">kcal</option>
            </select>
            </Box>
        </Stack>
        <Box>
          <Image src={trendgraph}></Image>
        </Box>
        <Box>

        </Box>
       
        </Box>
        
      </Box>



      <Box border={'1px solid grey'} h="auto" pb="50px" mt="30px">
        <Box pl="50px" pr="50px">

        <Flex >
            <Box>
                <Text fontSize={'xl'} mt="10px" fontWeight="600">Energy Consumed (kcal)</Text>
                <Text fontSize={'sm'}>From Sep 29, 2022 to Sep 30, 2022</Text>
            </Box>
            <Spacer/>
            <Box mr="10px" mt="20px">
            <select name="cars" id="cars" >
            <option value="volvo">Weight</option>
            <option value="volvo">Waist Size</option>
            <option value="saab">VO2 Max</option>
            <option value="opel">Upper Arm Size</option>
            <option value="audi">Triglycerdes</option>
            <option value="volvo">Total Cholestrole</option>
            <option value="saab">Total Body Water</option>
            <option value="opel">Thigh sixe</option>
            <option value="audi">Stool</option>
            <option value="audi">Sleep</option>
          </select>
            </Box>

            <Box mr="10px" mt="20px">
            <select name="cars" id="cars" >
            <option value="volvo">Last 3 days</option>
            <option value="volvo">Last 7 weeks</option>
            <option value="saab">Last 2 weeks</option>
            <option value="opel">Last 3 weeks</option>
            <option value="audi">Last 4 weeks</option>
            <option value="volvo">Last 3 months</option>
            <option value="saab">Last 6 months</option>
            <option value="opel">Last year</option>
            <option value="audi">All Time</option>
            <option value="audi">Custom Range</option>
          </select>
            </Box>
            
            <Box mt="20px">
            <select name="cars" id="cars">
            <option value="volvo">All Days</option>
            <option value="saab">Non-Empty Days</option>
            <option value="opel">Completed</option>
            
          </select>
            </Box>
         
           
        </Flex>
        <Stack direction='row' justifyContent={'right'}>
          <Text fontSize={'sm'} mr="10px">Left Y-Axis Unit</Text>
          <Box mt="20px">
            <select name="cars" id="cars">
            <option value="volvo">kg</option>
            <option value="volvo">lbs</option>
            </select>
            </Box>
        </Stack>
        <Box>
          <Image src={trendgraphh}></Image>
        </Box>
        <Box>

        </Box>
       
        </Box>
        
      </Box>

       </Box>    
      </div>

 </div>
      <InsideFooter/>
    </div>
  )
}

export default Trends