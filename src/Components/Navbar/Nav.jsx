import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Skills',"Projects","Contact"];

const NavLink = ({ children }) => (
  <Link
    px={6}
    py={1}
    fontWeight="semibold"
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('White'),
      color:'black',
    }}
    href={`#${children}`}>
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let audio = new Audio("/resume.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <div  style={{position:'sticky',top:0,zIndex:2}}>
      <Box bg="black" px={4} color='greenyellow' >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <Flex alignItems={'center'}>
            <Menu>

                <img style={{"borderRadius":'50%', 'width':'50px','height':'50px'}} src="https://i.pinimg.com/originals/ef/09/36/ef0936558e58d6bebf73fee2ae895fe3.gif" alt="" />

            </Menu>
          </Flex>
        
          <HStack spacing={8} alignItems={'center'}>
            
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <a target="_blank"  onClick={start} href='/Swapnil_Chavan_Resume.pdf' download>
              <Button
                w={{ base: '150px', md: '100px', lg: '100px' }}
                m="auto"
                onClick={()=>{window.open('https://drive.google.com/file/d/1uouC86f3DlRCd0YkOOk-9j92_ZWeEFWk/view?usp=sharing', "_blank")}}
                borderColor="white"     
                variant='outline'
                _hover={{color:'white'}}
                >
                  Resume {''}
              </Button>
              </a>
            </HStack>
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon bg="black" />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </div>
  );
}
