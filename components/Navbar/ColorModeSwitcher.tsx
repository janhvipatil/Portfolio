import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
} from "@chakra-ui/react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(IoMoonOutline, IoSunnyOutline);

    return (
        <IconButton
            size='lg'
            fontSize='xl'
            variant='ghost'
            color='current'
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
            {...props}
        />
    );
};