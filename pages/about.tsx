import { Box, Flex, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAlternateEmail, MdOutlineCake } from 'react-icons/md'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import Image from 'next/image'
import workspaceLight from '../assets/workspace-light.jpg'
import workspaceDark from '../assets/workspace-dark.jpg'
import avatar from '../assets/avatar.png'
import arrowDark from '../assets/curved-arrow-dark.png'
import arrowLight from '../assets/curved-arrow-light.png'
import styles from '../styles/CustomStyles.module.css'
import { CustomHeading } from '../components/CustomHeading/CustomHeading'
import { TechStack } from '../components/TechStack/TechStack'

const About = () => {

    const workspace = useColorModeValue(workspaceLight, workspaceDark)
    const arrow = useColorModeValue(arrowLight, arrowDark)

    return (
        <>
            <Flex px={40} pt='32' pb='32'>
                <Box textAlign={'left'}>
                    <HStack spacing={4} align='flex-start'>
                        <Stack spacing={6}>
                            <Box>
                                <CustomHeading headingText='Product Manager' boxColor='yellow.100' chars={7.5} />
                                <CustomHeading headingText='Software Developer' boxColor='pink.100' chars={8.5} />
                                <CustomHeading headingText='Cloud Operations Engineer' boxColor='blue.100' chars={7.5} />
                            </Box>
                            <Stack spacing={4} width='70%'>
                                <Stack spacing={2}>
                                    <Text as='h3' fontWeight='semibold' fontSize='lg'>Sed ut perspiciatis unde</Text>
                                    <Text as='p'>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta sunt explicabo.
                                    </Text>
                                </Stack>
                                <Stack spacing={2}>
                                    <Text as='h3' fontWeight='semibold' fontSize='lg'>Nemo enim ipsam voluptatem quia voluptas sit</Text>
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
                            <Box width='60%'>
                                <SimpleGrid columns={2} spacing={2}>
                                    <HStack spacing={2}><MdOutlineAlternateEmail fontSize='1.2em' /><Text color='gray.500'>JanhviPatil</Text></HStack>
                                    <HStack spacing={2}><HiOutlineLocationMarker fontSize='1.2em' /><Text color='gray.500'>Hyderabad, India.</Text></HStack>
                                    <HStack spacing={2}><MdOutlineCake fontSize='1.2em' /><Text color='gray.500'>24 Feb 1998, 24 y.o.</Text></HStack>
                                    <HStack spacing={2}><HiOutlineMail size={'1.2em'} /><Text color='gray.500'>janhvipatil716@gmail.com</Text></HStack>
                                </SimpleGrid>
                            </Box>
                        </Stack>
                        <Stack spacing={10}>
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
                </Box>
            </Flex>
            <Flex>
                <Box pl={40} pb={24}>
                    <HStack spacing={16}>
                        <Box style={{ borderRadius: '10px', overflow: 'hidden' }}>
                            <Image src={workspace}
                                alt='my workspace'
                                height='424px'
                                width='600px'
                                objectFit='cover' />
                        </Box>
                        <Box width='40%'>
                            <Stack spacing={2}>
                                <Heading>sed quia non numquam eius modi tempora incidunt</Heading>
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
                    </HStack>
                </Box>
            </Flex>
            <Flex>
                <Box pl={40} pb={32}>
                    <TechStack />
                </Box>
            </Flex>
        </>
    )
}

export default About