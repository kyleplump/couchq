import { React, useState } from 'react';
import MediaCard from '../components/mediaCard';
import { Box, SimpleGrid } from '@chakra-ui/react';


export default function Watchlist() {

    const [ gridColumns, setGridColumns ] = useState(1);

    return (
        <Box p={3}>
            <SimpleGrid columns={gridColumns} spacing="20px" role="list">
                <MediaCard />
                <MediaCard />
                <MediaCard />
            </SimpleGrid>
        </Box>
    );
}