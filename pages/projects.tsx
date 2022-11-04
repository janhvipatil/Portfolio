import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import project1 from '../assets/projects/crux-preview.png'
import project2 from '../assets/projects/tec-preview.png'
import project3 from '../assets/projects/artists-preview.png'
import project4 from '../assets/projects/company-preview.png'
import project5 from '../assets/projects/portfolio-preview.png'
import project6 from '../assets/projects/crux-blog-preview.png'
import project7 from '../assets/projects/mem-game-preview.png'
import { Footer } from '../components/Footer'
import { ProjectBox } from '../components/ProjectBox/ProjectBox'
import githubIcon from '../assets/projects/github.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillHtml5, AiOutlineArrowRight } from 'react-icons/ai'
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb'
import { SiChakraui, SiCss3, SiJavascript, SiMaterialui, SiPython, SiSupabase, SiTypescript } from 'react-icons/si'
import { FaBootstrap, FaReact } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { RiFacebookBoxLine } from 'react-icons/ri'

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
                            to create dashboards/admin panels with ease. It helps you generate high 
                            quality dummy data and validate existing data.'
                            link='/projects/fake-data-generator'
                            projectLink='https://crux-supabase-admin.vercel.app/'
                            githubLink='https://github.com/nikkothari22/crux'>
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
                            heading='TEC Mapping'
                            data='The project involves mapping the electron
                            content in the ionosphere over the South Asian region 
                            in near-real time by using TEC data from fixed IGS stations 
                            in India, Thailand, and Malaysia.'
                            link='/projects/tec-mapping'>
                            <HStack>
                                <Icon as={SiPython} color='blue.300' />
                                <Text>Python</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiJavascript} color='blue.300' />
                                <Text>JavaScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaReact} color='blue.300' />
                                <Text>React</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiMaterialui} color='blue.300' />
                                <Text>Material UI</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project3}
                            heading='Musician Booking App'
                            data='UX case study for an artist booking app that allows
                            users to search and filter artists in their area based on genre,
                            language, rating and more. Users can be assured of their bookings by calling/ messaging 
                            the band and signing an agreement.'
                            link='/projects/artist-booking-app'
                            projectLink='https://www.figma.com/community/file/1168219277592520636'>
                            <HStack>
                                <Icon as={FiFigma} fontSize='1.2em' color='blue.300' />
                                <Text>Figma</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project4}
                            heading='My Asset Buddy Website'
                            data='My Asset Buddy is a SaaS product for enterprises to create
                            and manage industrial asset data. Here, I worked on creating a website for them
                            so that their clients can easily go through their services.'
                            link='/projects/company-website'
                            projectLink='https://www.myassetbuddy.in/'>
                            <HStack>
                                <Icon as={RiFacebookBoxLine} color='blue.300' />
                                <Text>Frappe</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaBootstrap} color='blue.300' />
                                <Text>Bootstrap</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiCss3} color='blue.300' />
                                <Text>CSS</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project5}
                            heading='Portfolio Website'
                            data='This is a just for fun passion project that I have created
                            for collating my recent projects and helping my future employers/
                            prospective clients know more about me.'
                            link='/projects/portfolio-website'
                            projectLink='https://www.janhvipatil.me/'
                            githubLink='https://github.com/janhvipatil/Portfolio'>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiChakraui} color='blue.300' />
                                <Text>Chakra UI</Text>
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
                            heading='Blog Starter Template'
                            data='I have used Sanity IO headless CMS, NextJS and Chakra UI to 
                            create a blog template that can be used to easily jumpstart any project that needs
                            a website with a blog.'
                            link='/projects/blog-using-nextjs-sanityio'
                            projectLink='https://crux-blog.vercel.app/'
                            githubLink='https://github.com/janhvipatil/Crux-Blog-Frontend'>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiChakraui} color='blue.300' />
                                <Text>Chakra UI</Text>
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
                            image={project7}
                            heading='Memory Game using JS'
                            data='The game has a grid of cards,
                            that can be flipped over and matched. 
                            If a match is found, the cards stay flipped,
                            if not, they will turn back. 
                            The game continues until all cards are matched.'
                            link='/projects/memory-game'
                            projectLink='https://memory-game-jp.vercel.app/'
                            githubLink='https://github.com/janhvipatil/Memory-Game'>
                            <HStack>
                                <Icon as={SiJavascript} color='blue.300' />
                                <Text>JavaScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={AiFillHtml5} fontSize='1.2em' color='blue.300' />
                                <Text>HTML</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiCss3} color='blue.300' />
                                <Text>CSS</Text>
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