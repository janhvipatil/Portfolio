import { Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react"
import { Logo } from "../Logo/Logo"
import { TbCoffee } from 'react-icons/tb'
import { HiHeart } from 'react-icons/hi'

type Props = {}

export const Footer = (props: Props) => {

    const footerBGColor = useColorModeValue('gray.50', 'gray.800')

    return (
        <Flex bottom='0' w='full' bg={footerBGColor} py={4} px={10} justifyContent='space-between'>
            <HStack px='0.5'>
                <Logo height={30} width={30} />
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Janhvi Patil
                </Text>
            </HStack>
            <HStack spacing={2}>
                <Text fontSize="sm" color="subtle">made</Text>
                <Text fontSize="sm" color="subtle">with</Text>
                <TbCoffee fontSize='1.2em' />
                <Text fontSize="sm" color="subtle">and </Text>
                <HiHeart fontSize='1.1em' />
            </HStack>
        </Flex>
    )
}