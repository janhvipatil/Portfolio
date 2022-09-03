import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
    return (
        <Flex width='full' pl={40} pt={32} pr={28} pb={12}>
            <Grid
                h='1000px'
                width='full'
                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}>

                <GridItem
                    colSpan={4}
                    rowSpan={2}
                    bg='blue.100'
                    rounded='xl'
                    boxShadow='md'>
                </GridItem>

                <GridItem
                    rowSpan={4}
                    colSpan={1}
                    bg='pink.100'
                    rounded='xl'
                    boxShadow='md'>
                </GridItem>

                <GridItem
                    colSpan={2}
                    bg='papayawhip'
                    rounded='xl'
                    boxShadow='md'>
                </GridItem>

                <GridItem
                    colSpan={2}
                    bg='papayawhip'
                    rounded='xl'
                    boxShadow='md'>
                </GridItem>

                <GridItem
                    colSpan={2}
                    bg='papayawhip'
                    rounded='xl'
                    boxShadow='md'>
                </GridItem>

                <GridItem
                    colSpan={2}
                    bg='papayawhip'
                    rounded='xl'
                    boxShadow='md'>
                </GridItem>
            </Grid>
        </Flex>
    )
}

export default Projects