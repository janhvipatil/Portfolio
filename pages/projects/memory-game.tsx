import { Box, Button, Divider, Flex, Heading, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { CoverImage } from '../../components/CoverImage/CoverImage'
import project7 from '../../assets/projects/mem-game-cover.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCalendar } from 'react-icons/ai'
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

const Project7 = (props: Props) => {
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
                                    <CoverImage image={project7} />
                                </Box>
                                <Stack pl={{ base: 10, md: 0 }}>
                                    <Heading fontSize={{ base: '4xl', md: '5xl' }}>Memory Game using Vanilla JS</Heading>
                                    <HStack>
                                        <Tag>Learning JavaScript</Tag>
                                        <Tag>Fun Personal Project</Tag>
                                    </HStack>
                                </Stack>
                            </Stack>

                            {/** Project Details */}
                            <Stack spacing={{ base: 12, md: 20 }} direction={{ base: 'column', md: 'row' }} pl={{ base: 10, md: 0 }}>
                                <Box w={{ base: '90%', md: '70%' }}>
                                    <DetailsStack heading='overview' stackSpacing={4}>
                                        <Text letterSpacing='wide'>
                                            A memory game is a game in which players have to match pairs of cards by remembering their positions on the game board. The game is typically played with a deck of cards, with each card having a unique image or pattern on one side and a solid color on the other. The goal of the game is to match as many pairs of cards as possible within a set time limit or until all the pairs have been found.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            I created this using vanilla JavaScript, which was a lot of fun and a great learning experience. I started by designing the game board using HTML and CSS, which involved creating a container for the cards and individual card elements that could be clicked to reveal their hidden images. Then, I used JavaScript to populate the game board with cards by creating an array of images and a loop to generate and append the card elements.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            Next, I implemented the game logic to handle the various events that occur during gameplay, such as revealing the hidden image on a card when it is clicked and comparing it to previously revealed cards. I also added a timer using the setInterval function and a score counter to keep track of the player&apos;s progress.
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
                                        <Text>Developer</Text>
                                        <Text>Designer</Text>
                                    </DetailsStack>
                                    <DetailsStack heading='duration' stackSpacing={2}>
                                        <HStack><AiOutlineCalendar /><Text fontSize='sm'>June 2020 to August 2020</Text></HStack>
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
                    </Flex>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Project7