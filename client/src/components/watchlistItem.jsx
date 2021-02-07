import { React } from 'react';
import { Box, Text, Avatar, Icon } from '@chakra-ui/react';
import NetflixBadge from './locationBadges/netflixBadge';
import HuluBadge from './locationBadges/huluBadge';
import { BsArrowRight } from 'react-icons/bs';

export default function WatchlistItem(props) {

    return (
        <Box borderWidth="1px" px={6} py={4} pl={8} borderRadius="full" boxShadow="lg" overflow="hidden" 
            display="flex" justifyContent="space-between" alignItems="center" role="listitem">
            <Box>
                <Text fontSize="1.3rem">{props.item.title}</Text>
                <Box display="flex" justifyContent="flex-start" alignItems="center">
                    {props.item.locations.map((location, index) => (
                        location.includes('Netflix') && <NetflixBadge key={index} />
                        || location.includes('Hulu') && <HuluBadge key={index} />
                    ))}
                </Box>
            </Box>
            <Icon fontSize="1.5rem" as={BsArrowRight} />
            {/* <Avatar size="sm" icon={<CgScreen fontSize="1.25rem" />} /> */}
        </Box>
    );
}