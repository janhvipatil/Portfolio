import { Box, Flex } from '@chakra-ui/react'
import { Footer } from '../Footer'
import { Contact } from '../Contact/Contact'
import { Work } from '../Work/Work'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'

export const Landing = () => {
    return (
        <Flex direction='column'>
            <Box id="about"><About /></Box>
            <Box id="projects"><Projects /></Box>
            <Box id="work"><Work /></Box>
            <Box id="contact"><Contact /></Box>
            <Footer />
        </Flex>
    )
}