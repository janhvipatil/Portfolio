import { Box, Grid, GridItem } from "@chakra-ui/react"
import { Footer } from "../Footer"
import { MainContent } from "../LandingUI"
import { Navbar } from "../Navbar"
import { Sidebar } from "../Sidebar"

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Grid templateColumns='repeat(8, 1fr)' gap={6}>
                <GridItem colSpan={1}>
                    <Sidebar />
                </GridItem>
                <GridItem colSpan={4}>
                    <MainContent />
                </GridItem>
            </Grid>
            <Footer />
        </>
    )
}