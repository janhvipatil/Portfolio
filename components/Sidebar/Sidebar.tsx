import { Box, ButtonGroup, IconButton, Link, Stack } from '@chakra-ui/react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

type Props = {}

export const Sidebar = (props: Props) => {

    return (
        <Stack
            display={{ base: 'none', md: 'flex' }}
            pos='fixed'
            h='100vh'
            justify='center'
            align='center'
            spacing='8'
            left='10'>
            <ButtonGroup
                size='md'
                fontSize='lg'
                left='0'
                pos='absolute'
                variant='ghost'>
                <Stack spacing={6}>
                    <IconButton aria-label='Instagram' icon={<AiFillInstagram fontSize="1.5rem" />} as={Link} isExternal href='https://www.instagram.com/janhvi.patill/' />
                    <IconButton aria-label='Linkedin' icon={<AiFillLinkedin fontSize="1.5rem" />} as={Link} isExternal href='https://www.linkedin.com/in/janhvipatil/' />
                    <IconButton aria-label='Twitter' icon={<AiOutlineTwitter fontSize="1.5rem" />} as={Link} isExternal href='https://twitter.com/janhvipatil_' />
                    <IconButton aria-label='Github' icon={<AiFillGithub fontSize="1.5rem" />} as={Link} isExternal href='https://github.com/janhvipatil' />
                </Stack>
            </ButtonGroup>
            <Box
                height='150px'
                pos='relative'
                top='25%'
                left='5'
                bg='gray.300'
                w='1px'>
            </Box>
        </Stack>
    )
}