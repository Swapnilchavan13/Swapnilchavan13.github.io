import React from 'react';
import './about.css'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    
  } from '@chakra-ui/react';
 
  
  export default function Home() {

    let audio = new Audio("/resume.mp3")

    const start = () => {
      audio.play()
    }

    return (
      <Stack id='Home' minH={'100vh'} direction={{ base: 'column',sm:'column', md: 'column',lg:"row" }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
               <Text fontSize={{ base: 'md',sm:"xl", lg: '2xl' }} color={'black'}>
               Hi, my name is
              </Text>

              <Text
                as={'span'}
                position={'relative'}
                className="h1"
                >
                Swapnil Chavan
              </Text>
              <br />{''}
              <Text className="subtitle" color="#" as={'span'}>
              Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text  fontSize={{ base: 'md',sm:"xl", lg: '2xl' }} color={'black'}>
            Full stack developer with experience in developing full-stack web applications using MongoDB, Express, React, and Node.js.
              </Text>
            <Stack >
            <a marginTop="10px" target="_blank" onClick={start} href='/Swapnil_Chavan_Resume.pdf' download>
              <Button
                w={{ base: '150px', md: '100px', lg: '100px' }}
                m="auto"
                onClick={()=>{
                  window.open('https://drive.google.com/file/d/1uouC86f3DlRCd0YkOOk-9j92_ZWeEFWk/view?usp=sharing', "_blank")
                }}
                borderColor="#C7AE92"
                variant='outline'
                backgroundColor='black'
                color='greenyellow'

                _hover={{
                  bg: 'black',
                  color:'greenyellow'
                }}> Resume {'↓↓'}
              </Button>
                </a>


                <a target="_blank"  rel="noreferrer" href='https://github.com/Swapnilchavan13'>
              <Button
                w={{ base: '150px', md: '100px', lg: '100px' }}
                m="auto"
                borderColor="#C7AE92"
                variant='outline'
                backgroundColor='black'
                color='greenyellow'
                _hover={{
                  bg: 'black',
                  color:'greenyellow'
                }}> GitHub
              </Button>
                </a>



                <a target="_blank"  rel="noreferrer" href='https://www.linkedin.com/in/swapnil-chavan-951103230/'>
              <Button
                w={{ base: '150px', md: '100px', lg: '100px' }}
                m="auto"
                borderColor="#C7AE92"
                variant='outline'
                backgroundColor='black'
                color='greenyellow'
                _hover={{
                  bg: 'black',
                  color:'greenyellow'
                }}> Linkedin
              </Button>
                </a>
            </Stack>
        
          </Stack>
        </Flex>
        <Flex flex={1} border='0px'>
          <Image
            p={{ base: '10px', md: '10px', lg: '10px' }}
            alt={'Login Image'}
            objectFit={'cover'}
            border='1px solid greenyellow'
            w="80%"
            m="auto"
            borderRadius={'30px'}
            src={
              '/images/swapnilw.png'
            }
          />
        </Flex>
      </Stack>
    );
  }