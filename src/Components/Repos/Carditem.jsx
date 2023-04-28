import { Box, Tag, Text, HStack ,IconButton,Icon} from '@chakra-ui/react'
import React from 'react'
import Carousel from './Cursor'
import { AiOutlineLink,AiFillGithub} from "react-icons/ai";
export default function Carditem({name,html_url,homepage,topics,images,description,id}) {
    
  return (
    <div>
        <Box height={"410px"} w='100%' bg='gray' boxShadow='md' p='2px' rounded='md' borderColor='black' _hover={{
                  bg: 'white',
                  boxShadow:'2xl',
                  p:'3px',  
                  cursor:'pointer',
                  border:'1px solid greenyellow'
                }}>
            
            <Carousel images={images}/>
            <Text fontWeight={'bold'}>{name}</Text>
            <Text w='80%' m='auto' color={'black'}>{description}</Text>
            
            <HStack justifyContent={'center'} mt='10px'>
            {  topics.map((el,i)=>(<Tag key={i} size='sm' 
                variant='outline'
                border='1px solid greenyellow'
                color='black' p='5px' >{el}</Tag>))

            }
            </HStack>
            <HStack justifyContent={'center'} columnGap='8px' mt='10px'>
            
            <IconButton onClick={() => {window.open(html_url, "_blank")}} bg='greenyellow' size={'sm'} icon={<Icon as={AiFillGithub}  />} />
 
            <IconButton onClick={() => {window.open(homepage, "_blank")}} bg='greenyellow' size={'sm'} icon={<Icon as={AiOutlineLink}  />} />
           
            </HStack>
        </Box>

    </div>
  )
}

