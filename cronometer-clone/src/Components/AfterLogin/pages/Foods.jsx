import React from "react";
import InsideNavbar from "../../InsideNavbar";
import InsideFooter from "../../InsideFooter";
import styles from "../css/food.module.css";

import { Text, Box, Flex, Stack, Button, Input, Image } from "@chakra-ui/react";
import {
  LockIcon,
  ArrowUpDownIcon,
  WarningIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import foodpic from "../images/foodpic.png";
import InnerNavTrend from "../../InnerNavTrend";

const Foods = () => {
  return (
    <div>
      <InsideNavbar />
      <div className={styles.food}>
        <InnerNavTrend />
        <Box pr="200px" mt="10px">
          <Box textAlign="left">
            <Text fontSize="3xl" fontWeight={"600"}>
              Custom Foods
            </Text>
            <Text fontSize="sm">
              Create a new food from the nutrition facts on a product label.
            </Text>
          </Box>

          <Flex mt="50px" spacing="5px" h="760px">
            <Box w="300px" h="750px" bg="#f8f5f2">
              <Stack
                spacing={1}
                direction="row"
                align="center"
                mt="20px"
                justifyContent={"center"}
              >
                <Button
                  w="130px"
                  h="30px"
                  fontSize={"sm"}
                  colorScheme="smokewhite"
                  border={"1px solid orange"}
                  color="orange"
                  size="lg"
                >
                  + Add Recipe
                </Button>
                <LockIcon color={"orange"} />
                <Button
                  w="130px"
                  h="30px"
                  fontSize={"sm"}
                  colorScheme="smokewhite"
                  color="white"
                  bg="green"
                  size="lg"
                >
                  Import Recipe
                </Button>
              </Stack>
              <Box mt="10px" ml="10px">
                <Input
                  w="280px"
                  h="30px"
                  placeholder="Search your recipe...."
                />
              </Box>

              <Stack
                spacing={100}
                direction="row"
                mt="20px"
                mb="10px"
                justifyContent={"center"}
              >
                <Box>
                  <Text>Sorted by Most Recent</Text>
                </Box>
                <Box>
                  <ArrowUpDownIcon />
                </Box>
              </Stack>
              <Box
                w="280px"
                h="500px"
                border={"1px solid grey"}
                bg="white"
                ml="5px"
              ></Box>
              <Box textAlign={"center"} mt="5px">
                <Text fontSize="xs">
                  Questions about creating your own recipes?
                </Text>
              </Box>

              <Stack direction="row" justify={"center"} mt="10px">
                <WarningIcon />

                <Text fontSize="sm">LEARN MORE</Text>
              </Stack>
            </Box>

            <Box ml="20px" w="800px" h="750px">
              <Box mt="200px" ml={"320px"}>
                <Image
                  // boxSize='400px'
                  // objectFit='cover'
                  w="150px"
                  src={foodpic}
                />
              </Box>

              <Box textAlign={"center"}>
                <Text fontSize={"sm"}>
                  Add a new recipe or find your custom recipes here.
                </Text>
              </Box>
              <Box mt="10px">
                <ArrowBackIcon color={"gray"} w="800px" h="100px" />
              </Box>
            </Box>
          </Flex>
        </Box>
      </div>
      <InsideFooter />
    </div>
  );
};

export default Foods;
