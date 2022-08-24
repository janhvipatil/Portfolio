import { ReactNode } from "react"
import { Box, Flex, HStack, Button, useDisclosure, Stack, useColorModeValue, Text } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5"
import navStyles from "./navbar.module.css"
import Link from "next/link"
import { Logo } from "../Logo/Logo"

const Links = [
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Work experience",
        path: "/work-experience",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Get in touch",
        path: "/Contact",
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

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className={navStyles.mobileNav}>
            <Flex px={10} py={8} zIndex={1}>

                <Stack spacing={4}>
                    <Button
                        width='fit-content'
                        size='md'
                        aria-label="Open Menu"
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}>
                        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                    </Button>

                    {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }}>
                            <Stack as='nav' spacing={4}>
                                {Links.map(({ name, path }) => (
                                    <NavLink key={path} path={path}>
                                        {name}
                                    </NavLink>
                                ))}
                            </Stack>
                        </Box>
                    ) : null}
                </Stack>

                <Flex display={{ base: 'none', md: 'flex' }} justifyContent='space-between' width='full'>
                    <Box
                        _hover={{
                            transform: 'scale(1.05)',
                            transition: 'all ease-in-out .2s',
                            cursor: 'pointer'
                        }}>
                        <Link href={'/'}>
                            <Logo height={40} width={40} />
                        </Link>
                    </Box>
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
                        <Button
                            variant='outline'
                            colorScheme='blue'
                            size='md'>
                            Resume
                        </Button>
                    </HStack>
                </Flex>

            </Flex>
        </div>
    )
}