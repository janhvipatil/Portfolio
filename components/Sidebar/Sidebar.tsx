import { Box, ButtonGroup, IconButton, Link, Stack } from '@chakra-ui/react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { useMediaQuery } from "@chakra-ui/react"

type Props = {}

export const Sidebar = (props: Props) => {

    const [isMobile] = useMediaQuery("(max-width: 768px)")

    if (!isMobile) {
        return (
            <Stack
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
                        <Link isExternal href='https://www.instagram.com/janhvi.patill/'>
                            <IconButton aria-label='Instagram' icon={<AiFillInstagram fontSize="1.5rem" />} />
                        </Link>
                        <Link isExternal href='https://www.linkedin.com/in/janhvipatil/'>
                            <IconButton aria-label='Linkedin' icon={<AiFillLinkedin fontSize="1.5rem" />} />
                        </Link>
                        <Link isExternal href='https://twitter.com/janhvipatil_'>
                            <IconButton aria-label='Twitter' icon={<AiOutlineTwitter fontSize="1.5rem" />} />
                        </Link>
                        <Link isExternal href='https://github.com/janhvipatil'>
                            <IconButton aria-label='Github' icon={<AiFillGithub fontSize="1.5rem" />} />
                        </Link>
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
    } else return <></>
}