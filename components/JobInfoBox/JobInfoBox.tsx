import { Box, Divider, Grid, GridItem, Heading, HStack, IconButton, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { BsDot } from 'react-icons/bs'
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'
import { MyAssetBuddyTechStack, NiceTechStack, TechStack } from '../TechStack/TechStack'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
    logo: StaticImageData,
    logoWidth: string,
    logoHeight: string,
    mt: string,
    dates: string,
    position: string,
    companyName: string,
    companylink: string,
    location: string,
    jobdetails: string,
    jobdetails2?: string
}

export const JobInfoBox = ({ logo, logoWidth, logoHeight, mt, dates, position, companyName, companylink, location, jobdetails, jobdetails2 }: Props) => {
    return (
        <Box>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem colSpan={1}>
                    <Stack mt={mt}>
                        <Box>
                            <Image src={logo} alt='company logo' width={logoWidth} height={logoHeight} />
                        </Box>
                        <HStack>
                            <IoCalendarOutline />
                            <Text fontSize='sm' color='blue.600'>{dates}</Text>
                        </HStack>
                    </Stack>
                </GridItem>
                <GridItem colSpan={4}>
                    <Stack spacing={8}>
                        <Stack spacing={6}>
                            <Stack>
                                <Heading>{position}</Heading>
                                <HStack spacing={4}>
                                    <HStack spacing={1}>
                                        <Text as='h3' fontSize='xl' fontWeight='semibold'>{companyName}</Text>
                                        <Link href={companylink}>
                                            <IconButton icon={<FiExternalLink />} aria-label='go to company website' size='xs' variant='ghost' />
                                        </Link>
                                    </HStack>
                                    <BsDot />
                                    <Text fontSize='lg' fontWeight='medium'>Fulltime</Text>
                                </HStack>
                                <HStack>
                                    <IoLocationOutline />
                                    <Text color='gray.500'>{location}</Text>
                                </HStack>
                            </Stack>
                            <Divider />
                            <Text>
                                {jobdetails}
                            </Text>
                            {jobdetails2 &&
                                <Text>
                                    {jobdetails2}
                                </Text>
                            }
                        </Stack>
                        {companyName === 'My Asset Buddy' ?
                            <MyAssetBuddyTechStack /> : <NiceTechStack />
                        }
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    )
}