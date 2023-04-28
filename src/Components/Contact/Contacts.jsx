import { Flex, Heading, IconButton,Icon, Box, VStack, Menu, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneMail,AiFillGithub,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai";
import { ImLocation2} from "react-icons/im";
import {MdCall} from "react-icons/md";
export default function Contacts() {
  return (
    <Box id='Contact'>

        <Heading color={'black'}  pt='40px' pb='40px'>CONTACT ME</Heading>
        <Box bg='black'color={'white'} pt='20px' m='auto'>

        
            <VStack w='280px' m='auto' border={'0px'} alignItems={'center'} pb='10px'>
                <VStack   alignItems={'flex-start'} >
                    <HStack columnGap={'10px'}>
                        <Icon as={ImLocation2} boxSize={8} />
                        <Text fontWeight={'bold'}>Aurangabad, Maharashtra</Text>
                    </HStack>
                    <HStack columnGap={'10px'}>
                        <Icon as={MdCall} boxSize={8} />
                        <Text  fontWeight={'bold'}>
                            +91-9049127078
                        </Text>
                    </HStack>
                    <HStack columnGap={'10px'}>
                        <Icon as={AiTwotoneMail} boxSize={8} />
                        
                        <Text  fontWeight={'bold'}>chavanswapnil822@gmail.com</Text>
                        
                    </HStack>
                    <Flex border={'0px'}  justifyContent='space-around' gap={'65px'} alignItems={'center'} >
                            <IconButton onClick={() => {window.open('https://github.com/Swapnilchavan13', '_blank')}}bg='greenyellow'color='black'size='lg' icon={<Icon as={AiFillGithub} boxSize={8} />}/>
                            <IconButton onClick={() => {window.open('https://twitter.com/Sw_apnil','_blank')}} bg='greenyellow' color={'black'} size={'lg'} icon={<Icon as={AiFillTwitterCircle} boxSize={8} />} />
                            <IconButton onClick={() =>{window.open('https://www.linkedin.com/in/swapnil-chavan-951103230/','_blank')}} color={'black'} bg='greenyellow' size={'lg'} icon={<Icon as={AiFillLinkedin} boxSize={8} />} />
                        </Flex>
                </VStack>
            </VStack>
           
        </Box>
        
    </Box>
  )
}