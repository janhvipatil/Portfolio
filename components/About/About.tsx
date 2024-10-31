import { Box, Center, Flex, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAlternateEmail, MdOutlineCake } from 'react-icons/md'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import Image from 'next/image'
import workspaceLight from '../../assets/about/workspace-light.jpg'
import workspaceDark from '../../assets/about/workspace-dark.jpg'
import avatar from '../../assets/about/avatar.png'
import arrowDark from '../../assets/curved-arrow-dark.png'
import arrowLight from '../../assets/curved-arrow-light.png'
import styles from '../../styles/CustomStyles.module.css'
import { CustomHeading } from '../CustomHeading/CustomHeading'

export const About = () => {

    const workspace = useColorModeValue(workspaceLight, workspaceDark)
    const arrow = useColorModeValue(arrowLight, arrowDark)
    const textColor = useColorModeValue('gray.500', 'gray.400')

    return (
        <>
            <Flex
                pl={{ base: 10, md: 56 }}
                pt={{ base: 28, md: 44 }}
                pr={{ base: 10, md: 52 }}
                pb={{ base: 12, md: 24 }}>
                <HStack spacing={4} align='flex-start' flexDirection={{ base: 'column', md: 'row' }}>
                    <Stack spacing={{ base: 2, md: 6 }}>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <CustomHeading headingText='Software Developer' boxColor='yellow.100' chars={8.5} />
                            <CustomHeading headingText='Product Engineer' boxColor='pink.100' chars={7.5} />
                            <CustomHeading headingText='UI/ UX Designer' boxColor='blue.100' chars={7.5} />
                        </Box>
                        <Center display={{ base: 'block', md: 'none' }} px={10}>
                            <CustomHeading headingText='Software Developer' boxColor='yellow.100' chars={8.5} />
                            <CustomHeading headingText='Product Engineer' boxColor='pink.100' chars={7.5} />
                            <CustomHeading headingText='UI/ UX Designer' boxColor='blue.100' chars={7.5} />
                        </Center>
                        <Stack spacing={4} py={6} display={{ base: 'flex', md: 'none' }}>
                            <Center>
                                <Image src={avatar} alt='my picture' height='200px' width='200px' />
                            </Center>
                            <Center px={4} textAlign='center'>
                                <Text className={styles.customFont}>
                                    I&apos;m fascinated by the intersection between tech, business and life.
                                    My goal is to help build great products that have a lasting impact.
                                </Text>
                            </Center>
                        </Stack>
                        <Stack spacing={{ base: 16, md: 6 }} direction={{ base: 'column-reverse', md: 'column' }}>
                            <Stack spacing={{ base: 4, md: 4 }} width={{ base: '100%', md: '70%' }}>
                                <Stack spacing={2}>
                                    <Text as='p'>
                                        Hi, I am <strong>Janhvi</strong>, a full-stack software developer who wants to build products that make a difference.
                                        My top skills lie within front-end web app development and my go-to tech stack includes
                                        TypeScript, React, Frappe, Python, SQL, HTML & CSS.
                                        I&apos;m a lifelong learner (currently taking a few courses on UI/UX) and love to read,
                                        travel and explore new places and cultures.
                                    </Text>
                                </Stack>
                                <Heading as='h3'
                                    fontWeight={{ base: 'bold', md: 'semibold' }}
                                    fontSize={{ base: '2xl', md: 'lg' }}>
                                    My calling - Turning ideas into <strong>products</strong></Heading>
                                <Stack spacing={0}>
                                    <Text as='p'>
                                        I graduated with a Bachelor of Engineering in Electronics and Telecommunications
                                        from International Institute of Information Technology, Pune - with a
                                        first class with distinction, class rank - 3rd, and multiple awards under my belt including
                                        the Dr. L H Hiranandani Award for &apos;Best Girl Student&apos;
                                    </Text>
                                </Stack>
                            </Stack>
                            <Box width={{ md: '60%' }} px={{ base: 8, md: 0 }}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <HStack spacing={2}><MdOutlineAlternateEmail fontSize='1.1em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Janhvi Patil</Text></HStack>
                                    <HStack spacing={2}><HiOutlineLocationMarker fontSize='1.1em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Pune, India</Text></HStack>
                                    <HStack spacing={2}><HiOutlineMail size={'1.1em'} /><Text color={textColor} fontSize={{ base: 'sm' }}>janhvi716@gmail.com</Text></HStack>
                                </SimpleGrid>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack spacing={10} display={{ base: 'none', md: 'flex' }}>
                        <Box pt='50px'>
                            <Image src={avatar} alt='my picture' height='150px' width='150px' />
                        </Box>
                        <Box className={styles.tiltBox} width='250px'>
                            <Text className={styles.customFont}>
                                I&apos;m fascinated by the intersection between tech, business and life.
                                My goal is to help build great products that have a lasting impact.
                            </Text>
                        </Box>
                        <Box className={styles.tiltArrow}>
                            <Image src={arrow} alt='arrow pointing to content' height='100px' width='120px' />
                        </Box>
                    </Stack>
                </HStack>
            </Flex>
            <Stack spacing={{ base: 8, md: 16 }}
                pt={{ base: 6, md: 12 }}
                pl={{ base: 10, md: 56 }}
                pr={{ base: 10, md: 52 }}
                pb={{ base: 12, md: 24 }}
                direction={{ base: 'column', md: 'row' }}>
                <Box style={{ borderRadius: '10px', overflow: 'hidden' }} w={{ base: '100%', md: '70%' }}>
                    <Image src={workspace}
                        alt='my workspace'
                        objectFit='cover' />
                </Box>
                <Box width={{ base: '100%', md: '60%' }}>
                    <Stack spacing={{ base: 2, md: 4 }}>
                        <Heading bgGradient='linear(to-r, pink.200, blue.200)'
                            bgClip='text'>This is where the magic happens</Heading>
                        <Text as='p'>
                            I&apos;m someone who has enjoyed building beautiful things almost all my life, what started
                            as me having an interest in sketching and painting, soon grew into me exploring
                            digital art and then trickled into web development and design. One of my first projects was when I created
                            a music library of all my favorite songs with custom label covers on my local machine in 8th grade.
                            (This predated Spotify and Apple music and was kinda shady considering I obtained
                            those songs from a pendrive shared by a friend)
                        </Text>
                        <Text as='p'>
                            What I did not know then was that my skills as an artist and developer combined with my
                            love for communicating would be the perfect recipe for my career in tech.
                        </Text>
                        <Text as='p'>

                        </Text>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}