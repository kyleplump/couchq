import MediaCard from '../components/mediaCard';
import { SimpleGrid } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export default function SearchResults(props) {

    const history = useHistory();

    function viewResult(data) {
        
        history.push('/view-details');
    }

    return (
        <SimpleGrid columns={1} px={3} spacing={8}>
            {
                props.items.map((item, index) => {
                    return <MediaCard onClick={() => viewResult(item)} key={index} 
                                    img={item.picture} title={item.name} blurb={item.details.Plot} />
                })
            }
        </SimpleGrid>
    );
}