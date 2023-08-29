import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";


const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();
    console.log("Inside chat page");
    console.log(user);
   
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box style={{display:"flex"}} justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};


export default ChatPage;