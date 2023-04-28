import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <div id='About' style={{
      backgroundColor:'black',padding:"30px"
    }}>
      <Heading color={'white'} pt='40px' pb='40px'>ABOUT ME</Heading>
      <Text color={'white'} fontSize={'25px'} fontWeight={'700'} w="80%" m='auto' pb='10px'>My name is <lebal style={{color:'greenyellow',fontStyle:'italic'}}>Swapnil Chavan</lebal>. I am a Full-Stack Web Developer.</Text>
   
      <Text color={'white'} textAlign={'left'} fontSize={'20px'} w="80%" m='auto'>
      I am a passionate and driven web developer with a focus on MERN stack development. I have completed my Full-stack web development course at Masai School and have a solid foundation in web development concepts and practices. During my course, I honed my skills in JavaScript, MongoDB, Express, React, and Node.js and am confident in my ability to build scalable and efficient web applications. I am a quick learner, detail-oriented, and always strive to produce high-quality work. I am excited to start my career as a MERN full stack web developer and look forward to the opportunity to bring my skills and passion to your team.

                  </Text>
    </div>
  )
}