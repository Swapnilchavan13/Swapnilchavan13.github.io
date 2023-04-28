import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';

const settings = {
  dots: true,
  slidesToShow: 1,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
};

export default function Carousel({images}) {

  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  return (
    <Box
      m='auto'
      position={'relative'}
      height={'230px'}
      w='300px'
      overflow={'hidden'}>
      
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      
      <IconButton
        aria-label="left-arrow"
        bg='blackAlpha.400'
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -80%)'}
        zIndex={1}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bg='blackAlpha.400'
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -80%)'}
        zIndex={1}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((url, index) => (
          <Box
            key={index}
            height={'220px'}
            w={'480px'}
            border="0px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            backgroundImage={`url(${url})`}
            p='5px'
          />
        ))}
      </Slider>
    </Box>
  );
}