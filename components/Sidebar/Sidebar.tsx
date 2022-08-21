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
            <Stack spacing={2}>
                <IconButton aria-label='Instagram' icon={<AiFillInstagram fontSize="1.25rem" />} />
                <IconButton aria-label='Linkedin' icon={<AiFillLinkedin fontSize="1.25rem" />} />
                <IconButton aria-label='Twitter' icon={<AiOutlineTwitter fontSize="1.25rem" />} />
                <IconButton aria-label='Github' icon={<AiFillGithub fontSize="1.25rem" />} />
            </Stack>
        </ButtonGroup>
    )
}