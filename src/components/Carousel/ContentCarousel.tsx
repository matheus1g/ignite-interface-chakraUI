import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import 'swiper/css';


export function ContentCarousel() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        modules={[Navigation, Pagination]} 
        navigation={true} 
        pagination= {true}
        className="mySwiper"
        style={{width: '100%', flex: '1'}}
      >
        <SwiperSlide>
        <Flex
            w="100%"
            h={["250px", "450px"]}
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/Europa.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href={"/continent/europa"}>
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="700"
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.200"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
        <Flex
            w="100%"
            h={["250px", "450px"]}
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/Europa.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href={"/continent/europa"}>
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="700"
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.200"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}