import { Box, HStack } from '@chakra-ui/react'
import { MainContent } from '../LandingUI'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/anime.json'

export const Landing = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <>
            <HStack display={{ base: 'none', md: 'flex' }}>
                <MainContent />
                <Box>
                    <Lottie options={defaultOptions} height={800} width={400} />
                </Box>
            </HStack>
            <Box display={{ base: 'flex', md: 'none' }}>
                <MainContent />
            </Box>
        </>
    )
}