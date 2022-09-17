import { Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import dummyImage from '../assets/projects/dummyImage.jpg'
import { Footer } from '../components/Footer'
import { ProjectBox } from '../components/ProjectBox/ProjectBox'

type Props = {}

const Projects = (props: Props) => {

    return (
        <>
            <Flex width='full' pl={{ base: 2, md: 40 }} pt={{ base: 24, md: 32 }} pr={{ base: 2, md: 24 }} pb={12}>
                <SimpleGrid
                    columns={1}
                    spacing='12'
                    py={{ base: 4, md: 8 }}
                    px={{ base: 8, md: 24 }}
                    rounded='xl'>

                    <ProjectBox
                        image={dummyImage}
                        heading='lorem ipsum lorem ipsum'
                        data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                        tech1='jdgfu oihefpw'
                        tech2='jdgfu oihefpw'
                        tech3='jdgfu oihefpw'
                        tech4='jdgfu oihefpw'
                    />

                    <ProjectBox
                        image={dummyImage}
                        heading='lorem ipsum lorem ipsum'
                        data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                        tech1='jdgfu oihefpw'
                        tech2='jdgfu oihefpw'
                        tech3='jdgfu oihefpw'
                        tech4='jdgfu oihefpw'
                    />

                    <ProjectBox
                        image={dummyImage}
                        heading='lorem ipsum lorem ipsum'
                        data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                        tech1='jdgfu oihefpw'
                        tech2='jdgfu oihefpw'
                        tech3='jdgfu oihefpw'
                        tech4='jdgfu oihefpw'
                    />

                    <ProjectBox
                        image={dummyImage}
                        heading='lorem ipsum lorem ipsum'
                        data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                        tech1='jdgfu oihefpw'
                        tech2='jdgfu oihefpw'
                        tech3='jdgfu oihefpw'
                        tech4='jdgfu oihefpw'
                    />

                    <ProjectBox
                        image={dummyImage}
                        heading='lorem ipsum lorem ipsum'
                        data='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words
                    which dont look even slightly believable'
                        tech1='jdgfu oihefpw'
                        tech2='jdgfu oihefpw'
                        tech3='jdgfu oihefpw'
                        tech4='jdgfu oihefpw'
                    />
                </SimpleGrid>
            </Flex>
            <Footer />
        </>
    )
}

export default Projects