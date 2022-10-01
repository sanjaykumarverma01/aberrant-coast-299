import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../Assets/cronometer-hero-graphic.png";
import media1 from "../Assets/media-mention-1.png";
import media2 from "../Assets/media-mention-2.png";
import media3 from "../Assets/media-mention-3.png";
import ios_logo from "../Assets/ios-icon.png";
import android_logo from "../Assets/android-icon.png";
import community from "../Assets/community-icon.png";
import security from "../Assets/security-icon.png";
import nutrition from "../Assets/nutrition-icon.png";
import micronutrients from "../Assets/micronutrients-icon.png";
import diary from "../Assets/diary-icon.png";
import reports from "../Assets/reports-icon.png";
import scale from "../Assets/scale-icon.png";
import fasting from "../Assets/fasting-icon.png";
import food from "../Assets/food-icon.png";
const HomePageData = () => {
  return (
    <>
      <Flex w="75%" m="auto" mt="10px">
        <Box w="40%" mr="10%">
          <Box color="#4F4F52">
            <Heading size="2xl">Eat smarter.</Heading>
            <Heading size="2xl">Live better.</Heading>
          </Box>
          <Box mt="20px" color="#4F4F52">
            <Text fontSize="3xl">
              Track your calories, exercise, biometrics and health data.
            </Text>
          </Box>
          <Box mt="30px">
            <Button fontSize="2xl" colorScheme="orange" p="6" bgColor="#FF763F">
              <Link to="/signin">Sign Up - It's Free!</Link>
            </Button>
          </Box>
          <Box mt="20px" color="#4F4F52">
            <Text fontSize="xl">
              Already have an account?
              <span>
                <Button
                  variant="ghost"
                  fontSize="xl"
                  _hover={{ color: "#FF763F", borderBottom: "1px solid" }}
                >
                  <Link to="/login">Log in</Link>
                </Button>
              </span>
            </Text>
          </Box>
        </Box>
        <Box w="40%">
          <Image w="100%" src={HeroImage} alt />
        </Box>
      </Flex>
      <Box m="auto" w="75%" mt="20px">
        <Text fontSize="2xl" textAlign="center">
          As Seen On
        </Text>
        <Flex w="70%" m="auto" justifyContent="space-between" mt="20px">
          <Box w="25%">
            <Image src={media2} alt="media2" />
          </Box>
          <Box w="25%">
            <Image src={media1} alt="media1" />
          </Box>
          <Box w="25%">
            <Image src={media3} alt="media3" />
          </Box>
        </Flex>
        <Text fontSize="2xl" textAlign="center" mt="35px">
          Available on Web, iOS and Android
        </Text>
        <Flex
          w="30%"
          m="auto"
          justifyContent="space-around"
          mt="30px"
          mb="90px"
        >
          <Link to="">
            <Image src={ios_logo} alt="ios" />
          </Link>
          <Link to="">
            <Image src={android_logo} alt="android" />
          </Link>
        </Flex>
      </Box>
      <Box bgColor="#F9F8F9" color="#4F4F52">
        <Heading pt="100px" textAlign="center" fontSize="4xl">
          Discover your nutrition
        </Heading>
        <Box w="40%" m="auto" mt="15px" mb="70px">
          <Text fontSize="2xl" textAlign="center">
            Cronometer encourages you to not just count your calories but to
            focus on your nutrition as a whole.
          </Text>
        </Box>
        <Flex w="75%" m="auto" justifyContent="space-evenly" pb="130px">
          <Box w="30%">
            <Box w="25%" m="auto" mb="10px">
              <Image src={community} alt="community" />
            </Box>
            <Heading fontSize="2xl" textAlign="center">
              Over 5 million users
            </Heading>
            <Text fontSize="xl" textAlign="center" mt="20px">
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
          </Box>
          <Box w="30%">
            <Box w="23%" m="auto" mb="10px">
              <Image src={nutrition} alt="nutrition" />
            </Box>
            <Heading fontSize="2xl" textAlign="center">
              Accurate nutrition data
            </Heading>

            <Text fontSize="xl" textAlign="center" mt="20px">
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>
          </Box>
          <Box w="30%">
            <Box w="25%" m="auto" mb="10px">
              <Image src={security} alt="security" />
            </Box>
            <Heading fontSize="2xl" textAlign="center">
              Data privacy & security
            </Heading>
            <Text fontSize="xl" textAlign="center" mt="20px">
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box color="#4F4F52">
        <Heading pt="100px" textAlign="center" fontSize="4xl">
          Develop healthy habits
        </Heading>
        <Box w="35%" m="auto" mt="15px" mb="70px">
          <Text fontSize="2xl" textAlign="center">
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </Text>
        </Box>
        <Flex w="75%" m="auto" justifyContent="space-evenly" pb="130px">
          <Box w="30%">
            <Box w="25%" m="auto" mb="10px">
              <Image src={micronutrients} alt="community" />
            </Box>
            <Box w="80%" m="auto">
              <Heading fontSize="2xl" textAlign="center">
                Track up to 82 micronutrients
              </Heading>
            </Box>
            <Text fontSize="xl" textAlign="center" mt="10px">
              Log your meals and track all your macro and micronutrients.
            </Text>
          </Box>
          <Box w="30%">
            <Box w="25%" m="auto" mb="10px">
              <Image src={diary} alt="nutrition" />
            </Box>
            <Box w="70%" m="auto">
              <Heading fontSize="2xl" textAlign="center">
                Log meals, exercise and biometrics
              </Heading>
            </Box>
            <Text fontSize="xl" textAlign="center" mt="10px">
              Plus, you can create custom foods, recipes, exercises and
              biometrics!
            </Text>
          </Box>
          <Box w="30%">
            <Box w="25%" m="auto" mb="10px">
              <Image src={reports} alt="security" />
            </Box>
            <Box w="60%" m="auto">
              <Heading fontSize="2xl" textAlign="center">
                Valuable reports and charts
              </Heading>
            </Box>
            <Text fontSize="xl" textAlign="center" mt="10px">
              Learn how nutrients and biometrics correlate over time.
            </Text>
          </Box>
        </Flex>
        <Flex w="75%" m="auto" justifyContent="space-evenly" pb="130px">
          <Box w="30%">
            <Box w="25%" m="auto" mb="10px">
              <Image src={scale} alt="community" />
            </Box>
            <Box w="80%" m="auto">
              <Heading fontSize="2xl" textAlign="center">
                Custom diet settings
              </Heading>
            </Box>
            <Box w="80%" m="auto">
              <Text fontSize="xl" textAlign="center" mt="10px">
                Set weight, macro & nutrient targets to meet your goals.
              </Text>
            </Box>
          </Box>
          <Box w="30%">
            <Box w="23%" m="auto" mb="10px">
              <Image src={fasting} alt="nutrition" />
            </Box>
            <Box w="70%" m="auto">
              <Heading fontSize="2xl" textAlign="center">
                Fasting timer
              </Heading>
            </Box>
            <Box w="90%" m="auto">
              <Text fontSize="xl" textAlign="center" mt="10px">
                Track your intermittent fasts and see their effect over time.
              </Text>
            </Box>
          </Box>
          <Box w="30%">
            <Box w="25%" m="auto" mb="10px">
              <Image src={food} alt="security" />
            </Box>
            <Box w="60%" m="auto">
              <Heading fontSize="2xl" textAlign="center">
                Diet support
              </Heading>
            </Box>
            <Box m="auto">
              <Text fontSize="xl" textAlign="center" mt="10px">
                Whether you’re Keto, Vegan, or on one recommended by your
                doctor.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default HomePageData;
