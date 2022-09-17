import { Box, Heading, HStack, Stack, useColorModeValue, Text, SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { GiAcorn } from 'react-icons/gi'

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

    const boxColor = useColorModeValue('white', 'gray.700')

    return (
        <Box boxShadow='lg' p={{ base: 6, md: 10 }} rounded='lg' bg={boxColor} width='full'>
            <HStack spacing={10} display={{ base: 'none', md: 'flex' }}>
                <Box style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <Image src={image}
                        alt='dummy'
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
                        <HStack spacing={4}>
                            <Button>View Project</Button>
                            <Button>Github Repo</Button>
                        </HStack>
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
                        <HStack spacing={4}>
                            <Button size='xs'>View Project</Button>
                            <Button size='xs'>Github Repo</Button>
                        </HStack>
                    </Stack>
                </Box>
            </Stack>

        </Box>
    )
}