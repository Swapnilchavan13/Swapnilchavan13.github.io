import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Skills() {
  return (
    <>
    <Box id='Skills'>
        <Heading color='black' p='20px' mb='30px'>SKILLS</Heading>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'}} padding='40px' border="2px solid greenyellow" borderRadius="20px" w='60%' m='auto' rowGap={'40px'} columnGap='50px'>

           <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" />
           <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
           <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
           <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
           {/* <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" style={{borderRadius:'10%'}} alt="" /> */}
           {/* <img src="https://cdn.worldvectorlogo.com/logos/netlify.svg" style={{borderRadius:'50%'}} alt="" /> */}
           <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
           <img src="https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png" alt="" />
           <img src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png" style={{borderRadius:'50%'}} alt="" />
           {/* <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxN2Q1ZWEwLTYyM2QtNDBiMS05YjMxLTAyN2I5MDRhNWYxNVwvZGRqcmd3dy04NDZjZTQyOS0zYjBkLTRhZDgtYmY2ZC1hYzUyZGZlNDgyMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G0SE64OMLNEGI8vXb21JRl13RMfER1VP8Kh2Ig3oJaQ" style={{borderRadius:'50%'}} alt="" /> */}
        </Grid>
    </Box>

<Box id='Skills'>
<Heading color='black' p='20px' mb='30px'>TOOLS</Heading>
<Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'}} padding='40px' border="2px solid greenyellow" borderRadius="20px"  w='60%' m='auto' rowGap={'40px'} columnGap='50px'>

   {/* <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" /> */}
   {/* <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" /> */}
   {/* <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" /> */}
   {/* <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" /> */}
   <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" style={{borderRadius:'10%'}} alt="" />
   <img src="https://cdn.worldvectorlogo.com/logos/netlify.svg" style={{borderRadius:'50%'}} alt="" />
   <img src="https://cdn.worldvectorlogo.com/logos/vercel.svg" alt="" />
   {/* <img src="https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png" alt="" /> */}
   {/* <img src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png" style={{borderRadius:'50%'}} alt="" /> */}
   <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxN2Q1ZWEwLTYyM2QtNDBiMS05YjMxLTAyN2I5MDRhNWYxNVwvZGRqcmd3dy04NDZjZTQyOS0zYjBkLTRhZDgtYmY2ZC1hYzUyZGZlNDgyMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G0SE64OMLNEGI8vXb21JRl13RMfER1VP8Kh2Ig3oJaQ" style={{borderRadius:'50%'}} alt="" />
</Grid>
</Box>
</>
    
  )
}
