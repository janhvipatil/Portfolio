import { Box, Button, Divider, Flex, Heading, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { CoverImage } from '../../components/CoverImage/CoverImage'
import project6 from '../../assets/projects/crux-blog-cover.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight, AiOutlineCalendar } from 'react-icons/ai'
import { Footer } from '../../components/Footer'
import avatar from '../../assets/about/avatar.png'

type Props = {}

interface DetailsStackProps {
    heading: string,
    children: React.ReactNode,
    stackSpacing: number
}

export const DetailsStack = ({ heading, children, stackSpacing }: DetailsStackProps) => {
    return (
        <Stack spacing={stackSpacing}>
            <Text textTransform='uppercase' color='gray.400'>{heading}</Text>
            {children}
        </Stack>
    )
}

interface PhaseHeadingProps {
    heading: string
}

export const PhaseHeading = ({ heading }: PhaseHeadingProps) => {
    return (
        <Heading fontSize='4xl'>{heading}</Heading>
    )
}

const Project6 = (props: Props) => {
    return (
        <>
            <Flex width='full'
                pl={{ base: 2, md: 40 }}
                pt={{ base: 28, md: 32 }}
                pr={{ base: 2, md: 24 }}
                pb={{ base: 12, md: 32 }}>

                <Stack spacing={{ base: 8, md: 14 }}>

                    <Stack spacing={{ base: 24, md: 48 }}>

                        <Stack spacing={{ base: 8, md: 16 }}>
                            {/** Page Header */}
                            <Stack spacing={12}>
                                <Box>
                                    <CoverImage image={project6} />
                                </Box>
                                <Stack pl={{ base: 10, md: 0 }}>
                                    <Heading fontSize={{ base: '4xl', md: '5xl' }}>Blog Starter Template</Heading>
                                    <HStack>
                                        <Tag>NextJS</Tag>
                                        <Tag>Headless CMS</Tag>
                                    </HStack>
                                </Stack>
                            </Stack>

                            {/** Project Details */}
                            <Stack spacing={{ base: 12, md: 20 }} direction={{ base: 'column', md: 'row' }} pl={{ base: 10, md: 0 }}>
                                <Box w={{ base: '90%', md: '70%' }}>
                                    <DetailsStack heading='overview' stackSpacing={4}>
                                        <Text letterSpacing='wide'>
                                            A blog starter template that allows developers to quickly get started building a blog or content-driven website using NextJS, Typescript, Chakra UI, and Sanity IO. The template would provide a basic structure and configuration for the application, as well as a set of pre-built components and utilities for managing content and styling the application. With this template, developers can focus on building their content and features, rather than setting up the underlying infrastructure and design system.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            In addition to these technologies, the template also utilizes Supabase as the database for storing and managing the content for the blog or website. Supabase is a realtime, open-source Postgres database that provides a powerful and flexible API for building applications, allowing developers to easily connect to a Postgres database, query and manipulate data, and receive realtime updates through websockets.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            One unique feature of this template is the ability for users to create polls and have their audience vote. Supabase is used to store the poll data and track the votes in realtime, providing a convenient and interactive way for users to engage with their audience.
                                        </Text>
                                    </DetailsStack>
                                </Box>
                                <Stack spacing={4}>
                                    <DetailsStack heading='collaborators' stackSpacing={2}>
                                        <HStack>
                                            <Image src={avatar} alt='my picture' height='24px' width='24px' />
                                            <Text>Janhvi Patil</Text>
                                        </HStack>
                                    </DetailsStack>
                                    <DetailsStack heading='my role' stackSpacing={2}>
                                        <Stack spacing={0}>
                                            <Text>Solution Architect</Text>
                                            <Text>Software Developer</Text>
                                            <Text>UI/UX Design</Text>
                                            <Text>Data Modelling</Text>
                                            <Text>Usability testing</Text>
                                        </Stack>
                                    </DetailsStack>
                                    <DetailsStack heading='duration' stackSpacing={2}>
                                        <HStack><AiOutlineCalendar /><Text fontSize='sm'>January 2022 to February 2022</Text></HStack>
                                    </DetailsStack>
                                </Stack>
                            </Stack>

                        </Stack>

                        {/** Process Information */}
                        {/* <Stack spacing={16} pl={{ base: 10, md: 16 }} pr={{ base: 12, md: 24 }}>
                            <Stack spacing={6}>
                                <PhaseHeading heading='Conclusion' />
                                <Text letterSpacing='wide'>Using Supabase in conjunction with NextJS, Typescript, Chakra UI, and Sanity IO can provide a powerful and scalable foundation for building a variety of web applications, including blogs, content-driven websites, and interactive polls and surveys. The template can be easily customized and extended to fit the specific needs and requirements of many projects.</Text>
                            </Stack>
                        </Stack> */}
                    </Stack>
                    <Divider />
                    <Flex justifyContent='space-between' pr={{ base: 5 }}>
                        <Link href={'/projects'} passHref>
                            <Button width='fit-content' variant='ghost' colorScheme='blue' size={{ base: 'sm' }}>All Projects</Button>
                        </Link>
                        <Link href={'/projects/memory-game'} passHref>
                            <Button width='fit-content' rightIcon={<AiOutlineArrowRight />} variant='outline' colorScheme='blue' size={{ base: 'sm' }}>Next Project</Button>
                        </Link>
                    </Flex>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Project6