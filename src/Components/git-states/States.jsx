import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export default function States() {
  return (
    <Box p='20px' >
        <Heading></Heading>
        <Flex w={{base:'60%',sm:'60%',md:'80%'}} justifyContent={'center'} m='auto' columnGap={'30px'} flexDirection={{base:'column',sm:'column',md:'row'}}>
            <Box>
            <Image src='https://github-readme-stats.vercel.app/api?username=Swapnilchavan13&theme=swift&show_icons=true&hide_border=false&count_private=true'/>
            </Box>
            <Box>
            <Image src='https://github-readme-streak-stats.herokuapp.com/?user=Swapnilchavan13&theme=swift&hide_border=false'/>
            </Box>
            {/* <Box>
            <Image src='https://github-readme-stats.vercel.app/api/top-langs/?username=Swapnilchavan13&theme=swift&show_icons=true&hide_border=false&layout=compact'/>
            </Box> */}
        </Flex>
    </Box>
  )
}