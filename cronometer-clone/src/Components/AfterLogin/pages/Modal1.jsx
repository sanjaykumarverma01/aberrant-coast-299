import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
   Flex,
   Input,
   Grid,
   Spacer,
   Text,
   Image
  } from '@chakra-ui/react'
  import modalimg from "../images/modalimg.jpg"
  import test from "../images/test.png"
import { useSearchParams } from 'react-router-dom'

const Modal1 = ({hadleclick}) => {
  const [inp ,setinp]=useState()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [searcParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState(searcParams.get("name"));
    const [exerciseData, setExerciseData] = useState([]);
    const token=JSON.parse(localStorage.getItem("token"))
    const handleSearchFood =  () => {

     
      // console.log(inp)
      if (inp?.length > 0) {
        
  
         fetch(`https://cronologyback.herokuapp.com/food/getFood/${inp}`, {
          method: "GET",
          headers:{"Content-type":"application/json",
          authorization:`breaer ${token}`
        },
         
        })
          .then((res) => res.json())
          .then((res) => {
            // console.log(res)
            setExerciseData(res);
          });
      }
    };

    useEffect(() => {
      handleSearchFood();
    }, [inp]);
  return (
    <div>
       <Button variant={"ghost"} _hover={{bgColor:"none"}} color="gray" fontWeight={600} onClick={onOpen}>Add food</Button>

<Modal isOpen={isOpen} onClose={onClose} w="1200px">
  <ModalOverlay />
  <ModalContent w="1200px">
 
    <ModalContent w="1200px"  height={"500px"} >
       

         <Box shadow={'lg'} >
          <ModalHeader>Add Food to Diary</ModalHeader>
          <ModalCloseButton />

         </Box>

          <ModalBody>
            <Flex>
              <Input
                placeholder="search your food"
                size="sm"
                w="300px"
                borderRadius={"10px"}
                value={name}
                onChange={(e)=>setinp(e.target.value)}

              />
              <Spacer/>
              <Button size="sm" border={'1px solid orange'} bg="white"color="orange" onClick={handleSearchFood}>Search</Button>
            </Flex>
            <Box mt="10px" >
              <Flex gap="5px" bg="#f7f7f7" borderBottom={'1px solid black'} h="30px" mt="10px" >
                <Box fontSize={'12.5px'} bg="white" h="29px" w="24px">All</Box>
                <Box fontSize={'12.5px'} h="10px">Favourite</Box>
                <Box fontSize={'12.5px'} h="10px">Common Food</Box>
                <Box fontSize={'12.5px'} h="10px">Supplements</Box>
                <Box fontSize={'12.5px'} h="10px">Brands</Box>
                <Box fontSize={'12.5px'} h="10px">Restaurent</Box>
                <Box fontSize={'12.5px'} h="10px">Custom</Box>
              </Flex>
              <Box mt="20px">
                <Flex bg="#f7f7f7">

                <Box >Description</Box>
                <Spacer/>
                <Box >Source</Box>
                </Flex>

                <Box
                   height={"200px"}
                  style={{ overflow: "scroll", overflowX: "hidden" }}
                >
                  <Box>
                    {/* Append data here */}
                    {exerciseData?.map((elem,index)=>{
                   return   <Flex key={index} _hover={{bgColor:"gray.300" }} onClick={()=>hadleclick(elem,elem._id)}>
  <Text  fontSize={'sm'}> {elem.name}</Text>
  <Spacer/>
  <Flex>
  <Image h="10px" mt="5px" pr="10px" src={test}></Image>
  <Text fontSize={'12px'}>NCCDB</Text>
  </Flex>

  </Flex>
                    })}
                  

                    
                    
                   
                  </Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>
          {/* <ModalFooter> */}
           <Flex gap="10px" pb="40px">
            <Box>
                <Image w="200px"src={modalimg}></Image>
            </Box>
            <Box >
                <Box >
                    <Flex gap="100px" bg="#f7f7f7"  pr="4px" pl="4px">
                        <Box>Time of day:</Box>
                        
                        <Box>--:--</Box>
                    </Flex>
                </Box>
                <Box bg="#f7f7f7">
                    <Text>Serving:</Text>
                    <Flex gap="10px">
                        <Box>
                            <Input h="30px" w="60px" placeholder={"100"}></Input>
                        </Box>
                        <Box >
                        
                           <Input h="30px" w="60px" placeholder={"g"}>
                            
                           </Input>
           
                        </Box>
                        <Box pr="4px" >
                            <Button w="100px" h="30px" color={'white'} bg="orange" >Add</Button>
                        </Box>
                    </Flex>
                </Box>
            </Box>
           </Flex>
        
        </ModalContent>
  </ModalContent>
</Modal>
    </div>
  )
}

export default Modal1
