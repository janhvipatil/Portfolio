import { Box, Stack, Text, Heading, HStack, Center, useColorModeValue, Link } from '@chakra-ui/react'
import React from 'react'
import { FiMail } from 'react-icons/fi'

type Props = {}

const Contact = (props: Props) => {

    const boxBG = useColorModeValue('white', 'gray.700')
    const mailBoxBG = useColorModeValue('gray.100', 'gray.600')
    const textColor = useColorModeValue('gray.600', 'gray.500')

    return (
        <Center w='full' h='92vh'>
            <Box textAlign={'center'}>
                <Stack spacing={6}>
                    <Heading as='h2' mb='0' fontSize='8xl'>Let&apos;s talk.</Heading>
                    <Text fontSize='lg' color={textColor}>Tell me about your project.<br />We can build something amazing together 🤘</Text>
                    <Box alignSelf={'center'} textAlign='left'>
                        <HStack spacing={4} boxShadow='md' p='4' rounded='md' bg={boxBG}>
                            <Center bg={mailBoxBG} rounded={'md'} boxSize='40px' fontSize={'xl'}>
                                <FiMail />
                            </Center>
                            <Stack spacing={0}>
                                <Text>Mail me at:</Text>
                                <Link href='mailto:janhvipatil@gmail.com' color='blue.500' fontWeight='medium'>janhvipatil@gmail.com</Link>
                            </Stack>
                        </HStack>
                    </Box>
                </Stack>
            </Box>
        </Center>
    )
}

export default Contact