import { Button, Heading, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {}

export const MainContent = (props: Props) => {

    const [isMobile] = useMediaQuery("(max-width: 768px)")

    return (
        <Stack px='12%' justify={'center'} w='full' height={isMobile ? '90vh' : '100vh'}>
            <Stack spacing={{ base: 4, md: 10 }} maxW='3xl'>
                <Stack spacing={2}>
                    <Text fontSize={isMobile ? 'lg' : 'xl'}>Hi <span>👋</span>, I am</Text>
                    <Heading fontSize={isMobile ? '6xl' : '8xl'}>Janhvi Patil</Heading>
                    <Heading as='h3' color='gray.600' fontSize={isMobile ? '4xl' : '6xl'}>I build things for the web</Heading>
                </Stack>
                <Text as='p' fontSize={isMobile ? 'md' : 'lg'} color='gray.500'>At vero eos et accusamus et iusto odio dignissimos
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