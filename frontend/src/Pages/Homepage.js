import React, { useEffect } from 'react'
import {Container,Box,Text, Center, Tabs, Tab, TabList, TabPanels, TabPanel} from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {

  const navigate = useNavigate();

useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log("Inside home page");
    // console.log(user);

    if (user) navigate("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  return <Container  maxW='xl' centerContent>
    <Box
        style={{display:"flex"}}
        justifyContent="center"
        p={2}
        bg="white"
        w="100%"
        m="0 0 5px 0"
        borderRadius="lg"
        borderWidth="1px"
      ><Center>
       <Text fontSize="4xl" fontFamily="Work sans" color="black" >
          Chatter-Box
          </Text></Center>
    </Box>
    <Box  bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab  width="50%">Sign up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
       <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>

  </Container>
  
};

export default Homepage
