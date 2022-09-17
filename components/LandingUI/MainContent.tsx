import { Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'

type Props = {}

export const MainContent = (props: Props) => {

    return (
        <Stack px='12%' justify={'center'} w='full' height={{ base: '90vh', md: '100vh' }}>
            <Stack spacing={{ base: 4, md: 10 }} maxW='3xl'>
                <Stack spacing={2}>
                    <Text fontSize={{ base: 'lg', md: 'xl' }}>Hi <span>👋</span>, I am</Text>
                    <Heading fontSize={{ base: '6xl', md: '8xl' }}>Janhvi Patil</Heading>
                    <Heading as='h3' color='gray.600' fontSize={{ base: '4xl', md: '6xl' }}>I build things for the web</Heading>
                </Stack>
                <Text as='p' fontSize={{ base: 'md', md: 'lg' }} color='gray.500'>At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident.</Text>
                <Button
                    colorScheme='blue'
                    variant='outline'
                    width='fit-content'>
                    <Link href='/contact'>
                        <HStack>
                            <Text>Get in touch</Text>
                            <FaTelegramPlane />
                        </HStack>
                    </Link>
                </Button>
            </Stack>
        </Stack>
    )
}