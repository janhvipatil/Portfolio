import { Box, Flex, Heading, Stack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import nicelogo from '../../assets/company logos/nice-logo.png'
import myassetbuddylogo from '../../assets/company logos/myassetbuddy-logo.png'
import medbuyerlogo from '../../assets/company logos/medbuyer-logo.png'
import linkedInIcon from '../../assets/company logos/linkedin.png'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { JobInfoBox } from '../JobInfoBox/JobInfoBox'

export const Work = () => {

    const headingColor = 'linear(to-r, blue.200, pink.200)'

    return (
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
                    <HStack>
                        <AiOutlineArrowRight />
                        <Text>Visit my </Text>
                        <Box pt={1}>
                            <Image src={linkedInIcon} alt='linkedin icon' height='24px' width='24px' />
                        </Box>
                        <Link href='https://www.linkedin.com/in/janhvipatil/' passHref>
                            <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'blue.400', cursor: 'pointer' }}>LinkedIn</Text></a>
                        </Link>
                        <Text> for more info</Text>
                    </HStack>
                </Stack>

                <Stack spacing={{ base: 16, md: 28 }}>

                    <JobInfoBox
                        logo={myassetbuddylogo}
                        logoWidth='150px'
                        logoHeight='55px'
                        mt='1'
                        dates='Feb 2022 - Mar 2023'
                        position='Software Development Consultant'
                        companyName='My Asset Buddy'
                        companylink='https://www.myassetbuddy.in/about'
                        location='On-site Hyderabad, India'
                        jobdetails='At My Asset Buddy, a SaaS startup for managing industrial asset data, I was one of the first three employees, involved in every stage of the product, from requirements gathering to implementation. I worked on frontend, backend, DevOps, and design; I helped develop features, wrote APIs, conducted peer code reviews, and reported sprint deliverables, I also built the company website.'
                        jobdetails2='I was also responsible for mentoring our software development intern, which helped me grow as a developer and gain some management skills.'
                    />

                    <JobInfoBox
                        logo={medbuyerlogo}
                        logoWidth='160px'
                        logoHeight='32px'
                        mt='2'
                        dates='Nov 2021 - Feb 2022'
                        position='Software Development Consultant'
                        companyName='MedBuyer'
                        companylink='https://medbuyer.in/About'
                        location='Remote Pune, India'
                        jobdetails='At MedBuyer, a medical equipment marketplace for hospitals, I worked as a software developer. My responsibilities included developing new features, improving existing software, leading daily standups, helping plan monthly sprints, and creating reports for the business team. I collaborated with the testing and support teams on UI/UX improvements and performance issues.'
                        jobdetails2='A key achievement was enhancing the UX by adding empty states, help buttons, and Google Sign-In for easier user access.'
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
                        location='Remote Pune, India'
                        jobdetails='I worked in the CLOUD department for Satmetrix, administering JBoss and HTTP Apache servers, deploying software releases, and managing environments (staging, production) as well as Globalscape FTP, DNS, Mail, and MySQL servers. I handled server provisioning, troubleshooting, and root cause analysis, while also assisting clients with AWS services like SES. Additionally, I resolved support tickets and collaborated across departments.'
                        jobdetails2='I received the SPOT award for my dedication and teamwork, and my team won the best cloud department team award for three consecutive quarters.'
                    />
                </Stack>
            </Stack>
        </Flex>
    )
}