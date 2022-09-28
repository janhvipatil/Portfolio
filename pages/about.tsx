import { Box, Center, Flex, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAlternateEmail, MdOutlineCake } from 'react-icons/md'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import Image from 'next/image'
import workspaceLight from '../assets/about/workspace-light.jpg'
import workspaceDark from '../assets/about/workspace-dark.jpg'
import avatar from '../assets/about/avatar.png'
import arrowDark from '../assets/curved-arrow-dark.png'
import arrowLight from '../assets/curved-arrow-light.png'
import styles from '../styles/CustomStyles.module.css'
import { CustomHeading } from '../components/CustomHeading/CustomHeading'
import { Footer } from '../components/Footer'

const About = () => {

    const workspace = useColorModeValue(workspaceLight, workspaceDark)
    const arrow = useColorModeValue(arrowLight, arrowDark)
    const textColor = useColorModeValue('gray.500', 'gray.400')

    return (
        <>
            <Flex
                pl={{ base: 8, md: 24, lg: 40 }}
                pr={{ base: 8, md: 12, lg: 40 }}
                pt={{ base: 28, md: 32 }}
                pb={{ base: 12, md: 32 }}>
                <HStack spacing={4} align='flex-start' flexDirection={{ base: 'column', md: 'row' }}>
                    <Stack spacing={{ base: 2, md: 6 }}>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <CustomHeading headingText='Product Manager' boxColor='yellow.100' chars={7.5} />
                            <CustomHeading headingText='Software Developer' boxColor='pink.100' chars={8.5} />
                            <CustomHeading headingText='Cloud Operations Engineer' boxColor='blue.100' chars={7.5} />
                        </Box>
                        <Center display={{ base: 'block', md: 'none' }} pl={6}>
                            <CustomHeading headingText='Product Manager' boxColor='yellow.100' chars={7.5} />
                            <CustomHeading headingText='Software Developer' boxColor='pink.100' chars={8.5} />
                            <CustomHeading headingText='Operations Engineer' boxColor='blue.100' chars={7.5} />
                        </Center>
                        <Stack spacing={4} py={6} display={{ base: 'flex', md: 'none' }}>
                            <Center>
                                <Image src={avatar} alt='my picture' height='125px' width='125px' />
                            </Center>
                            <Center px={4} textAlign='center'>
                                <Text className={styles.customFont}>
                                    sed quia non numquam eius modi tempora
                                    totam rem aperiam
                                </Text>
                            </Center>
                        </Stack>
                        <Stack spacing={{ base: 16, md: 6 }} direction={{ base: 'column-reverse', md: 'column' }}>
                            <Stack spacing={{ base: 4, md: 4 }} width={{ base: '100%', md: '70%' }}>
                                <Stack spacing={2}>
                                    <Heading as='h3'
                                        fontWeight={{ base: 'bold', md: 'semibold' }}
                                        fontSize={{ base: '2xl', md: 'lg' }}>
                                        Sed ut perspiciatis unde</Heading>
                                    <Text as='p'>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta sunt explicabo.
                                    </Text>
                                </Stack>
                                <Stack spacing={2}>
                                    <Heading as='h3'
                                        fontWeight={{ base: 'bold', md: 'semibold' }}
                                        fontSize={{ base: '2xl', md: 'lg' }}>
                                        Nemo enim ipsam voluptatem quia voluptas sit</Heading>
                                    <Text as='p'>
                                        Nemo enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                        eos qui ratione voluptatem sequi nesciunt.
                                    </Text>
                                    <Text as='p'>adipisci velit,
                                        sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                        magnam aliquam quaerat voluptatem.
                                    </Text>
                                    <Text as='p'>adipisci velit,
                                        sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                        magnam aliquam quaerat voluptatem.
                                    </Text>
                                </Stack>
                            </Stack>
                            <Box width={{ base: '100%', md: '60%' }} px={{ base: 16, md: 0 }}>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                                    <HStack spacing={2}><MdOutlineAlternateEmail fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>JanhviPatil</Text></HStack>
                                    <HStack spacing={2}><HiOutlineLocationMarker fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Hyderabad, India.</Text></HStack>
                                    <HStack spacing={2}><MdOutlineCake fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>24 Feb 1998, 24 y.o.</Text></HStack>
                                    <HStack spacing={2}><HiOutlineMail size={'1.2em'} /><Text color={textColor} fontSize={{ base: 'sm' }}>janhvi716@gmail.com</Text></HStack>
                                </SimpleGrid>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack spacing={10} display={{ base: 'none', md: 'flex' }}>
                        <Box pt='50px'>
                            <Image src={avatar} alt='my picture' height='125px' width='125px' />
                        </Box>
                        <Box className={styles.tiltBox} width='250px'>
                            <Text className={styles.customFont}>
                                sed quia non numquam eius modi tempora
                                totam rem aperiam, eaque
                                quae ab illo inventore veritatis
                                incidunt ut labore et dolore
                                magnam aliquam quaerat voluptatem.
                            </Text>
                        </Box>
                        <Box className={styles.tiltArrow}>
                            <Image src={arrow} alt='arrow pointing to content' height='100px' width='120px' />
                        </Box>
                    </Stack>
                </HStack>
            </Flex>
            <Stack spacing={{ base: 8, md: 16 }} pl={{ base: 8, md: 20, lg: 40 }} pr={{ base: 8, md: 20, lg: 40 }} pb={{ base: 16, md: 24 }} direction={{ base: 'column', md: 'row' }}>
                <Box style={{ borderRadius: '10px', overflow: 'hidden' }} w={{ base: '100%', md: '60%' }}>
                    <Image src={workspace}
                        alt='my workspace'
                        objectFit='cover' />
                </Box>
                <Box width={{ base: '100%', md: '60%' }}>
                    <Stack spacing={{ base: 2, md: 4 }}>
                        <Heading bgGradient='linear(to-r, pink.200, blue.200)'
                            bgClip='text'>This is where the magic happens</Heading>
                        <Text as='p'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo.
                        </Text>
                        <Text as='p'>adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem.
                        </Text>
                        <Text as='p'>adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem.
                        </Text>
                    </Stack>
                </Box>
            </Stack>

            <Footer />
        </>
    )
}

export default About