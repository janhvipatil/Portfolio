import { Box, Heading, HStack, Stack, useColorModeValue, Text, SimpleGrid, Button, ButtonGroup, Icon } from '@chakra-ui/react'
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
    link: string
}

export const ProjectBox = ({ image, heading, data, children, link }: Props) => {

    const boxColorMD = useColorModeValue('white', 'linear(to-tr, gray.700, blackAlpha.700)')
    const boxColorBase = useColorModeValue('white', 'linear(to-b, gray.700, blackAlpha.700)')

    return (
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Link href={link} passHref>
                <Box
                    boxShadow='lg'
                    pr={{ base: 6, md: 4 }}
                    pl={{ base: 6, md: 4 }}
                    pt={{ base: 6, md: 4 }}
                    rounded='lg'
                    bgGradient={{ base: boxColorBase, md: boxColorMD }}
                    width='full'
                    _hover={{
                        transform: 'scale(1.01)',
                        transition: 'all ease-in-out .2s',
                        cursor: 'pointer'
                    }}>
                    <HStack spacing={10} display={{ base: 'none', md: 'flex' }}>
                        <Box>
                            <Image src={image}
                                alt='project cover image'
                                objectFit='cover' />
                        </Box>
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
                                    <Button colorScheme='blue' variant='outline' size='sm'>View Project</Button>
                                    <Button leftIcon={<BiLink />} shadow='base' colorScheme='gray' size='sm' variant='outline'>Github Repo</Button>
                                </ButtonGroup>
                            </Stack>
                        </Box>
                    </HStack>

                    <Stack display={{ base: 'block', md: 'none' }} w='full'>
                        <Box style={{ borderRadius: '5px', overflow: 'hidden' }} w='full'>
                            <Image src={image}
                                alt='dummy'
                                objectFit='cover' />
                        </Box>
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
                                    <Button size='xs' colorScheme='blue' variant='outline'>View Project</Button>
                                    <Button size='xs' leftIcon={<BiLink />} shadow='base' colorScheme='gray' variant='outline'>Github Repo</Button>
                                </ButtonGroup>
                            </Stack>
                        </Box>
                    </Stack>

                </Box>
            </Link>
        </motion.div>
    )
}