import { Center, Grid, GridItem } from "@chakra-ui/react"
import { Footer } from "../Footer"
import { MainContent } from "../LandingUI"
import { Navbar } from "../Navbar"
import { Sidebar } from "../Sidebar"
import hero from '../../assets/hero.png'
import Image from 'next/image'

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Grid templateColumns='repeat(10, 1fr)' gap={6}>
                <GridItem colSpan={1}>
                    <Sidebar />
                </GridItem>
                <GridItem colSpan={5}>
                    <MainContent />
                </GridItem>
                <GridItem colSpan={4} pt={20} pr={4}>
                    <Image src={hero} alt="hero image" />
                </GridItem>
            </Grid>
            <Footer />
        </>
    )
}