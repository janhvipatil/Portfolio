import { Box, Button, Center, Divider, Flex, Heading, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { CoverImage } from '../../components/CoverImage/CoverImage'
import project3 from '../../assets/projects/artists-cover.png'
import avatar from '../../assets/about/avatar.png'
import survey1 from '../../assets/projects/project3/survey1.png'
import survey2 from '../../assets/projects/project3/survey2.png'
import survey3 from '../../assets/projects/project3/survey3.png'
import survey4 from '../../assets/projects/project3/survey4.png'
import survey5 from '../../assets/projects/project3/survey5.png'
import survey6 from '../../assets/projects/project3/survey6.png'
import userpersona1 from '../../assets/projects/project3/user-persona1.png'
import userpersona2 from '../../assets/projects/project3/user-persona2.png'
import usermap from '../../assets/projects/project3/usermap.png'
import flowchart from '../../assets/projects/project3/flowchart.png'
import lowfidelityprototype1 from '../../assets/projects/project3/low-fidelity-prototype.jpg'
import lowfidelityprototype2 from '../../assets/projects/project3/low-fidelity-prototype2.jpg'
import highfidelityprototype1 from '../../assets/projects/project3/high-fidelity-prototype.png'
import highfidelityprototype2 from '../../assets/projects/project3/high-fidelity-prototype2.png'
import ss1 from '../../assets/projects/project3/ss1.png'
import ss2 from '../../assets/projects/project3/ss2.png'
import ss3 from '../../assets/projects/project3/ss3.png'
import ss4 from '../../assets/projects/project3/ss4.png'
import ss5 from '../../assets/projects/project3/ss5.png'
import ss6 from '../../assets/projects/project3/ss6.png'
import ss7 from '../../assets/projects/project3/ss7.png'
import ss8 from '../../assets/projects/project3/ss8.png'
import ss9 from '../../assets/projects/project3/ss9.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight, AiOutlineCalendar } from 'react-icons/ai'
import { Footer } from '../../components/Footer'

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

const Project3 = (props: Props) => {
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
                                    <CoverImage image={project3} />
                                </Box>
                                <Stack pl={{ base: 10, md: 0 }}>
                                    <Heading fontSize={{ base: '4xl', md: '5xl' }}>Musician Booking App: Case Study</Heading>
                                    <HStack>
                                        <Tag>User Research</Tag>
                                        <Tag>UI Design and Prototyping</Tag>
                                    </HStack>
                                </Stack>
                            </Stack>

                            {/** Project Details */}
                            <Stack spacing={{ base: 12, md: 20 }} direction={{ base: 'column', md: 'row' }} pl={{ base: 10, md: 0 }}>
                                <Box w={{ base: '90%', md: '70%' }}>
                                    <DetailsStack heading='overview' stackSpacing={4}>
                                        <Text letterSpacing='wide'>
                                            The music industry has always been a challenging and
                                            competitive space for musicians to thrive in. Although, with
                                            the advent of the internet and social media, it has
                                            become easier for artists to reach out
                                            to potential clients and book gigs, the process can still be tedious
                                            and time-consuming for both the artists and the clients.
                                            This is where a musician booking app can help to streamline
                                            the process and make it easier for both parties.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            The app aims to provide a platform for users to easily
                                            discover and book artists for their events and occasions,
                                            without having to go through the hassle of searching for artists on
                                            multiple websites or contacting them individually. The app provides
                                            users with a variety of filters and search options,
                                            as well as the ability to schedule demos and meetings with artists,
                                            all within a single platform. This makes it easier for users to
                                            find and book the right artist for their event, without having
                                            to go through the cumbersome process of contacting multiple artists
                                            and coordinating schedules.
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
                                            <Text>Product strategy,</Text>
                                            <Text>User research and analysis,</Text>
                                            <Text>Persona creation,</Text>
                                            <Text>MVP definition,</Text>
                                            <Text>Wireframing,</Text>
                                            <Text>UI design and prototyping,</Text>
                                            <Text>Usability testing</Text>
                                        </Stack>
                                    </DetailsStack>
                                    <DetailsStack heading='duration' stackSpacing={2}>
                                        <HStack><AiOutlineCalendar /><Text fontSize='sm'>September 2022 to November 2022</Text></HStack>
                                    </DetailsStack>
                                </Stack>
                            </Stack>

                        </Stack>

                        {/** Process Information */}
                        <Stack spacing={{ base: 16, md: 24 }} pl={{ base: 10, md: 16 }} pr={{ base: 12, md: 24 }}>

                            <Stack spacing={6} width='full'>
                                <PhaseHeading heading='Design Process' />
                                <Stack>
                                    <Text as='span' letterSpacing='wide'>The design process for the musician booking app began with understanding user pain points, this was done by collecting data and feedback from potential users to understand their needs and preferences.</Text>
                                </Stack>
                                <Stack>
                                    <HStack spacing={4}>
                                        <Box>
                                            <Image src={survey1} alt='survey question 1' height='850px' width='1960px' />
                                        </Box>
                                        <Box>
                                            <Image src={survey2} alt='survey question 2' height='850px' width='1960px' />
                                        </Box>
                                    </HStack>
                                    <HStack spacing={4}>
                                        <Box>
                                            <Image src={survey3} alt='survey question 3' height='850px' width='1960px' />
                                        </Box>
                                        <Box>
                                            <Image src={survey4} alt='survey question 4' height='850px' width='1960px' />
                                        </Box>
                                    </HStack>
                                    <HStack spacing={4}>
                                        <Box>
                                            <Image src={survey5} alt='survey question 5' height='850px' width='1960px' />
                                        </Box>
                                        <Box>
                                            <Image src={survey6} alt='survey question 6' height='850px' width='1960px' />
                                        </Box>
                                    </HStack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='User Personas' />
                                <Text as='span' letterSpacing='wide'>This helped in the creation of user personas and user flows. By understanding the user&apos;s needs and the steps they will take when using the app, we can prioritize which features and functionality are most important to include in the app. This can help ensure that the app is focused and streamlined, rather than cluttered with unnecessary features.</Text>
                                <Stack spacing={12}>
                                    <Stack spacing={2}>
                                        <Text>User persona: Jennie Anderson</Text>
                                        <Box>
                                            <Image src={userpersona1} alt='user persona 1' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>User persona: Yang Chao</Text>
                                        <Box>
                                            <Image src={userpersona2} alt='user persona 2' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='User Journey' />
                                <Text letterSpacing='wide'>User flow maps out the steps that a user will take when using the app, from start to finish. This can help designers understand the user&apos;s perspective and identify any potential bottlenecks or pain points in the user journey.</Text>
                                <Box>
                                    <Image src={usermap} alt='flowchart' />
                                </Box>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Solution architecting' />
                                <Text as='span'>The final design of the app includes a clean and modern interface with easy-to-use navigation. The home screen features a search bar and a variety of filters, such as location, genre, and price range, to help users find the right artist for their event.</Text>

                                <Text as='span'>Users can also browse through a list of featured artists or browse by genre to discover new artists. Once they have found an artist they are interested in, they can view their profile, chat with the artists and schedule a demo or meeting.</Text>

                                <Text as='span'>Once the user has decided on an artist, they can easily book them through the app and pay for their services using a secure payment gateway. The app also includes a calendar feature to help users keep track of their bookings and events.</Text>
                                <Box _hover={{
                                    transform: 'scale(1.35)',
                                    transition: 'all ease-in-out .2s'
                                }}>
                                    <Image src={flowchart} alt='flowchart' />
                                </Box>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Low fidelity prototype' />
                                <Stack spacing={6}>
                                    <Center>
                                        <Image src={lowfidelityprototype1} alt='low fidelity prototype 1' height='600px' width='800px' />
                                    </Center>
                                    <Center>
                                        <Image src={lowfidelityprototype2} alt='low fidelity prototype 2' height='600px' width='800px' />
                                    </Center>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='High fidelity prototype' />
                                <Text as='span'>Next, wireframes were created to map out the layout and functionality of the app. The wireframes were then refined and turned into high-fidelity mockups using Figma&apos;s design tools.</Text>
                                <HStack spacing={4}>
                                    <Center>
                                        <Image src={highfidelityprototype1} alt='high fidelity prototype 1' height='600px' width='800px' />
                                    </Center>
                                    <Center>
                                        <Image src={highfidelityprototype2} alt='high fidelity prototype 2' height='600px' width='800px' />
                                    </Center>
                                </HStack>
                            </Stack>

                            <Stack spacing={0}>
                                <HStack>
                                    <Box>
                                        <Image src={ss1} alt='app sketch 1' />
                                    </Box>
                                    <Box>
                                        <Image src={ss2} alt='app sketch 2' />
                                    </Box>
                                    <Box>
                                        <Image src={ss3} alt='app sketch 3' />
                                    </Box>
                                </HStack>
                                <HStack alignItems='self-start'>
                                    <Box>
                                        <Image src={ss4} alt='app sketch 4' width='650px' height='1100px' />
                                    </Box>
                                    <Box>
                                        <Image src={ss5} alt='app sketch 5' />
                                    </Box>
                                </HStack>
                                <HStack alignItems='self-start'>
                                    <Box>
                                        <Image src={ss6} alt='app sketch 6' />
                                    </Box>
                                    <Box>
                                        <Image src={ss7} alt='app sketch 7' />
                                    </Box>
                                </HStack>
                                <HStack alignItems='self-start'>
                                    <Box>
                                        <Image src={ss8} alt='app sketch 8' />
                                    </Box>
                                    <Box>
                                        <Image src={ss9} alt='app sketch 9' />
                                    </Box>
                                </HStack>
                            </Stack>

                            <Stack>
                                <Center>
                                    <Video />
                                </Center>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Conclusion' />
                                <Text letterSpacing='wide'>The musician booking app created using Figma
                                    has helped to simplify the process of finding and booking artists
                                    for events and occasions. It provides users with a variety
                                    of filters and search options to help them discover the right artist,
                                    and allows them to easily schedule demos and meetings and make bookings
                                    through the app. The clean and modern interface, along with easy-to-use navigation,
                                    makes the app user-friendly and enjoyable to use.</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Flex justifyContent='space-between' pr={{ base: 5 }}>
                        <Link href={'/projects'} passHref>
                            <Button width='fit-content' variant='ghost' colorScheme='blue' size={{ base: 'sm' }}>All Projects</Button>
                        </Link>
                        <Link href={'/projects/company-website'} passHref>
                            <Button width='fit-content' rightIcon={<AiOutlineArrowRight />} variant='outline' colorScheme='blue' size={{ base: 'sm' }}>Next Project</Button>
                        </Link>
                    </Flex>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

const Video = () => {
    return (
        <video controls src={"/prototype.mp4"} style={{ width: "600px", height: "600px" }} />
    )
}


export default Project3