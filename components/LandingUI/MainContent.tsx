import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'

type Props = {}

export const MainContent = (props: Props) => {
    return (
        <Box h='68vh' mt={20}>
            <Stack spacing={10}>
                <Stack spacing={2}>
                    <Text fontSize='xl'>Hi <span>👋</span>, I am</Text>
                    <Heading fontSize='8xl'>Janhvi Patil</Heading>
                    <Heading as='h3' color='gray.600' fontSize='6xl'>I build things for the web</Heading>
                </Stack>
                <Text as='p' fontSize='lg' color='gray.500'>At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. </Text>
                <Button
                    colorScheme='blue'
                    variant='outline'
                    width='fit-content'>
                    Get in touch
                </Button>
            </Stack>
        </Box>
    )
}