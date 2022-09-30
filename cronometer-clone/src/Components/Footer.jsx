import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import instagram_logo from "../Assets/social_instagram-icon.png";
import facebook_logo from "../Assets/social_facebook-icon.png";
import twitter_logo from "../Assets/social_twitter-icon.png";
import youtube_logo from "../Assets/social_youtube-icon.png";
import ios_logo from "../Assets/ios-icon.png";
import android_logo from "../Assets/android-icon.png";
import { Link } from "react-router-dom";
import footer_logo from "../Assets/crono-logo-white.png";

const Footer = () => {
  return (
    <Box bgColor="#4F4E53">
      <Box w="80%" m="auto" pt="60px">
        <Box borderBottom="1px solid white">
          <Box w="25%" m="auto">
            <HStack justifyContent="space-evenly">
              <Box h="40px">
                <Link to="">
                  <Image src={instagram_logo} alt="instagram" h="100%" />
                </Link>
              </Box>
              <Box h="40px">
                <Link to="">
                  <Image src={facebook_logo} alt="facebook" h="100%" />
                </Link>
              </Box>
              <Box h="40px">
                <Link to="">
                  <Image src={twitter_logo} alt="twitter" h="100%" />
                </Link>
              </Box>
              <Box h="40px">
                <Link to="">
                  <Image src={youtube_logo} alt="youtube" h="100%" />
                </Link>
              </Box>
            </HStack>
          </Box>
          <Flex
            w="30%"
            m="auto"
            justifyContent="space-around"
            mt="30px"
            pb="60px"
          >
            <Link to="">
              <Image src={ios_logo} alt="ios" />
            </Link>
            <Link to="">
              <Image src={android_logo} alt="android" />
            </Link>
          </Flex>
        </Box>
        <Box pt="60px">
          <Flex>
            <Box w="25%">
              <Image src={footer_logo} alt="logo" w="70%" />
            </Box>
            <Box w="25%" color="white" textAlign="left">
              <Heading size="md" mb="10px">
                Cronometer
              </Heading>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">For Individuals</Link>
              </Text>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">For Professionals</Link>
              </Text>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">Privacy</Link>
              </Text>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">Terms</Link>
              </Text>
            </Box>
            <Box w="25%" color="white" textAlign="left">
              <Heading size="md" mb="10px">
                Cronometer
              </Heading>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">About US</Link>
              </Text>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">Crono Blog</Link>
              </Text>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">Crono Forums</Link>
              </Text>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">Jobs</Link>
              </Text>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">Support</Link>
              </Text>
            </Box>
            <Box w="25%" color="white" textAlign="left">
              <Heading size="md" mb="10px">
                Partners & Affiliates
              </Heading>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">Affilate Program</Link>
              </Text>
              <Text mb="15px" _hover={{color:"#FF763F"}}>
                <Link to="">Media Kit</Link>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box color="white" fontSize="lg" mt="30px" pb="50px">
            <Text>Copyright © 2011-2022</Text>
            <Text>All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
