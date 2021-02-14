import MediaCard from '../components/mediaCard';
import { SimpleGrid } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setActiveMediaItem } from '../state/actionCreators';
import { APIService } from '../services/APIService';
import { useEffect } from 'react';

function SearchResults(props) {

    const history = useHistory();
    let api = null;

    useEffect(() => {
        api = new APIService();
    }, [])

    function viewResult(item) {

        props.setActiveMediaItem(item.id, item);

        history.push(`/view-details/${item.id}`);
    }

    function addResult(item) {

        api.
    }

    return (
        <SimpleGrid columns={1} px={3} spacing={8}>
            {
                props.items.map((item, index) => {
                    return <MediaCard clicked={() => viewResult(item)} onAdd={() => addResult(item)} 
                                key={index} img={item.picture} title={item.name} blurb={item.details.Plot} />
                })
            }
        </SimpleGrid>
    );
}

const mapDispatchToProps = { setActiveMediaItem };

export default connect(null, mapDispatchToProps)(SearchResults);
