import { Box, Container, Input, SimpleGrid, Stack, Textarea, Text, Button, Heading, HStack, IconButton, Flex, Center, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiMail } from 'react-icons/fi'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

type Props = {}

const Contact = (props: Props) => {

    let [value, setValue] = useState('')

    let handleInputChange = (e: any) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    const boxBG = useColorModeValue("white", "gray.700")

    return (
        <>
            <Navbar />
            <Center p={20} h='78vh'>
                <SimpleGrid columns={2} spacing={10}>
                    <Box p={10} ml={20} mt={10}>
                        <Stack spacing={6}>
                            <Stack>
                                <Heading as='h2' fontSize='6xl'>Lets talk.</Heading>
                                <Heading as='h2' fontSize='6xl'>Tell me about your project</Heading>
                            </Stack>
                            <Text fontSize='lg' color='blue.700'>We can build something amazing together 🤘</Text>
                            <Box boxShadow='base' p='4' rounded='md' bg={boxBG} width='80%'>
                                <HStack spacing={4}>
                                    <IconButton aria-label='Search database' icon={<FiMail />}></IconButton>
                                    <Stack spacing={0}>
                                        <Text>Mail me at:</Text>
                                        <Text color='blue.500'>janhvipatil@gmail.com</Text>
                                    </Stack>
                                </HStack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box p={10}>
                        <Box boxShadow='md' p='8' rounded='lg' bg={boxBG} width='85%'>
                            <Stack spacing={6}>
                                <HStack spacing={3}>
                                    <Heading as='h3'>Send me a message</Heading>
                                    <Text fontSize='3xl'>🚀</Text>
                                </HStack>
                                <Stack spacing={4}>
                                    <Input placeholder="Full name" />
                                    <Input placeholder="Email address" />
                                    <Input placeholder="Subject" />
                                    <Text fontSize='sm' fontWeight='semibold'>
                                        Get in touch with me, tell me how I can be of help to you
                                    </Text>
                                    <Textarea
                                        value={value}
                                        onChange={handleInputChange}
                                        size='lg'
                                        rounded='lg'
                                    />
                                    <Button
                                        boxShadow='lg'
                                        width='fit-content'
                                        colorScheme='blue'>
                                        Send message
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Center>
            <Footer />
        </>
    )
}

export default Contact