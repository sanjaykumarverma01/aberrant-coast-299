import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
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
import devices from "../Assets/devices-p-1600.png";
import crono_graphic from "../Assets/crono-pro-graphic.png";
import green_logo from "../Assets/cronometer-pro-logo-green.png";
import staff from "../Assets/cronometer-staff-2-p-1600.jpeg";
const HomePageData = () => {
  return (
    <>
      <Flex w="75%" m="auto">
        <Box w="40%" mr="10%" mt="50px">
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
        <Box w="40%" mt="30px">
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
        <Flex w="75%" m="auto" justifyContent="space-evenly" pb="100px">
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
        <Flex w="75%" m="auto" justifyContent="space-evenly" pb="100px">
          <Box w="30%">
            <Box w="22%" m="auto" mb="10px">
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
            <Box w="27%" m="auto" mb="10px">
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
                Whether your Keto, Vegan, or on one recommended by your doctor.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box bgColor="#F9F8F9" color="#4F4F52">
        <Box w="40%" m="auto" pt="70px" mb="70px">
          <Text fontSize="3xl" textAlign="center" fontWeight="500">
            Find out if you're getting the vitamins and minerals you need with
            our food diary app.
          </Text>
          <Box w="50%" m="auto" mt="50px" pb="50px">
            <Button
              fontSize="2xl"
              colorScheme="orange"
              p="7"
              bgColor="#FF763F"
              w="100%"
            >
              <Link to="/signin">Sign Up - It's Free!</Link>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box color="#4F4F52">
        <Text textAlign="center" fontSize="4xl" fontWeight="500">
          Sync with Apps and Devices
        </Text>
        <Text textAlign="center" fontSize="2xl" mt="10px">
          Sync Cronometer with these activity trackers, Apple Health, Google Fit
          and Samsung Health.
        </Text>
        <Box w="60%" m="auto" mt="30px" pb="100px">
          <Image src={devices} />
        </Box>
        <Box
          color="#4F4F52"
          pt="70px"
          pb="70px"
          borderTop="1px solid lightgray"
          w="75%"
          m="auto"
        >
          <Heading textAlign="center" fontSize="4xl">
            Cronometer Reviews
          </Heading>
          <Text textAlign="center" fontSize="2xl" mt="10px">
            Check us out in your app store.
          </Text>
        </Box>
      </Box>
      <Box w="75%" m="auto" className="shadow">
        <Flex justifyContent="space-evenly" pb="50px">
          <Box w="40%" mt="120px">
            <Text fontSize="3xl" color="#FF763F">
              I wasn't the only one concerned about the unreliability of the
              macros in both MyFitnessPal and Carb Manager.
            </Text>
            <Box align="center" mt="60px">
              <Link to="">
                <Image src={ios_logo} alt="ios" />
              </Link>
            </Box>
          </Box>
          <Box w="46%" mt="30px">
            <Text fontSize="xl">
              I started Keto in July. MyFitnessPal seemed pretty cool. Spent
              hours setting it up and entering recipes only to discover the
              macros were not reliable due to all the contributions by the
              community. I was so frustrated. Then I found a review of several
              apps (on the Keto Mojo website) and discovered I wasn't the only
              one concerned about unreliability of the macros on both MFP and
              CarbManager (tried that too). Behold Cronometer! I love this app.
              It draws from nutrition databases with minimal community
              contributions so much, much more reliability. There are many more
              free features. The user interface is easy to navigate. I'm very
              happy with Cronometer.
            </Text>
            <Text fontSize="lg" mt="30px">
              iOS Review
            </Text>
            <Text fontStyle="italic">September 23, 2019</Text>
          </Box>
        </Flex>
      </Box>
      <Box w="75%" m="auto" className="shadow" mt="70px">
        <Flex justifyContent="space-evenly" pb="50px">
          <Box w="46%" mt="30px">
            <Text fontSize="xl">
              This app is my dream! I've been on the hunt for something that can
              track my daily nutritional needs and the majority of apps seem to
              think that only means macros. This tracks EVERYTHING! Getting my
              daily vitamins through food is so important to me and this has
              taken a HUGE load off of my plate. I bought gold within minutes.
              This is set up great, easy to use, links with my FitBit. I could
              go on and on.
            </Text>
            <Text fontSize="lg" mt="30px">
              Android Review
            </Text>
            <Text fontStyle="italic">November 23, 2020</Text>
          </Box>
          <Box w="40%" mt="70px">
            <Text fontSize="3xl" color="#FF763F">
              Cronometer tracks EVERYTHING! ... It's easy to use and links with
              my FitBit.
            </Text>
            <Box align="center" mt="60px">
              <Link to="">
                <Image src={android_logo} alt="ios" />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="100px" bgColor="#F9F8F9" color="#4F4F52" pb="70px">
        <Flex w="70%" m="auto" pt="60px">
          <Box w="35%">
            <Image src={crono_graphic} alt="crono-pro-graphic" />
          </Box>
          <Box>
            <Box w="35%" m="auto">
              <Image src={green_logo} alt="cronometer pro logo" />
            </Box>
            <Heading textAlign="center" fontSize="2xl" mt="25px">
              Are you a healthcare professional?
            </Heading>
            <Box w="70%" m="auto">
              <Text fontSize="2xl" mt="25px">
                Check out our software designed for nutritionists, dietitians,
                research teams, schools, and hospitals.
              </Text>
            </Box>
            <Box align="center" mt="25px">
              <Button
                border="1px solid green"
                bgColor="white"
                color="#FF763F"
                p="6"
                fontSize="xl"
                w="30%"
              >
                <Link to="">Learn About Pro</Link>
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box color="#4F4F52" pb="100px">
        <Heading pt="100px" textAlign="center" fontSize="4xl">
          We are Canadian
        </Heading>
        <Box w="38%" m="auto" mt="15px" mb="70px">
          <Text fontSize="2xl" textAlign="center">
            Independently owned and operated by people who care about their
            users' nutrition.
          </Text>
        </Box>
        <Box w="65%" m="auto">
          <Image src={staff} alt="staff" borderRadius="5" mb="40px" />
          <Box w="92%" m="auto">
            <Text fontSize="xl" textAlign="center">
              Our headquarters are based in the idyllic mountain town of{" "}
              <span>
                <Button variant="link" fontSize="xl" color="#FF763F">
                  <Link to="">Revelstoke, BC, Canada.</Link>
                </Button>
              </span>
              We are a team of over 25 professionals brought together by a love
              of nutrition, skiing, biking and the great outdoors.
            </Text>
          </Box>
          <Box align="center" mt="40px">
            <Button
              color="#FF763F"
              border="1px solid #FF763F"
              bgColor="white"
              p="5"
              w="25%"
              fontSize="xl"
            >
              <Link to="/about">About Us</Link>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        borderTop="1px solid lightgray"
        align="center"
        w="75%"
        m="auto"
        pb="50px"
      >
        <Text fontSize="2xl" color="#4F4F52" mt="50px">
          Help us spread the good word about nutrition and become an affiliate.
        </Text>
        <Button
          color="#FF763F"
          border="1px solid #FF763F"
          bgColor="white"
          p="5"
          w="20%"
          fontSize="xl"
          mt="20px"
        >
          <Link to="/about">Become an Affiliate</Link>
        </Button>
      </Box>
    </>
  );
};

export default HomePageData;
