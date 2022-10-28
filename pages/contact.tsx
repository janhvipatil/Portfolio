import { Box, Stack, Text, Heading, HStack, Center, useColorModeValue, Link, ButtonGroup, IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { Footer } from '../components/Footer'
import Image from 'next/image'
import arrowDark from '../assets/curved-arrow-dark.png'
import arrowLight from '../assets/curved-arrow-light.png'
import styles from '../styles/CustomStyles.module.css'

type Props = {}

const Contact = (props: Props) => {

    const boxBG = useColorModeValue('white', 'gray.700')
    const mailBoxBG = useColorModeValue('gray.100', 'gray.600')
    const textColor = useColorModeValue('gray.600', 'gray.500')
    const arrow = useColorModeValue(arrowLight, arrowDark)
    const scribbleColor = useColorModeValue('blue.200', 'pink')
    const iconColor = useColorModeValue('gray', 'pink')
    const headingColor = useColorModeValue('linear(to-r, blue.100, pink.300)', 'linear(to-r, blue.100, pink.200)')

    return (
        <>
            <Center w='full' h={{ base: '90vh', md: '92vh' }}>
                <Box textAlign={'center'}>
                    <Stack spacing={{ base: 10, md: 6 }} pt={{ base: 0, md: 40 }}>
                        <Heading as='h2' mb='0' fontSize={{ base: '6xl', md: '8xl' }} bgGradient={headingColor}
                            bgClip='text'>Let&apos;s talk.</Heading>
                        <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor}>Tell me about your project.<br />We can build something amazing together 🤘</Text>
                        <Box alignSelf={'center'} textAlign='left'>
                            <HStack spacing={4} boxShadow='md' p='4' rounded='md' bg={boxBG}>
                                <Center bg={mailBoxBG} rounded={'md'} boxSize='40px' fontSize={'xl'}>
                                    <FiMail color={iconColor} />
                                </Center>
                                <Stack spacing={0}>
                                    <Text>Mail me at:</Text>
                                    <Link href='mailto:janhvipatil716@gmail.com' color='blue.500' fontWeight='medium'>janhvipatil716@gmail.com</Link>
                                </Stack>
                            </HStack>
                            <Stack display={{ base: 'none', md: 'flex' }}>
                                <Box className={styles.tiltBox2} width='250px'>
                                    <Text className={styles.customFont} color={scribbleColor}>
                                        Don&apos;t be a stranger, hit me up on any of my socials to connect.
                                    </Text>
                                </Box>
                                <Box className={styles.tiltArrow2}>
                                    <Image src={arrow} alt='arrow pointing to content' height='100px' width='120px' />
                                </Box>
                            </Stack>
                        </Box>

                        <Box w='full' display={{ base: 'block', md: 'none' }}>
                            <ButtonGroup
                                size='md'
                                spacing={'3'}
                                fontSize='lg'
                                variant='ghost'>
                                <HStack spacing={2}>
                                    <Link isExternal href='https://www.instagram.com/janhvi.patill/'>
                                        <IconButton aria-label='Instagram' icon={<AiFillInstagram fontSize="1.5rem" />} />
                                    </Link>
                                    <Link isExternal href='https://www.linkedin.com/in/janhvipatil/'>
                                        <IconButton aria-label='Linkedin' icon={<AiFillLinkedin fontSize="1.5rem" />} />
                                    </Link>
                                    <Link isExternal href='https://twitter.com/janhvipatil_'>
                                        <IconButton aria-label='Twitter' icon={<AiOutlineTwitter fontSize="1.5rem" />} />
                                    </Link>
                                    <Link isExternal href='https://github.com/janhvipatil'>
                                        <IconButton aria-label='Github' icon={<AiFillGithub fontSize="1.5rem" />} />
                                    </Link>
                                </HStack>
                            </ButtonGroup>
                        </Box>

                    </Stack>
                </Box>
            </Center>
            <Footer />
        </>
    )
}

export default Contact