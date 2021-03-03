import { React, useState, useEffect } from 'react';
// import MediaCard from '../components/mediaCard';
import WatchlistItem from '../components/watchlistItem';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { APIService } from '../services/APIService';
import { connect } from 'react-redux';
import { cacheWatchlist } from '../state/actionCreators';


function Watchlist(props) {

    const [ gridColumns, setGridColumns ] = useState(1);
    let api = null;

    useEffect(() => {

        api = new APIService();

        if(props.watchlist.length === 0) {
            api.getWatchlist('123456789').then((data) => {
                props.cacheWatchlist(data);
            });
        }
    }, []);

    return (
        <Box p={3}>
            <SimpleGrid columns={gridColumns} spacing="15px" role="list">
                {/* <MediaCard />
                <MediaCard />
                <MediaCard /> */}
                {props.watchlist.map((item) => (
                    <WatchlistItem item={item} key={item.id} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

const mapStateToProps = (state) => {

    const { watchlist } = state;

    return {
        watchlist: watchlist.watchlist
    }
}

const mapDispatchToProps = {
    cacheWatchlist
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);