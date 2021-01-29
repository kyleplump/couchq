import { React } from 'react';
import { Box, Image, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { RiNetflixFill } from 'react-icons/ri';
import { SiHulu, SiApple } from 'react-icons/si';

export default function MediaCard() {

    return (
        <Box borderWidth="1px" borderRadius="lg" boxShadow="lg" overflow="hidden" role="listitem">
            <Image src="http://placekitten.com/400/300" alt="Media Image" />
            <Box py={2} px={3}>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Icon mx={1} as={RiNetflixFill} />
                    <Icon mx={1} as={SiHulu} />
                    <Icon mx={1} as={SiApple} />
                </Box>
                <Heading>Media Item</Heading>
                <Text isTruncated>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
                    sagittis imperdiet justo at molestie.
                </Text>
                <Box w="100%" display="flex" justifyContent="center" alignItems="center" mt={5}>
                    <Button colorScheme="teal" w="50%">Add</Button>
                </Box>
            </Box>
        </Box>
    );
}