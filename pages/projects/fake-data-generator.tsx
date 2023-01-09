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
                                <Box w={{ base: '90%', md: '70%' }}>
                                    <DetailsStack heading='overview' stackSpacing={4}>
                                        <Text letterSpacing='wide'>
                                            Our open source web tool allows users to easily create and manage custom data tables, called &apos;doctypes.&apos; During the creation process, users can define the fields of their doctype and specify the type of each field, such as text, number, email, phone number, and more. They can also set validation rules to ensure that the data entered into the fields meets certain criteria, such as maximum length or value, or rules to prevent negative values.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            In addition to creating and customizing their doctypes, users can also generate high-quality dummy data based on the fields they have defined. This can be done with just a single click, using the faker.js library to generate realistic fake data. The generated data can be downloaded as a CSV or copied in JSON format, or it can be added directly to a connected database.
                                        </Text>
                                        <Text letterSpacing='wide'>
                                            To use this tool, users will need to clone the GitHub repository and provide credentials for Supabase in order to connect their database. This process is secure, as we do not have access to any of the user&apos;s databases. Users can create and validate their data independently, giving them complete control over their doctypes and the data they contain.
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
                                        <Text>UI/UX Development</Text>
                                        <Text>Database Modelling</Text>
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
                                <PhaseHeading heading='Tool Details' />
                                <Text as='span' letterSpacing='wide'>After the user has cloned the Git Repo, has completed the base setup and deployed the application, they can start using it.</Text>
                                <Stack spacing={12}>
                                    <Stack spacing={2}>
                                        <Text>The user is shown a empty state in their homepage when no doctypes have been created.</Text>
                                        <Box>
                                            <Image src={emptyHomePage} alt='homepage upon first logon' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>When the user clicks on <i>Create New Doctype</i>, they are redirected to the doctype creation page. After creating a doctype, users can define fields for their doctype.</Text>
                                        <Box>
                                            <Image src={creatingDoctype} alt='creating doctype' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>If no fields exist in a doctype, then data generation is not possible and the user is shown the below graphic.</Text>
                                        <Box>
                                            <Image src={cannotGenerate} alt='data cannot be generated if no fields exist' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>To define fields for a doctype, the user needs to fill out a form detailing out the metadata for the field. For example: Is it a character field or numeric, what kind of validation rules apply to this field, etc... </Text>
                                        <Box>
                                            <Image src={addFields1} alt='add new field' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Let&apos;s try using the tool' />
                                <Text as='span' letterSpacing='wide'>In this example, we are generating dummy data for a fictional cat care website, wherein users can register their pets and avail serives for them.</Text>
                                <Stack spacing={12}>
                                    <Stack spacing={2}>
                                        <Text>We start by creating a doctype - by clicking the <i>Create New Doctype</i> button on our homepage.</Text>
                                        <Box>
                                            <Image src={homeScreen} alt='home screen' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>After the doctype has been created, we define some basic fields such as the pet&apos;s name, animal type, age, owner information and maybe an optional field for the pet&apos;s profile picture. </Text>
                                        <Box>
                                            <Image src={editingDoctype} alt='editing doctype' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Let&apos;s say the profile is getting created for the pet, so in terms of owner information we only need a valid email address for contacting the owner.</Text>
                                        <Box>
                                            <Image src={addFields} alt='add fields' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>This is what our fields table looks like after we have defined all essential fields.</Text>
                                        <Box>
                                            <Image src={allFieldsData} alt='all data fields' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Now, to generate dummy data, we click on <i>Generate Data</i></Text>
                                        <Box>
                                            <Image src={generateDataPage} alt='generated data page' />
                                        </Box>
                                    </Stack>
                                    <HStack display={{ base: 'none', md: 'flex' }}>
                                        <Stack spacing={2}>
                                            <Text>This is what the system generates when the pet type has been selected to cat:</Text>
                                            <Box>
                                                <Image src={generatedData1} alt='generated data 1' />
                                            </Box>
                                        </Stack>
                                        <Stack spacing={2}>
                                            <Text>When we generate the data again we get different results. The user can choose how many rows of dummy data needs to be generated.</Text>
                                            <Box>
                                                <Image src={generatedData2} alt='generated data 2' />
                                            </Box>
                                        </Stack>
                                    </HStack>

                                    <Stack spacing={2} display={{ md: 'none' }}>
                                        <Text>This is what the system generates when the pet type has been selected to cat:</Text>
                                        <Box>
                                            <Image src={generatedData1} alt='generated data 1' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2} display={{ md: 'none' }}>
                                        <Text>When we generate the data again we get different results. The user can choose how many rows of dummy data needs to be generated.</Text>
                                        <Box>
                                            <Image src={generatedData2} alt='generated data 2' />
                                        </Box>
                                    </Stack>

                                    <Stack spacing={2}>
                                        <Text>Users can copy the generated data in JSON format directly by clicking on the copy button</Text>
                                        <Box>
                                            <Image src={jsonData} alt='JSON data generated' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Other Notable Features' />
                                <Text as='span' letterSpacing='wide'>Login/ Signup screens</Text>
                                <Stack spacing={12}>
                                    <HStack>
                                        <Stack spacing={2}>
                                            <Text>light-mode</Text>
                                            <Box>
                                                <Image src={loginScreenLight} alt='login screen light' />
                                            </Box>
                                        </Stack>
                                        <Stack spacing={2}>
                                            <Text>dark-mode</Text>
                                            <Box>
                                                <Image src={loginScreenDark} alt='login screen dark' />
                                            </Box>
                                        </Stack>
                                    </HStack>
                                    <Stack spacing={2}>
                                        <Text>On the login page settings, users can say if they want both login and signup pages or only login page. They can also write what text messages will appear on these pages in the form of heading and subheadings, users can also add their company logo, which will appear on the login page if uploaded.</Text>
                                        <Box>
                                            <Image src={loginSettings1} alt='login settings 1' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Users can enable multiple OAuth providers in their settings. The enabled provider options will be shown on the login/sign-up screens. Users will have to add the appropriate credentials for all enabled providers and activate them in their Supabase dashboard.</Text>
                                        <Box>
                                            <Image src={loginSettings2} alt='login settings 2' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>users can add their organisation or brand logo, this will show up on the app sidebar. As we support both light and dark mode, we recommend users to upload logos for both if available. (However, this is optional)</Text>
                                        <Box>
                                            <Image src={loginSettings3} alt='login settings 3' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Example: Generating Dummy Employee Data' />
                                <Stack spacing={12}>
                                    <Stack spacing={2}>
                                        <Text>We define the fields according to our use case: </Text>
                                        <Box>
                                            <Image src={employeeDataExample1} alt='employee data fields' />
                                        </Box>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Text>Generated Data: </Text>
                                        <Box>
                                            <Image src={employeeDataExample2} alt='employee data generated' />
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={6}>
                                <PhaseHeading heading='Results and Takeaways' />
                                <Text letterSpacing='wide'>
                                    This solution could be helpful in a variety of situations where users need to create and manage custom data tables, and generate dummy data for testing or development purposes. Some potential examples include:</Text>
                                <Stack>
                                    <p><strong>Software development:</strong> Developers may want to create custom data models and generate dummy data to test their applications.</p>

                                    <p><strong>Data analysis and visualization:</strong> Data analysts and visualization specialists may use this tool to create custom data sets and generate dummy data to practice their skills and build prototypes.</p>

                                    <p><strong>Business operations:</strong> Businesses may use this tool to create custom data tables to track and manage various types of information, such as customer or product data.</p>
                                </Stack>
                                <Text>My team at My Asset Buddy has used this tool to generate data to test <i>table</i> and <i>form</i> UI elements without worrying about typing out multiple lines of dummy data themselves or worse filling out forms with values such as &apos;test data&apos;.</Text>
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