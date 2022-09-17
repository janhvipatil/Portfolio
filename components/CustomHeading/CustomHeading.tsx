import { Box, Text, useColorModeValue } from "@chakra-ui/react"

type Props = {
    headingText: string,
    boxColor: string,
    chars: number
}

export const CustomHeading = ({ headingText, boxColor, chars }: Props) => {

    const words = headingText.split(' ')
    const color = useColorModeValue('black', 'black')

    return (
        <Box>
            <Box display={'inline-block'} pos='relative'>
                <Text
                    as='span'
                    zIndex='10'
                    pos='relative'
                    fontWeight={'bold'}
                    fontSize={{ base: '28px', md: '36px' }} >{words.map((w, index) => {
                        if (index === words.length - 1) {
                            return <Text as='span' color={color}>
                                {w}
                            </Text>
                        } else {
                            return w + " "
                        }
                    })}
                    <br />
                </Text>
                <Box
                    as='span'
                    pos='absolute'
                    zIndex={'0'}
                    fontSize={{ base: '28px', md: '36px' }}
                    bg={boxColor}
                    height='30px'
                    width={`${chars}ch`}
                    right='-3'
                    rounded='lg'
                    bottom='8px'></Box>
            </Box>
        </Box>
    )
}
