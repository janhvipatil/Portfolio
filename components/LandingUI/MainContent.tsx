import { Button, Heading, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

type Props = {}

export const MainContent = (props: Props) => {

    console.log("Oh hello there stranger 👀, fancy seeing you here ❤️, you can check out the source code at: https://github.com/janhvipatil/portfolio")
    const headingColor = useColorModeValue('linear(to-r, pink.200, blue.200)', 'linear(to-r, pink.200, blue.700)')

    return (
        <Stack px='12%' justify={'center'} w='full' height={{ base: '90vh', md: '100vh' }}>
            <Stack spacing={{ base: 4, md: 10 }} maxW='3xl'>
                <Stack spacing={2}>
                    <Text fontSize={{ base: 'lg', md: 'xl' }}>Hi <span>👋</span>, I am</Text>
                    <Heading fontSize={{ base: '6xl', md: '8xl' }}
                        bgGradient={headingColor}
                        bgClip='text'>
                        Janhvi Patil
                    </Heading>
                    <Heading as='p' fontSize='5xl'
                        display={{ base: 'none', md: 'flex' }}
                        bgGradient='linear(to-r, blue.200, blue.700)'
                        bgClip='text'>
                        <HStack spacing={0}>
                            <Text>I&apos;m a&nbsp;</Text>
                            <Typewriter
                                options={{
                                    strings: ['software developer', 'product manager', 'ui/ux student', 'open-source contributor', 'artist'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </HStack>
                    </Heading>
                    <Heading as='p' fontSize='2xl'
                        display={{ base: 'flex', md: 'none' }}
                        bgGradient='linear(to-r, blue.200, blue.700)'
                        bgClip='text'>
                        <HStack spacing={0}>
                            <Text>I&apos;m a&nbsp;</Text>
                            <Typewriter
                                options={{
                                    strings: ['software developer', 'product manager', 'ui/ux designer', 'artist'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </HStack>
                    </Heading>
                </Stack>
                <Text as='p' fontSize={{ base: 'md', md: 'lg' }} color='gray.500'>
                I&apos;m a software developer with experience in product management. 
                I help create applications that address customer needs and solve complex business challenges.
                My expertise lies within front-end web app development and my go-to tech stack includes
                TypeScript, React, NextJS, Frappe, Python, SQL and HTML & CSS.
                I&apos;m a lifelong learner (currently taking a few courses on UI/UX) and love to read, 
                travel and explore new places and cultures.
                </Text>
                <Button
                    colorScheme='blue'
                    variant='outline'
                    width='fit-content'>
                    <Link href='/contact'>
                        <HStack>
                            <Text>Get in touch</Text>
                            <FaTelegramPlane />
                        </HStack>
                    </Link>
                </Button>
            </Stack>
        </Stack>
    )
}