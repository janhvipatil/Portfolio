import { ReactNode, useEffect, useState } from 'react'
import { Box, Flex, HStack, Button, useDisclosure, Stack, useColorModeValue, Text, Center } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5'
import Link from 'next/link'
import { Logo } from '../Logo/Logo'
import { HiDownload } from 'react-icons/hi'

const Links = [
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => {

    const borderColor = useColorModeValue('black', 'white')

    return (
        <Box
            py={1}
            _hover={{
                textDecoration: 'none',
                transform: 'scale(1.05)',
                transition: 'all ease-in-out .2s',
                borderBottom: `1px solid ${borderColor}`,
                cursor: 'pointer'
            }}>
            <Link href={path}><Text fontSize='lg'>{children}</Text></Link>
        </Box>
    )
}

export const Navbar = () => {

    // on scroll get the users scroll position
    // if the user has scrolled 20px, change boxShadow to true
    const [applyBoxShadow, setApplyBoxShadow] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setApplyBoxShadow(true);
            } else {
                setApplyBoxShadow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const boxShadow = useColorModeValue(
        "0px 2px 4px rgba(0, 0, 0, 0.2)",
        "0px 2px 4px rgba(255, 255, 255, 0.1)"
    );
    const navBackgroundColor = useColorModeValue(
        "rgba(255, 255, 255, 0.96)",
        "rgba(026, 032, 044, 0.96)"
    )

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div style={{ zIndex: 999 }}>
            <Flex
                px={10}
                py={applyBoxShadow ? '4' : '8'}
                pos='fixed'
                w='full'
                style={{ zIndex: 999 }}
                bgColor={navBackgroundColor}
                boxShadow={applyBoxShadow ? boxShadow : "none"}
                transition="all .2s ease-in-out"
                justifyContent={{ base: 'space-between' }}>

                <Center
                    display={{ base: 'none', md: 'flex' }}
                    _hover={{
                        transform: 'scale(1.05)',
                        transition: 'all ease-in-out .2s',
                        cursor: 'pointer'
                    }}>
                    <Link href={'/'} passHref>
                        <Box>
                            <Logo height={80} width={80} />
                        </Box>
                    </Link>
                </Center>

                <Stack spacing={4} w='full'>
                    <Button
                        width='fit-content'
                        size='md'
                        aria-label='Open Menu'
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}>
                        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                    </Button>

                    {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }} w='full'>
                            <Stack as='nav' spacing={4} width='full' align='center' justify={'center'}>
                                <Link href='/' passHref>
                                    <Button onClick={onClose} as='a' variant='ghost'>Home</Button>
                                </Link>
                                <Link href='/projects' passHref>
                                    <Button onClick={onClose} as='a' variant='ghost'>Projects</Button>
                                </Link>
                                <Link href='/work' passHref>
                                    <Button onClick={onClose} as='a' variant='ghost'>Work</Button>
                                </Link>
                                <Link href='/about' passHref>
                                    <Button onClick={onClose} as='a' variant='ghost'>About</Button>
                                </Link>
                                <Link href='/contact' passHref>
                                    <Button onClick={onClose} as='a' variant='ghost'>Contact</Button>
                                </Link>
                            </Stack>
                        </Box>
                    ) : null}
                </Stack>

                <Flex display={{ base: 'none', md: 'flex' }} justifyContent='flex-end' width='full'>
                    <HStack spacing={8} alignItems='center'>
                        <ColorModeSwitcher />
                        <HStack
                            as='nav'
                            spacing={10}>
                            {Links.map(({ name, path }) => (
                                <NavLink key={path} path={path}>
                                    {name}
                                </NavLink>
                            ))}
                        </HStack>
                        <a href='Janhvi-Patil-resume.pdf' download='Janhvi-Patil-resume.pdf'>
                            <Button
                                rightIcon={<HiDownload fontSize='1em' />}
                                variant='outline'
                                colorScheme='blue'
                                size='md'>
                                Resume
                            </Button>
                        </a>
                    </HStack>
                </Flex>
                <Box pt={1}>
                    <ColorModeSwitcher display={{ md: 'none' }} />
                </Box>

            </Flex>
        </div>
    )
}