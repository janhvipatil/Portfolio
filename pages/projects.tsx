import { Box, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {

    const boxColor = useColorModeValue('white', 'gray.700')
    return (
        <Flex width='full' pl={40} pt={32} pr={28} pb={12}>
            <SimpleGrid
                columns={{ base: 1, md: 4 }}
                spacing='8'
                p='10'
                textAlign='center'
                rounded='lg'>
                <Box boxShadow='lg' p='6' rounded='md' bg={boxColor} width='full'>
                    lg
                </Box>
                <Box boxShadow='lg' p='6' rounded='md' bg={boxColor} width='full'>
                    lg
                </Box>
                <Box boxShadow='lg' p='6' rounded='md' bg={boxColor} width='full'>
                    lg
                </Box>
                <Box boxShadow='lg' p='6' rounded='md' bg={boxColor} width='full'>
                    lg
                </Box>
            </SimpleGrid>
        </Flex>
    )
}

export default Projects