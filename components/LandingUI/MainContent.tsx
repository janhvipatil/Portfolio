import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {}

export const MainContent = (props: Props) => {
    return (
        <Stack px='12%' justify={'center'} w='full' height='100vh'>
            <Stack spacing={10} maxW='3xl'>
                <Stack spacing={2}>
                    <Text fontSize='xl'>Hi <span>👋</span>, I am</Text>
                    <Heading fontSize='8xl'>Janhvi Patil</Heading>
                    <Heading as='h3' color='gray.600' fontSize='6xl'>I build things for the web</Heading>
                </Stack>
                <Text as='p' fontSize='lg' color='gray.500'>At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident.</Text>
                <Button
                    colorScheme='blue'
                    variant='outline'
                    width='fit-content'>
                    <Link href={'/contact'}>
                        Get in touch
                    </Link>
                </Button>
            </Stack>
        </Stack>
    )
}