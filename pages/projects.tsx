import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import project1 from '../assets/projects/crux-preview.png'
import project2 from '../assets/projects/tec-preview.png'
import project3 from '../assets/projects/company-preview.png'
import project4 from '../assets/projects/portfolio-preview.png'
import project5 from '../assets/projects/crux-blog-preview.png'
import project6 from '../assets/projects/mem-game-preview.png'
import { Footer } from '../components/Footer'
import { ProjectBox } from '../components/ProjectBox/ProjectBox'
import githubIcon from '../assets/projects/github.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb'
import { SiSupabase, SiTypescript } from 'react-icons/si'

type Props = {}

const Projects = (props: Props) => {

    const headingColor = 'linear(to-r, blue.200, pink.200)'

    return (
        <>
            <Flex width='full'
                pl={{ base: 2, md: 40 }}
                pt={{ base: 28, md: 44 }}
                pr={{ base: 2, md: 24 }}
                pb={{ base: 12, md: 32 }}>

                <Stack px={{ base: 8, md: 20 }} spacing={{ base: 4, md: 0 }}>
                    <Heading
                        fontSize={{ base: '4xl', md: '6xl' }}
                        bgGradient={headingColor}
                        bgClip='text'>A few of my featured projects here</Heading>
                    <HStack>
                        <HStack>
                            <AiOutlineArrowRight />
                            <Text fontSize={{ base: 'md', md: 'lg' }}>Get the complete list at my</Text>
                        </HStack>
                        <Box pt={1}>
                            <Image src={githubIcon} alt='github icon' height='24px' width='24px' />
                        </Box>
                        <Link href='https://github.com/janhvipatil' passHref>
                            <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'blue.400', cursor: 'pointer' }}>Github</Text></a>
                        </Link>
                    </HStack>

                    <SimpleGrid
                        columns={1}
                        spacing={{ base: 12, md: 14 }}
                        py={{ base: 4, md: 8 }}
                        rounded='xl'>

                        <ProjectBox
                            image={project1}
                            heading='Fake Data Generator'
                            data='A meta-data driven no-code tool for developers which allows them 
                            to create dashboards, admin panels with ease. It helps you generate high 
                            quality dummy data and validate existing data.'
                            link='/projects/fake-data-generator'>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiSupabase} color='blue.300' />
                                <Text>Supabase</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiTypescript} color='blue.300' />
                                <Text>TypeScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={TbBrandVercel} color='blue.300' />
                                <Text>Vercel</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project2}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            link='/projects/fake-data-generator'>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiSupabase} color='blue.300' />
                                <Text>Supabase</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiTypescript} color='blue.300' />
                                <Text>TypeScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={TbBrandVercel} color='blue.300' />
                                <Text>Vercel</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project3}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            link='/projects/fake-data-generator'>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiSupabase} color='blue.300' />
                                <Text>Supabase</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiTypescript} color='blue.300' />
                                <Text>TypeScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={TbBrandVercel} color='blue.300' />
                                <Text>Vercel</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project4}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            link='/projects/fake-data-generator'>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiSupabase} color='blue.300' />
                                <Text>Supabase</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiTypescript} color='blue.300' />
                                <Text>TypeScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={TbBrandVercel} color='blue.300' />
                                <Text>Vercel</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project5}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            link='/projects/fake-data-generator'>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiSupabase} color='blue.300' />
                                <Text>Supabase</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiTypescript} color='blue.300' />
                                <Text>TypeScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={TbBrandVercel} color='blue.300' />
                                <Text>Vercel</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project6}
                            heading='lorem ipsum lorem ipsum'
                            data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                            link='/projects/fake-data-generator'>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiSupabase} color='blue.300' />
                                <Text>Supabase</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiTypescript} color='blue.300' />
                                <Text>TypeScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={TbBrandVercel} color='blue.300' />
                                <Text>Vercel</Text>
                            </HStack>
                        </ProjectBox>
                    </SimpleGrid>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Projects