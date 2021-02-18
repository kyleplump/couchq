import { Flex, Text, Heading, Image, Button, Box, Icon } from '@chakra-ui/react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RiNetflixFill } from 'react-icons/ri';
import { SiHulu, SiApple } from 'react-icons/si';
import { APIService } from '../services/APIService';

function MediaDetails(props) {

    let api = null;

    useEffect(() => {
        console.log("PROP: ", props)
        api = new APIService();
        // if arriving at this component from a url / before local cache was initialized
        if(!props.mediaItemID) {
            // todo
        }
    }, []);

    function addToWatchlist() {
        
        api.addItemToWatchlist(props.item.mediaItem);
    }

    return (
        <Flex direction="column" p={3} justifyContent="center" alignItems="center">
            <Button colorScheme="#319795" variant="outline" w="30%" mb={2} alignSelf="flex-start">Back</Button>

            <Image borderRadius="7px" src={props.item.mediaItem.picture} alt="Media Image" />
            <Box display="flex" alignItems="center" justifyContent="flex-end" mt={2}>
                <Icon mx={1} as={RiNetflixFill} />
                <Icon mx={1} as={SiHulu} />
                <Icon mx={1} as={SiApple} />
            </Box>
            <Heading>{ props.item.mediaItem.name }</Heading>
            <Box display="flex" alignItems="center" justifyContent="flex-start">
                <Text mr={2}>{ props.item.mediaItem.details.Rated }</Text>
                <Text mr={2}>{ props.item.mediaItem.details.Year }</Text>
                <Text mr={2}>{ props.item.mediaItem.details.Runtime }</Text>
            </Box>
            <Text>{ props.item.mediaItem.details.Plot }</Text>
            <Button w="90%" mt={2} backgroundColor="#319795" color="white" onClick={() => addToWatchlist()}>
                Add To Watchlist
            </Button>
        </Flex>
    );
}

const mapStateToProps = (state, ownProps) => {

    const { mediaItem } = state;
    return {
        item: mediaItem
    }
}

export default connect(mapStateToProps)(MediaDetails);