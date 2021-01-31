import { React } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { SiHulu } from 'react-icons/si';

export default function HuluBadge() {

    return (
        <Box w="40px" bg="green.500" borderRadius="full" px={3} py={1} mt={1} mr={1}
        display="flex" justifyContent="center" alignItems="center">
            <Icon color="white" as={SiHulu} fontSize="0.8rem" />
        </Box>
    )
}