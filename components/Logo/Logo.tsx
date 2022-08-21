import { Box, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import lightLogo from '../../assets/logo-light.svg'
import darkLogo from '../../assets/logo-dark.png'

interface Props {
    width: number
}

export const Logo = ({ width, ...props }: Props) => {

    const logo = useColorModeValue(lightLogo, darkLogo)

    return (
        <Box {...props}>
            <Image src={logo}
                objectFit="contain"
                alt="logo"
                width={width}
            />
        </Box>
    )
}