import { ButtonGroup, IconButton, Stack } from '@chakra-ui/react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter, } from "react-icons/ai";

type Props = {}

export const Sidebar = (props: Props) => {
    return (
        <ButtonGroup
            size='md'
            fontSize='lg'
            variant='ghost'
            ml={10}>
            <Stack spacing={6} mt={80}>
                <IconButton aria-label='Instagram' icon={<AiFillInstagram fontSize="1.5rem" />} />
                <IconButton aria-label='Linkedin' icon={<AiFillLinkedin fontSize="1.5rem" />} />
                <IconButton aria-label='Twitter' icon={<AiOutlineTwitter fontSize="1.5rem" />} />
                <IconButton aria-label='Github' icon={<AiFillGithub fontSize="1.5rem" />} />
            </Stack>
        </ButtonGroup>
    )
}