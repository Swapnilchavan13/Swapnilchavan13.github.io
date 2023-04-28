import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {

  return (
    <Box w='80%'m='auto'>
      <Heading color='black'pt='40px' pb='40px'>MY CODE</Heading>
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="Swapnilchavan13"
        blockSize={12}
        fontSize={12}
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </Box>
  );
};

export default Calender;