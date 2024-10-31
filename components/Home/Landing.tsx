import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Footer } from '../Footer'
import { Contact } from '../Contact/Contact'
import { Work } from '../Work/Work'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'

export const Landing = () => {
    const dotColor = useColorModeValue('rgba(0, 0, 0, 0.12)', 'rgba(255, 255, 255, 0.1)')
    return (
        <Flex direction='column'
            bgImage={`radial-gradient(circle, ${dotColor} 1px, transparent 1px)`}
            bgSize="25px 25px">
            <Box id="about"><About /></Box>
            <Box id="projects"><Projects /></Box>
            <Box id="work"><Work /></Box>
            <Box id="contact"><Contact /></Box>
            <Footer />
        </Flex>
    )
}