import { React } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { RiNetflixFill } from 'react-icons/ri';

export default function NetflixBadge() {

    return (
        <Box w="40px" bg="red.500" borderRadius="full" px={3} py={1} mt={1} mr={1}
                display="flex" justifyContent="center" alignItems="center">
            <Icon color="white" as={RiNetflixFill} fontSize="0.8rem" />
        </Box>
    );
}