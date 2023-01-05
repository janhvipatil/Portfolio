import { Avatar, Box, Button, Divider, Flex, Heading, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { CoverImage } from '../../components/CoverImage/CoverImage'
import project1 from '../../assets/projects/crux-cover.png'
import Link from 'next/link'
import { AiOutlineArrowRight, AiOutlineCalendar } from 'react-icons/ai'
import { Footer } from '../../components/Footer'
import Image from 'next/image'
import avatar from '../../assets/about/avatar.png'
import emptyHomePage from '../../assets/projects/project1/empty-home-page.png'
import creatingDoctype from '../../assets/projects/project1/creating-doctype.png'
import cannotGenerate from '../../assets/projects/project1/cannot-generate.png'
import addFields1 from '../../assets/projects/project1/add-fields-1.png'
import homeScreen from '../../assets/projects/project1/home-screen.png'
import editingDoctype from '../../assets/projects/project1/editing-doctype.png'
import addFields from '../../assets/projects/project1/add-fields.png'
import allFieldsData from '../../assets/projects/project1/all-fields-data.png'
import generateDataPage from '../../assets/projects/project1/generate-data-page.png'
import generatedData1 from '../../assets/projects/project1/generated-data-1.png'
import generatedData2 from '../../assets/projects/project1/generated-data-2.png'
import jsonData from '../../assets/projects/project1/JSON-format-generated-data.png'
import loginScreenDark from '../../assets/projects/project1/login-screen-dark.png'
import loginScreenLight from '../../assets/projects/project1/login-screen-light.png'
import loginSettings1 from '../../assets/projects/project1/login-settings-1.png'
import loginSettings2 from '../../assets/projects/project1/login-settings-2.png'
import loginSettings3 from '../../assets/projects/project1/login-settings-3.png'
import employeeDataExample1 from '../../assets/projects/project1/employee-data-example-1.png'
import employeeDataExample2 from '../../assets/projects/project1/employee-data-example-2.png'

type Props = {}

interface DetailsStackProps {
    heading: string,
    children: React.ReactNode,
    stackSpacing: number
}

export const DetailsStack = ({ heading, children, stackSpacing }: DetailsStackProps) => {
    return (
        <Stack spacing={stackSpacing}>
            <Text textTransform='uppercase' color='gray.400'>{heading}</Text>
            {children}
        </Stack>
    )
}

interface PhaseHeadingProps {
    heading: string
}

export const PhaseHeading = ({ heading }: PhaseHeadingProps) => {
    return (
        <Heading fontSize='4xl'>{heading}</Heading>
    )
}

const Project1 = (props: Props) => {
    return (
        <>
            <Flex width='full'
                pl={{ base: 2, md: 40 }}
                pt={{ base: 28, md: 32 }}
                pr={{ base: 2, md: 24 }}
                pb={{ base: 12, md: 32 }}>

                <Stack spacing={{ base: 8, md: 14 }}>

                    <Stack spacing={{ base: 24, md: 48 }}>

                        <Stack spacing={{ base: 8, md: 16 }}>
                            {/** Page Header */}
                            <Stack spacing={12}>
                                <Box>
                                    <CoverImage image={project1} />
                                </Box>
                                <Stack pl={{ base: 10, md: 0 }}>
                                    <Heading fontSize={{ base: '4xl', md: '5xl' }}>Fake Data Generator</Heading>
                                    <HStack>
                                        <Tag>Open Source Project</Tag>
                                        <Tag>Data Preparator Tool</Tag>
                                    </HStack>
                                </Stack>
                            </Stack>

                            {/** Project Details */}
                            <Stack spacing={{ base: 12, md: 20 }} direction={{ base: 'column', md: 'row' }} pl={{ base: 10, md: 0 }}>
                                <Box w='70%'>
                                    <DetailsStack heading='overview' stackSpacing={4}>
                                        <Text letterSpacing='wide'>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        </Text>
                                    </DetailsStack>
                                </Box>
                                <Stack spacing={4}>
                                    <DetailsStack heading='collaborators' stackSpacing={2}>
                                        <HStack>
                                            <Image src={avatar} alt='my picture' height='24px' width='24px' />
                                            <Text>Janhvi Patil</Text>
                                        </HStack>
                                        <HStack>
                                            <Avatar
                                                size='xs'
                                                name='Nikhil Kothari' />
                                            <Text>Nikhil Kothari</Text>
                                        </HStack>
                                    </DetailsStack>
                                    <DetailsStack heading='my role' stackSpacing={2}>
                                        <Text>Software Developer</Text>
                                        <Text>Solution Architect</Text>
                                        <Text>Database Modelling</Text>
                                        <Text>UI/UX Development</Text>
                                        <Text>Testing</Text>
                                    </DetailsStack>
                                    <DetailsStack heading='duration' stackSpacing={2}>
                                        <HStack><AiOutlineCalendar /><Text fontSize='sm'>December 2021 to May 2022</Text></HStack>
                                    </DetailsStack>
                                </Stack>
                            </Stack>

                        </Stack>

                        {/** Process Information */}
                        <Stack spacing={{ base: 16, md: 24 }} pl={{ base: 10, md: 16 }} pr={{ base: 12, md: 24 }}>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Sed ut perspiciatis unde omnis iste' />
                                <Text as='span' letterSpacing='wide'>Sed ut perspiciatis unde omnis iste</Text>
                                <Stack spacing={12}>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={emptyHomePage} alt='homepage upon first logon' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={creatingDoctype} alt='creating doctype' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={cannotGenerate} alt='data cannot be generated if no fields exist' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={addFields1} alt='add new field' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Sed ut perspiciatis unde omnis iste' />
                                <Text as='span' letterSpacing='wide'>Sed ut perspiciatis unde omnis iste</Text>
                                <Stack spacing={12}>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={homeScreen} alt='home screen' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={editingDoctype} alt='editing doctype' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={addFields} alt='add fields' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={allFieldsData} alt='all data fields' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={generateDataPage} alt='generated data page' />
                                        </Box>
                                    </Stack>
                                    <HStack>
                                        <Stack spacing={2}>
                                            <Text>Sed ut perspiciatis unde omnis iste</Text>
                                            <Box>
                                                <Image src={generatedData1} alt='generated data 1' />
                                            </Box>
                                        </Stack>
                                        <Stack spacing={2}>
                                            <Text>Sed ut perspiciatis unde omnis iste</Text>
                                            <Box>
                                                <Image src={generatedData2} alt='generated data 2' />
                                            </Box>
                                        </Stack>
                                    </HStack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={jsonData} alt='JSON data generated' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Sed ut perspiciatis unde omnis iste' />
                                <Text as='span' letterSpacing='wide'>Sed ut perspiciatis unde omnis iste</Text>
                                <Stack spacing={12}>
                                    <HStack>
                                        <Stack spacing={2}>
                                            <Text>Sed ut perspiciatis unde omnis iste</Text>
                                            <Box>
                                                <Image src={loginScreenLight} alt='login screen light' />
                                            </Box>
                                        </Stack>
                                        <Stack spacing={2}>
                                            <Text>Sed ut perspiciatis unde omnis iste</Text>
                                            <Box>
                                                <Image src={loginScreenDark} alt='login screen dark' />
                                            </Box>
                                        </Stack>
                                    </HStack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={loginSettings1} alt='login settings 1' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={loginSettings2} alt='login settings 2' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={loginSettings3} alt='login settings 3' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Sed ut perspiciatis unde omnis iste' />
                                <Text as='span' letterSpacing='wide'>Sed ut perspiciatis unde omnis iste</Text>
                                <Stack spacing={12}>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={employeeDataExample1} alt='employee data fields' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Sed ut perspiciatis unde omnis iste</Text>
                                        <Box>
                                            <Image src={employeeDataExample2} alt='employee data generated' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>

                    </Stack>
                    <Divider />
                    <Flex justifyContent='space-between' pr={{ base: 5 }}>
                        <Link href={'/projects'} passHref>
                            <Button width='fit-content' variant='ghost' colorScheme='blue' size={{ base: 'sm' }}>All Projects</Button>
                        </Link>
                        <Link href={'/projects/tec-mapping'} passHref>
                            <Button width='fit-content' rightIcon={<AiOutlineArrowRight />} variant='outline' colorScheme='blue' size={{ base: 'sm' }}>Next Project</Button>
                        </Link>
                    </Flex>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Project1