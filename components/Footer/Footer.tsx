import { Divider, Flex, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Logo } from "../Logo/Logo"
import { TbCoffee } from 'react-icons/tb'
import { HiHeart } from 'react-icons/hi'

export const Footer = () => {

    const footerBGColor = useColorModeValue('gray.50', 'gray.800')

    return (
        <>
            <Flex bottom='0' width='full' px={4} pb={2} display={{ base: 'flex', md: 'none' }}>
                <Stack width='full'>
                    <Divider />
                    <HStack justifyContent='space-between'>
                        <HStack spacing={1}>
                            <Logo height={22} width={22} />
                            <Text fontSize='xs' color='subtle'>
                                &copy; {new Date().getFullYear()} Janhvi Patil
                            </Text>
                        </HStack>
                        <HStack spacing={1}>
                            <Text fontSize='xs' color="subtle">made</Text>
                            <Text fontSize='xs' color="subtle">with</Text>
                            <TbCoffee fontSize='1em' />
                            <Text fontSize='xs' color="subtle">and </Text>
                            <HiHeart fontSize='1em' color='red' />
                        </HStack>
                    </HStack>
                </Stack>
            </Flex>
            <Flex bottom='0' w='full' bg={footerBGColor} py={4} px={10} justifyContent='space-between' display={{ base: 'none', md: 'flex' }}>
                <HStack px='0.5'>
                    <Logo height={30} width={30} />
                    <Text fontSize='sm' color='subtle'>
                        &copy; 2022 Janhvi Patil
                    </Text>
                </HStack>
                <HStack spacing={2}>
                    <Text fontSize='sm' color="subtle">made</Text>
                    <Text fontSize='sm' color="subtle">with</Text>
                    <TbCoffee fontSize='1.2em' />
                    <Text fontSize='sm' color="subtle">and </Text>
                    <HiHeart fontSize='1.1em' />
                </HStack>
            </Flex>
        </>
    )
}