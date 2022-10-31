import { Box, Divider, Grid, GridItem, Heading, HStack, IconButton, Stack, Text, Link } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { BsDot } from 'react-icons/bs'
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'
import { MedBuyerTechStack, MyAssetBuddyTechStack, NiceTechStack } from '../TechStack/TechStack'
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
        <>
            <Box display={{ base: 'none', md: 'flex' }} p={'8'}>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colSpan={1}>
                        <Stack mt={mt}>
                            <Box>
                                <Image src={logo} alt='company logo' width={logoWidth} height={logoHeight} />
                            </Box>
                            <HStack>
                                <IoCalendarOutline />
                                <Text fontSize='sm' color='blue.400'>{dates}</Text>
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
                                            <Link isExternal href={companylink}>
                                                <HStack>
                                                    <Text as='h3' fontSize='xl' fontWeight='semibold'>{companyName}</Text>
                                                    <IconButton icon={<FiExternalLink />} aria-label='go to company website' size='xs' variant='ghost' />
                                                </HStack>
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
                                <MyAssetBuddyTechStack /> : null
                            }
                            {companyName === 'MedBuyer' ?
                                <MedBuyerTechStack /> : null
                            }
                            {companyName === 'NICE Interactive Solutions India' ?
                                <NiceTechStack /> : null
                            }
                        </Stack>
                    </GridItem>
                </Grid>
            </Box>

            <Box display={{ base: 'flex', md: 'none' }}>
                <Stack spacing={4}>
                    <Stack>
                        <Box py={2}>
                            <Image src={logo} alt='company logo' width={logoWidth} height={logoHeight} />
                        </Box>
                        <HStack>
                            <IoCalendarOutline />
                            <Text fontSize='sm' color='blue.600'>{dates}</Text>
                        </HStack>
                        <Heading fontSize='2xl'>{position}</Heading>
                        <HStack spacing={2}>
                            <HStack spacing={1}>
                                <Link isExternal href={companylink}>
                                    <HStack>
                                        <Text as='h3' fontSize='lg' fontWeight='semibold'>{companyName}</Text>
                                        <IconButton icon={<FiExternalLink />} aria-label='go to company website' size='xs' variant='ghost' />
                                    </HStack>
                                </Link>
                            </HStack>
                            <BsDot />
                            <Text fontSize='md' fontWeight='medium'>Fulltime</Text>
                        </HStack>
                        <HStack>
                            <IoLocationOutline />
                            <Text color='gray.500' fontSize='sm'>{location}</Text>
                        </HStack>
                    </Stack>
                    <Divider />
                    <Stack spacing={6}>
                        <Stack>
                            <Text>
                                {jobdetails}
                            </Text>
                            {jobdetails2 &&
                                <Text>
                                    {jobdetails2}
                                </Text>
                            }
                        </Stack>
                        <Box>
                            {companyName === 'My Asset Buddy' ?
                                <MyAssetBuddyTechStack /> : <NiceTechStack />
                            }
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}