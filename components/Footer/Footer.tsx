import { Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react"
import { Logo } from "../Logo/Logo"
import { TbCoffee } from 'react-icons/tb'
import { HiHeart } from 'react-icons/hi'

type Props = {}

export const Footer = (props: Props) => {

    const footerBGColor = useColorModeValue('gray.50', 'gray.700')

    return (
        <Flex bg={footerBGColor} py={4} px={8} justifyContent='space-between'>
            <HStack>
                <Logo width={30} />
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Janhvi Patil
                </Text>
            </HStack>
            <HStack>
                <Text fontSize="sm" color="subtle">made with </Text>
                <TbCoffee fontSize='1.2em' />
                <Text fontSize="sm" color="subtle">and </Text>
                <HiHeart fontSize='1.1em' />
            </HStack>
        </Flex>
    )
}