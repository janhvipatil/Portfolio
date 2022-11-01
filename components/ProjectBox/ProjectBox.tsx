import { Box, Heading, HStack, Stack, useColorModeValue, Text, SimpleGrid, Button, ButtonGroup, Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { BiLink } from 'react-icons/bi'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
    image: StaticImageData,
    heading: string,
    data: string,
    children: React.ReactNode,
    link: string,
    projectLink?: string,
    githubLink?: string
}

export const ProjectBox = ({ image, heading, data, children, link, projectLink, githubLink }: Props) => {

    const boxColorMD = useColorModeValue('white', 'linear(to-tr, gray.700, blackAlpha.700)')
    const boxColorBase = useColorModeValue('white', 'linear(to-b, gray.700, blackAlpha.700)')

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
            <Box
                boxShadow='lg'
                pr={{ base: 6, md: 4 }}
                pl={{ base: 6, md: 4 }}
                pt={{ base: 6, md: 4 }}
                pb={{ base: 6, md: 4 }}
                rounded='lg'
                bgGradient={{ base: boxColorBase, md: boxColorMD }}
                width='full'>
                <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                    <Link href={link} passHref>
                        <Box _hover={{
                            transform: 'scale(1.04)',
                            transition: 'all ease-in-out .2s',
                            cursor: 'pointer'
                        }}>
                            <Image src={image}
                                alt='project cover image'
                                objectFit='cover' />
                        </Box>
                    </Link>
                    <Box w='60%'>
                        <Stack spacing={6} pr='4'>
                            <Heading textAlign='left'>{heading}</Heading>
                            <Stack spacing={2}>
                                <Text textAlign='left' pb='2'>{data}</Text>
                                <SimpleGrid columns={2}>
                                    {children}
                                </SimpleGrid>
                            </Stack>
                            <ButtonGroup>
                                {projectLink &&
                                    <ChakraLink href={projectLink} isExternal _hover={{ textDecoration: "none" }}>
                                        <Button size='xs' colorScheme='blue' variant='outline'>View Project</Button>
                                    </ChakraLink>
                                }
                                {githubLink &&
                                    <ChakraLink href={githubLink} isExternal _hover={{ textDecoration: "none" }}>
                                        <Button size='xs' leftIcon={<BiLink />} shadow='base' colorScheme='gray' variant='outline'>Github Repo</Button>
                                    </ChakraLink>
                                }
                            </ButtonGroup>
                        </Stack>
                    </Box>
                </HStack>

                <Stack display={{ base: 'block', md: 'none' }} w='full'>
                    <Link href={link} passHref>
                        <Box style={{ borderRadius: '5px', overflow: 'hidden' }} w='full' _hover={{
                            transform: 'scale(1.04)',
                            transition: 'all ease-in-out .2s',
                            cursor: 'pointer'
                        }}>
                            <Image src={image}
                                alt='dummy'
                                objectFit='cover' />
                        </Box>
                    </Link>
                    <Box w='full'>
                        <Stack spacing={4} w='full'>
                            <Heading textAlign='left' fontSize='xl'>{heading}</Heading>
                            <Stack spacing={2}>
                                <Text textAlign='left' fontSize='sm'>{data}</Text>
                                <SimpleGrid columns={2}>
                                    {children}
                                </SimpleGrid>
                            </Stack>
                            <ButtonGroup>
                                {projectLink &&
                                    <ChakraLink href={projectLink} isExternal _hover={{ textDecoration: "none" }}>
                                        <Button size='xs' colorScheme='blue' variant='outline'>View Project</Button>
                                    </ChakraLink>
                                }
                                {githubLink &&
                                    <ChakraLink href={githubLink} isExternal _hover={{ textDecoration: "none" }}>
                                        <Button size='xs' leftIcon={<BiLink />} shadow='base' colorScheme='gray' variant='outline'>Github Repo</Button>
                                    </ChakraLink>
                                }
                            </ButtonGroup>

                        </Stack>
                    </Box>
                </Stack>

            </Box>
        </motion.div>
    )
}