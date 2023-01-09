import { Avatar, Box, Button, Divider, Flex, Heading, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { CoverImage } from '../../components/CoverImage/CoverImage'
import project2 from '../../assets/projects/tec-cover.png'
import Link from 'next/link'
import { AiOutlineArrowRight, AiOutlineCalendar } from 'react-icons/ai'
import { Footer } from '../../components/Footer'
import Image from 'next/image'
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

const Project2 = (props: Props) => {
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
                                    <CoverImage image={project2} />
                                </Box>
                                <Stack pl={{ base: 10, md: 0 }}>
                                    <Heading fontSize={{ base: '4xl', md: '5xl' }}>TEC Mapping</Heading>
                                    <HStack>
                                        <Tag>Research Project</Tag>
                                        <Tag>Internship</Tag>
                                    </HStack>
                                </Stack>
                            </Stack>

                            {/** Project Details */}
                            <Stack spacing={{ base: 12, md: 20 }} direction={{ base: 'column', md: 'row' }} pl={{ base: 10, md: 0 }}>
                                <Box w={{ base: '90%', md: '70%' }}>
                                    <DetailsStack heading='overview' stackSpacing={4}>
                                        <Text letterSpacing='wide'>
                                            During my final year of undergraduate studies, I secured a seven-month research internship at Pralhad P. Chhabria Research Center (PPCRC), Pune, India. Here, I was able to gain valuable hands-on experience in the field of Geographic Information Systems and Data Analytics while working under the guidance of Professor Dr Rajesh Chowdhary.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            Over the course of my internship, I was given the opportunity to work on a research project that explored the characteristics of total electron content (TEC) using International GNSS Service (IGS) stations. Our research focused on understanding the variations in ionization in the Earth&apos;s atmosphere, interpreting how various solar phenomena are related to these variations, analyzing the effects of geomagnetic storms on GPS positioning errors in the L1-band and predicting future disturbances in the same.
                                        </Text>
                                    </DetailsStack>
                                </Box>
                                <Stack spacing={4}>
                                    <DetailsStack heading='collaborators' stackSpacing={2}>
                                        <HStack>
                                            <Image src={avatar} alt='my picture' height='24px' width='24px' />
                                            <Text>Janhvi Patil</Text>
                                        </HStack>
                                        <HStack>
                                            <Avatar
                                                size='xs'
                                                name='Rajesh Chowdhary' />
                                            <Text>Rajesh Chowdhary</Text>
                                        </HStack>
                                        <HStack>
                                            <Avatar
                                                size='xs'
                                                name='Nikhil Kothari' />
                                            <Text>Nikhil Kothari</Text>
                                        </HStack>
                                        <HStack>
                                            <Avatar
                                                size='xs'
                                                name='Shubham Agarwal' />
                                            <Text>Shubham Agarwal</Text>
                                        </HStack>
                                    </DetailsStack>
                                    <DetailsStack heading='my role' stackSpacing={2}>
                                        <Text>Research Assistant</Text>
                                    </DetailsStack>
                                    <DetailsStack heading='duration' stackSpacing={2}>
                                        <HStack><AiOutlineCalendar /><Text fontSize='sm'>August 2019 to Feb 2020</Text></HStack>
                                    </DetailsStack>
                                </Stack>
                            </Stack>

                        </Stack>

                    </Stack>
                    <Divider />
                    <Flex justifyContent='space-between' pr={{ base: 5 }}>
                        <Link href={'/projects'} passHref>
                            <Button width='fit-content' variant='ghost' colorScheme='blue' size={{ base: 'sm' }}>All Projects</Button>
                        </Link>
                        <Link href={'/projects/artist-booking-app'} passHref>
                            <Button width='fit-content' rightIcon={<AiOutlineArrowRight />} variant='outline' colorScheme='blue' size={{ base: 'sm' }}>Next Project</Button>
                        </Link>
                    </Flex>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Project2