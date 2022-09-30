import { Box, Heading, HStack, Stack, useColorModeValue, Text, SimpleGrid, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { GiAcorn } from 'react-icons/gi'
import { BiLink } from 'react-icons/bi'
import { motion } from 'framer-motion'

interface Props {
    image: StaticImageData,
    heading: string,
    data: string,
    tech1: string,
    tech2: string,
    tech3: string,
    tech4: string,
}

export const ProjectBox = ({ image, heading, data, tech1, tech2, tech3, tech4 }: Props) => {

    const boxColorMD = useColorModeValue('white', 'linear(to-tr, gray.700, blackAlpha.700)')
    const boxColorBase = useColorModeValue('white', 'linear(to-b, gray.700, blackAlpha.700)')

    return (
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Box
                boxShadow='lg' p={{ base: 6, md: 10 }}
                rounded='lg'
                bgGradient={{ base: boxColorBase, md: boxColorMD }}
                width='full'
                _hover={{
                    transform: 'scale(1.05)',
                    transition: 'all ease-in-out .2s',
                    cursor: 'pointer'
                }}>
                <HStack spacing={10} display={{ base: 'none', md: 'flex' }}>
                    <Box style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <Image src={image}
                            alt='project cover image'
                            height='500px'
                            width='700px' />
                    </Box>
                    <Box w='60%'>
                        <Stack spacing={4}>
                            <Heading textAlign='left'>{heading}</Heading>
                            <Stack spacing={2}>
                                <Text textAlign='left'>{data}</Text>
                                <SimpleGrid columns={2}>
                                    <HStack>
                                        <GiAcorn />
                                        <Text>{tech1}</Text>
                                    </HStack>
                                    <HStack>
                                        <GiAcorn />
                                        <Text>{tech2}</Text>
                                    </HStack>
                                    <HStack>
                                        <GiAcorn />
                                        <Text>{tech3}</Text>
                                    </HStack>
                                    <HStack>
                                        <GiAcorn />
                                        <Text>{tech4}</Text>
                                    </HStack>
                                </SimpleGrid>
                            </Stack>
                            <ButtonGroup>
                                <Button colorScheme='blue' variant='outline'>View Project</Button>
                                <Button leftIcon={<BiLink />} shadow='base' colorScheme='gray' variant='outline'>Github Repo</Button>
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
                                    <HStack>
                                        <GiAcorn />
                                        <Text fontSize='sm'>{tech1}</Text>
                                    </HStack>
                                    <HStack>
                                        <GiAcorn />
                                        <Text fontSize='sm'>{tech2}</Text>
                                    </HStack>
                                    <HStack>
                                        <GiAcorn />
                                        <Text fontSize='sm'>{tech3}</Text>
                                    </HStack>
                                    <HStack>
                                        <GiAcorn />
                                        <Text fontSize='sm'>{tech4}</Text>
                                    </HStack>
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
        </motion.div>
    )
}