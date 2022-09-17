import { Box, Flex, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import dummyImage from '../assets/projects/dummyImage.jpg'
import { Footer } from '../components/Footer'
import { ProjectBox } from '../components/ProjectBox/ProjectBox'
import githubIcon from '../assets/projects/github.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {

    const headingColor = useColorModeValue('linear(to-r, blue.300, yellow.400)', 'linear(to-r, blue.200, yellow.600)')

    return (
        <>
            <Flex width='full'
                pl={{ base: 2, md: 40 }}
                pt={{ base: 28, md: 44 }}
                pr={{ base: 2, md: 24 }} pb={12}>

                <Stack px={{ base: 8, md: 24 }} spacing={4}>
                    <Heading
                        fontSize={{ base: '4xl', md: '6xl' }}
                        bgGradient={headingColor}
                        bgClip='text'>A few of my featured projects here</Heading>
                    <HStack>
                        <Text fontSize={{ base: 'md', md: 'lg' }}>Get the complete list at my</Text>
                        <Box pt={1}>
                            <Image src={githubIcon} alt='github icon' height='24px' width='24px' />
                        </Box>
                        <Link href='https://github.com/janhvipatil' passHref>
                            <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'green.400', cursor: 'pointer' }}>Github</Text></a>
                        </Link>
                    </HStack>

                    <SimpleGrid
                        columns={1}
                        spacing={{ base: 12, md: 14 }}
                        py={{ base: 4, md: 8 }}
                        rounded='xl'>

                        <ProjectBox
                            image={dummyImage}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            tech1='jdgfu oihefpw'
                            tech2='jdgfu oihefpw'
                            tech3='jdgfu oihefpw'
                            tech4='jdgfu oihefpw'
                        />

                        <ProjectBox
                            image={dummyImage}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            tech1='jdgfu oihefpw'
                            tech2='jdgfu oihefpw'
                            tech3='jdgfu oihefpw'
                            tech4='jdgfu oihefpw'
                        />

                        <ProjectBox
                            image={dummyImage}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            tech1='jdgfu oihefpw'
                            tech2='jdgfu oihefpw'
                            tech3='jdgfu oihefpw'
                            tech4='jdgfu oihefpw'
                        />

                        <ProjectBox
                            image={dummyImage}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            tech1='jdgfu oihefpw'
                            tech2='jdgfu oihefpw'
                            tech3='jdgfu oihefpw'
                            tech4='jdgfu oihefpw'
                        />

                        <ProjectBox
                            image={dummyImage}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            tech1='jdgfu oihefpw'
                            tech2='jdgfu oihefpw'
                            tech3='jdgfu oihefpw'
                            tech4='jdgfu oihefpw'
                        />
                    </SimpleGrid>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Projects