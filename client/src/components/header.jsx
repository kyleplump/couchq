import { React } from 'react';
import { Box, Avatar } from '@chakra-ui/react';
import { RiUser3Line } from 'react-icons/ri';

export default function Header() {

    return (
        <Box w="100%" h="50px" bg="#5CA4A9" position="fixed" top="0"
            display="flex" justifyContent="flex-end" alignItems="center">
            <Avatar size="sm" bg="#ED6A5A" mr={3} icon={<RiUser3Line fontSize="1.25rem" />} />
        </Box>
    );
}