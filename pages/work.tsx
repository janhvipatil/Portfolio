import { Box, Flex, Heading, Stack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import nicelogo from '../assets/company logos/nice-logo.png'
import myassetbuddylogo from '../assets/company logos/myassetbuddy-logo.png'
import medbuyerlogo from '../assets/company logos/medbuyer-logo.png'
import { JobInfoBox } from '../components/JobInfoBox/JobInfoBox'
import linkedInIcon from '../assets/company logos/linkedin.png'
import { Footer } from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {}

const Work = (props: Props) => {

    const headingColor = 'linear(to-r, blue.200, pink.200)'

    return (
        <>
            <Flex w='full'
                pl={{ base: 10, md: 56 }}
                pt={{ base: 28, md: 44 }}
                pr={{ base: 10, md: 52 }}
                pb={{ base: 12, md: 24 }}>

                <Stack spacing={{ base: 0, md: 9 }}>
                    <Stack spacing={4}>
                        <Heading fontSize={{ base: '4xl', md: '6xl' }}
                            bgGradient={headingColor}
                            bgClip='text'>My professional journey so far</Heading>
                        <HStack display={{ base: 'none', md: 'flex' }}>
                            <AiOutlineArrowRight />
                            <Text>Visit my </Text>
                            <Box pt={1}>
                                <Image src={linkedInIcon} alt='linkedin icon' height='24px' width='24px' />
                            </Box>
                            <Link href='https://www.linkedin.com/in/janhvipatil/' passHref>
                                <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'blue.400', cursor: 'pointer' }}>LinkedIn</Text></a>
                            </Link>
                            <Text>profile for more info</Text>
                        </HStack>
                    </Stack>

                    <Stack spacing={{ base: 16, md: 28 }}>

                        <JobInfoBox
                            logo={myassetbuddylogo}
                            logoWidth='150px'
                            logoHeight='55px'
                            mt='1'
                            dates='Feb 2022 - Current'
                            position='Product Manager and Software Developer'
                            companyName='My Asset Buddy'
                            companylink='https://www.myassetbuddy.in/about'
                            location='Hyderabad, India'
                            jobdetails='My Asset Buddy is a SaaS startup that helps enterprises create and manage industrial asset data.
                            Being one of the first 3 employees, I was lucky enough to be a part of every phase of the product from requirement 
                            gathering and design to implementation.
                            Here I got the opportunity to work in frontend, backend, devOps, design and much more. I designed and created the 
                            company webiste, set up SEO, sitemap and hosting.
                            My responsibilities on the product side included planning sprints, leading projects, designing and creating features, writing APIs, 
                            code reviews, testing, moderating daily stand-up calls and creating deliverable reports for each sprint.'
                            jobdetails2='I was also responsible for mentoring and supervising our software development intern. This job not only helped
                            me grow as a developer but I also learned essential skills necessary for a manager working in tech.'
                        />

                        <JobInfoBox
                            logo={medbuyerlogo}
                            logoWidth='160px'
                            logoHeight='35px'
                            mt='2'
                            dates='Nov 2021 - Feb 2022'
                            position='Software Developer'
                            companyName='MedBuyer'
                            companylink='https://medbuyer.in/About'
                            location='Pune, India'
                            jobdetails='MedBuyer is a medical equipment marketplace for hospitals. It is a startup venture founded by a group of
                            medical consultants who wanted to digitise and scale up their operations. Here I worked as a software developer and
                            scrum master. My responsibilities included creating and shipping new features, adding improvements to the existing software,
                            moderating daily standup meetings, planning our monthly sprints and creating deliverable reports for our business team.
                            I closely worked with our testing and support team on technical issues including software system design, maintenance and performance.'
                            jobdetails2='One of my key achievements at MedBuyer would be my inputs/work on improving our UX by adding empty states wherever necessary,
                            help buttons with information on how to use a feature and adding Sign-In with Google for ease of entry for the users.'
                        />

                        <JobInfoBox
                            logo={nicelogo}
                            logoWidth='110px'
                            logoHeight='35px'
                            mt='3'
                            dates='Aug 2020 - Dec 2021'
                            position='Associate Application Operations Engineer'
                            companyName='NICE Interactive Solutions India'
                            companylink='https://www.nice.com/company/about-us'
                            location='Pune, India'
                            jobdetails='I worked in the CLOUD department for Satmetrix 
                            (enterprise product that NICE licenses). My job entailed 
                            administering the JBoss and HTTP Apache servers, deploying new releases/hotfixes
                            of our software to both staging and production environments, provisioning/ de-provisioning
                            servers for our clients, managing Globalscape FTP, DNS, Mail and MySQL servers of Satmetrix&apos;s environments,
                            troubleshooting server performance issues and creating root cause analysis reports. I also helped solve tickets raised
                            by our support team and took up customer tickets wherein I helped our clients setup AWS services like SES for their organisation.'
                            jobdetails2='I was awarded the SPOT award in recognition for my dedication, positive attitude and co-ordination among teams from 
                            different departments. My team also won the best team in the cloud department award for three quarters in a row.'
                        />
                    </Stack>
                </Stack>
            </Flex>

            <Footer />
        </>
    )
}

export default Work