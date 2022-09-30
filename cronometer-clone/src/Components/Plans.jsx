import React from 'react'
import {Box,Text,Flex ,useColorModeValue, Stack,VStack,Button,Image, GridItem,Grid, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,AccordionIcon} from '@chakra-ui/react';
    // import { AccordionIcon} from '@chakra-ui/icons'

    function PriceWrapper({ children }) {
        return (
          <Box
            mb={2}
            shadow="base"
            borderWidth="0.5px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'l'} bgColor="#fbfbfa" w='25%'>
            {children}
          </Box>
        );
      }
const Plans = () => {
  return (
    <div>
      <Box  pl="200px" pr="200px" mt="10px">
      <Box textAlign='left'>
      <Text fontSize='3xl' fontWeight={"600"}>Plans</Text>
      <Text fontSize='sm'>Check out our range of affordable plans for individuals or for healthcare professionals.</Text>
      </Box>
       
      <Flex textAlign="center" justify='space-around' mt="100px">
        <Text fontSize='2xl' fontWeight={"600"}>
          Individuals
        </Text>
        <Text fontSize='2xl' fontWeight={"600"}>
         Professionals
        </Text>
      </Flex>

       
      <Stack 
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper border="1px solid black">
          <Box py={2} px={8} >
            <Image src='https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg' w='40px' h='40px' margin='auto'/>
            <br/>
            <Text >BASIC</Text>
            <br/>
            <Text>The basic tool you need to track your nutrition for free!</Text>
            <br/>
              <Text fontSize="2xl" fontWeight="700">$0</Text>
              <Text>USD/month</Text>
            
          </Box>
          <VStack
            py={4}
            borderBottomRadius={'xl'}>
            <Box w="80%" pt={16}>
              <Button w="full" colorScheme="blue" variant="outline">
                Current Plan
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={2} px={8}>
          <Image src='https://cdn1.cronometer.com/2021/landing/gold-icon_1.svg' w='40px' h='40px' margin='auto'/>
          <br/>
            <Text >GOLD</Text>
            <br/>
            <Text>For those that want to get serious about their health.</Text>
            <br/>
              <Text fontSize="2xl" fontWeight="700">
                $49.99
              </Text>
            <Text>USD/year</Text>
            
          </Box>
          <VStack
            py={4}
            borderBottomRadius={'xl'}>
            <Box w="80%" pt={20}>
              <Button w="full" colorScheme="orange" variant="solid">
                Subscribe Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={2} px={8}>
          <Image src='https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg' w='40px' h='40px' margin='auto'/>
          <br/>
            <Text>PRO</Text>
            <br/>
            <Text >For health coaches and trainers.</Text>
            <br/>
              <Text fontSize="2xl" fontWeight="700">
                $29.95
              </Text>
            <Text >USD/month</Text>
            <Text>UP TO 10 CLIENTS Add more for $2.25/client per month</Text>
            
          </Box>
          <VStack
            py={4}
            borderBottomRadius={'xl'}>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="green" variant="solid">
                Subscribe Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        
        <PriceWrapper>
          <Box py={2} px={8}>
          <Image src='https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg' w='40px' h='40px' margin='auto'/>
          <br/>
            <Text >ENTERPRISE</Text>
            <br/>
            <Text>For hospitals, schools and research teams.</Text>
            <br/>
              <Text fontSize="2xl" fontWeight="700">
                Contact Us
              </Text>
            <Text >Custom solutions for enterprise businesses</Text>
            
          </Box>
          <VStack
            py={4}
            borderBottomRadius={'xl'}>
            <Box w="80%" pt={16}>
              <Button w="full" colorScheme="green" variant="outline">
                Contact Us
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>

      <Grid templateColumns='repeat(4, 1fr)' h="1000px" gap={6}>
        <GridItem w='100%' pb="40px"  h="auto" >
            <Text fontSize='xl' fontWeight={"600"}>The basic tools you need:</Text>
            <br />
            <ul lineHeight='20px'>
            <li>Log foods, exercise & biometrics</li>
            <li>Track all your macros & up to 82 micronutrients</li>
            <li>Customizable macro & micronutrient targets</li>
            <li>Customizable weight goal settings</li>
            <li>Sync with devices like Apple Watch, FitBit and more</li>
            <li>Limited health trends & reports</li>
            <li>Create custom foods & recipes</li>
            <li>Export your data</li>
            <li>Barcode scanner</li>
            <li>Mobile and web versions</li>
        </ul>
        </GridItem>

        <GridItem w='100%' h='10'  >
        <Text fontSize='xl' fontWeight={"600"}>The basic tools you need:</Text>
            <br />
            <ul lineHeight='20px'>
            <li fontWeight={"600"}>No advertisements</li>
            <li><span fontWeight={"600"}>Recipe Importer</span>
            Easily import & create custom recipes from your favourite websites.</li>
            <li>Diary Groups & Timestamps
                Organize your diary into separate groups or meals and add timestamps to diary entries</li>
            <li>Target Scheduler
                Set different Macro Targets for each day of the week.</li>
            <li>Fasting Timer
            Track your fasts & nutrition in one app!</li>
            <li>Custom Charts
            Create custom charts to correlate nutrients and biometrics over time</li>
            <li>Custom Biometrics
            Create your own biometrics outside of the ones we already offer to track</li>
            <li>Nutrition Scores
            Select up to eight scores highlighting important areas of nutrition</li>
            <li>More Insights
            View charts and reports for all data entered into your diary</li>
            <li>Food Suggestions
            Gain valuable insight into which foods can help you meet your nutritional targets with our Suggest Foods feature</li>
            <li>Share Custom Food & Recipes
                Share your custom foods & recipes with your friends who use Cronometer</li>
            <li>Nutrient Oracle
            Discover top contributing foods of specific nutrients with our Nutrient Oracle feature</li>
            <li>Print Reports
            Create an easy to read PDF to share with your health professionals</li>
        </ul>
        </GridItem>
        
        <GridItem w='100%' h='10'  >
        <Text fontSize='xl' fontWeight={"600"}>Gold features for you & your clients, plus:</Text>
            <br />
        
            <ul lineHeight='20px'>
            <li>View your clients' diary at any time to monitor compliance</li>
            <li>Manage clients' settings and nutrition data</li>
            <li>Share custom foods and recipes with your clients</li>
            <li>Create and share custom biometrics with your clients</li>
            <li>Chat with clients using secure internal messaging</li>
            <li>Create Internal Profiles for view of the Professional only</li>
            <li>Restrict client viewing to help manage eating disorders</li>
            <li>Export professional charts and reports to review progress with your clients</li>
            <li>List your business on our <u>public directory</u> of professional services</li>
            <li>Webinar Access for Professionals</li>
            <Button mt="9px" ml="60px" variant='outline' colorScheme='green'>Learn More</Button>
        </ul>
        </GridItem>
        <GridItem w='100%' h='10'  >
        <Text fontSize='xl' fontWeight="600">All Pro features plus:</Text>


        <ul  lineHeight='20px'>
            <li>HIPAA compliance
        If you are operating as a covered entity under HIPAA, we can sign a BAA.</li>
            <li>Risk Assessment & Compliance Review
        Work with your assessment teams to become an approved vendor.</li>
            <li>MSA& Yearly Invoicing
        Provide a Master Service Agreement and yearly invoicing through your procurement system.</li>
            <li>Staff Training
        Additonal services such as webinars or on-site training.</li>
            <li>API Access
        Custom API Access</li>
        </ul>
        </GridItem>
      </Grid>
       


      </Box>
      <Box textAlign={"center"}>
        <Text color={'orange'} fontWeight="400" fontSize={'3xl'} mb="20px">Frequently Asked Questions</Text>
      </Box>
      <Box pl="200px" pr="200px" mb="100px">
      <Accordion allowMultiple>
                {/* 1 */}
                <AccordionItem mb="10px" bg="white">
                  <h2 bg="#f1f1f1">
                    <AccordionButton  border="gray" h="40px">
                      <Box
                        fontSize="xl"
                        w="800px"
                        
                        flex="1"
                        textAlign="left"
                      >
                        What forms of payment do you accept?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    
                    boxShadow="base"
                    ml="10px"
                    mr="10px"
                   
                  >
                    We accept all major credit cards, except for Discover cards.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mb="10px" >
                  <h2 bg="#f1f1f1">
                    <AccordionButton  border="gray" h="40px">
                      <Box
                        fontSize="xl"
                        w="800px"
                        
                        flex="1"
                        textAlign="left"
                      >
                        Will I be charged sales tax?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    
                    boxShadow="base"
                    ml="10px"
                    mr="10px"
                   
                  >
                    <Text>

                    If live you live in Canada, you will be charged Canadian sales tax (we are a Canadian company)..
                    </Text>
                    <Text>
                    If you live outside of Canada, you will not be charged tax.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>


                <AccordionItem mb="10px" >
                  <h2 bg="#f1f1f1">
                    <AccordionButton  border="gray" h="40px">
                      <Box
                        fontSize="xl"
                        w="800px"
                        
                        flex="1"
                        textAlign="left"
                      >
                      How secure is Cronometer?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    
                    boxShadow="base"
                    ml="10px"
                    mr="10px"
                   
                  >
                   <Text>We take data security seriously at Cronometer. Not only is your data protected, we will never sell your data to 3rd parties.</Text>
                   <Text><u>You can learn more on security at Cronometer here</u></Text>
                  </AccordionPanel>
                </AccordionItem>



                <AccordionItem mb="10px" >
                  <h2 bg="#f1f1f1">
                    <AccordionButton  border="gray" h="40px">
                      <Box
                        fontSize="xl"
                        w="800px"
                        
                        flex="1"
                        textAlign="left"
                      >
                        How do I cancel or change my subscription?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    
                    boxShadow="base"
                    ml="10px"
                    mr="10px"
                    
                   
                  >
                  <Text>If you purchased gold on our Web version:</Text> 
                  <ol>
                    <li> Log into the web version at https://cronometer.com/</li>
                    <li> The Account Tab is the section where you update any sign-up information and manage your subscriptions and personal data.</li>
                    <li> Cancel your Gold subscription at any time to prevent your subscription from renewing at the end of your current term. Select Do Not Auto-Renew from the drop-down menu.</li>
                  </ol>


                  </AccordionPanel>
                </AccordionItem>

               </Accordion> 

      </Box>
      {/* <Box bg="#4f4e53" pt="40px" pb="40px" color="white" fontSize={{base:"0.4rem",md:"0.75rem",lg:"0.95rem"}}>
        
        <Box w={{base:"100%",md:"80%",lg:"80%"}} m="auto">
          <Flex  w={{base:"60%",md:"20%",lg:"20%"}} gap="20px" margin="auto" justifyContent="center">
          
            <Image h={{base:"30px",md:"50px",lg:"50px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png"/>
            
            <Image h={{base:"30px",md:"50px",lg:"50px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png"/>
            
            <Image  h={{ base:"30px", md: "50px", lg:"50px" }} mt="25px" src="https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png"/>
            
            <Image h={{base:"30px",md:"50px",lg:"50px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png" />
          
          </Flex>
         
          <Flex w={{base:"62%",md:"40%",lg:"28%"}} gap="20px" margin="auto" mb="35px" justifyContent="center"> 
            
            <Image h="50px" w={{base:"100px",md:"150px",lg:"150px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"/>
            
            <Image h="50px" w={{base:"100px",md:"150px",lg:"150px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"/>
         
          </Flex>
          <hr />
          <Stack maxW="100%" py="6" fontFamily="geomanist-regular',sans-serif" pt="50px">
            <Flex direction="row" justifyContent="space-between"gap="10px" mb="40px">
              
              <Stack>
                <Image w={{ base:"100px",md:"250px",lg:"250px"}} src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png" alt="pp"/>
              </Stack>
              
              <Stack align="flex-start" >
                <Box fontSize={{base:"0.6rem",md:"1.7rem",lg:"1.4rem" }} mt="4px" fontWeight="600">Cronometer</Box>

                <a href="https://cronometer.com/">For Individuals</a>
                <a href="https://cronometer.com">For Professionals</a>
                <a href="https://cronometer.com">Privacy</a>
                <a href="https://cronometer.com">Terms</a>
              </Stack>
              
              
              <Stack>
                
                <Box fontSize={{base:"0.6rem",md:"1.7rem",lg:"1.4rem" }} mt="4px" fontWeight="600">The Company</Box>
                 
                <a href="https://cronometer.com/">About Us</a>
                <a href="https://cronometer.com">Crono Blog</a>
                <a href="https://cronometer.com">Crono Forums</a>
                <a href="https://cronometer.com">Jobs</a>
                <a href="https://cronometer.com">Support</a>

               
              </Stack>

              <Stack align={"flex-start"}>
                
                <Box fontSize={{base:"0.6rem",md:"1.7rem",lg:"1.4rem" }} mt="4px" fontWeight="600">Partners & Affiliates</Box>

                <a href="https://cronometer.com/"> Afiliate Program </a>
                <a href="https://cronometer.com">Media Kit</a>
             
             </Stack>
            </Flex>
            
            <Box textAlign="center" fontSize="2rem" fontWeight="600">
              <Box fontSize={{base:"0.5rem",md:"0.70rem",lg:"0.90rem" }} textAlign="center"> Copyright © 2011-2022</Box>
              
              <Box fontSize={{base:"0.5rem",md:"0.70rem",lg:"0.90rem" }} textAlign="center">All rights reserved</Box>
            </Box>
          </Stack>
        </Box>
      </Box> */}
    </div>
  )
}

export default Plans
