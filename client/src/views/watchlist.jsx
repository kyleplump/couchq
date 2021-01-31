import { React, useState } from 'react';
// import MediaCard from '../components/mediaCard';
import WatchlistItem from '../components/watchlistItem';
import { Box, SimpleGrid } from '@chakra-ui/react';


export default function Watchlist() {

    const [ gridColumns, setGridColumns ] = useState(1);

    const data = [
        { id: '1', title: 'Crimson Peak', locations: [ 'Netflix', 'Hulu' ] },
        { id: '2', title: 'The Office', locations: [ 'Netflix' ] }, 
        { id: '3', title: 'Schitts Creek', locations: [ 'Netflix', 'Hulu' ] },
        { id: '4', title: 'Servant', locations: [ 'Netflix' ] },
        { id: '5', title: 'Promising Young Woman', locations: [ 'Netflix' ] },
    ];

    return (
        <Box p={3}>
            <SimpleGrid columns={gridColumns} spacing="15px" role="list">
                {/* <MediaCard />
                <MediaCard />
                <MediaCard /> */}
                {data.map((item) => (
                    <WatchlistItem item={item} key={item.id} />
                ))}
            </SimpleGrid>
        </Box>
    );
}