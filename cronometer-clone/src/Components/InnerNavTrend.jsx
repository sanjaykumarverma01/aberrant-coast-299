import React from 'react'
import { HStack, Box } from '@chakra-ui/react'

const InnerNavTrend = () => {
  return (
    <div>
       <Box border={'1px solid white'} h="31px"  >
    <HStack spacing='5px' justifyContent={'center'}>
    <Box w='100px' h='30px'  fontSize={'sm'} _hover={{bg: "#e3e3e3"}}>
     Charts
    </Box>
    <Box w='120px' h='30px' fontSize={'sm'} _hover={{bg: "#e3e3e3"}}>
      Nutrition Report
    </Box>
    <Box w='100px' h='30px' fontSize={'sm'} _hover={{bg: "#e3e3e3"}}>
      Print Report
    </Box>
    <Box w='100px' h='30px' fontSize={'sm'} _hover={{bg: "#e3e3e3"}}>
      Snapshots
    </Box>
  </HStack>
      </Box> 
    </div>
  )
}

export default InnerNavTrend
