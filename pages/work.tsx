import { Box, Flex, Heading, Stack, useColorModeValue, Text } from '@chakra-ui/react'
import React from 'react'
import nicelogo from '../assets/company logos/nice-logo.png'
import myassetbuddylogo from '../assets/company logos/myassetbuddy-logo.png'
import medbuyerlogo from '../assets/company logos/medbuyer-logo.png'
import { JobInfoBox } from '../components/JobInfoBox/JobInfoBox'
import { Footer } from '../components/Footer'


type Props = {}

const Work = (props: Props) => {

    const headingColor = useColorModeValue('linear(to-r, blue.300, pink.400)', 'linear(to-r, blue.200, pink.600)')

    return (
        <>
            <Flex w='full'
                pl={{ base: 10, md: 56 }}
                pt={{ base: 28, md: 44 }}
                pr={{ base: 10, md: 52 }}
                pb={{ base: 12, md: 32 }}>

                <Stack spacing={{ base: 0, md: 16 }}>
                    <Stack spacing={4}>
                        <Heading fontSize={{ base: '4xl', md: '6xl' }}
                            bgGradient={headingColor}
                            bgClip='text'>My Professional journey so far...</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </Stack>

                    <Stack spacing={{ base: 16, md: 28 }}>

                        <JobInfoBox
                            logo={myassetbuddylogo}
                            logoWidth='150px'
                            logoHeight='60px'
                            mt='0'
                            dates='Feb 2022 - Current'
                            position='Product Manager and Software Engineer'
                            companyName='My Asset Buddy'
                            companylink='https://www.myassetbuddy.in/about'
                            location='Hyderabad, India'
                            jobdetails='Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantiumdoloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventoreveritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemoenim ipsam 
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit,sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        doloremagnam aliquam quaerat voluptatem.'
                            jobdetails2='qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        doloremagnam aliquam quaerat voluptatem.'
                        />

                        <JobInfoBox
                            logo={medbuyerlogo}
                            logoWidth='160px'
                            logoHeight='35px'
                            mt='1'
                            dates='Nov 2021 - Feb 2022'
                            position='Software Developer'
                            companyName='MedBuyer'
                            companylink='https://medbuyer.in/About'
                            location='Pune, India'
                            jobdetails='Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantiumdoloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventoreveritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemoenim ipsam 
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit,sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        doloremagnam aliquam quaerat voluptatem.'
                        />

                        <JobInfoBox
                            logo={nicelogo}
                            logoWidth='110px'
                            logoHeight='35px'
                            mt='2'
                            dates='Aug 2020 - Dec 2021'
                            position='Associate Application Operations Engineer'
                            companyName='NICE Interactive Solutions India'
                            companylink='https://www.nice.com/company/about-us'
                            location='Pune, India'
                            jobdetails='Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantiumdoloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventoreveritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemoenim ipsam 
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit,sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        doloremagnam aliquam quaerat voluptatem.'
                        />
                    </Stack>
                </Stack>
            </Flex>

            <Footer />
        </>
    )
}

export default Work