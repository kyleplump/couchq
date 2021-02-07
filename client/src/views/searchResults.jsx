import MediaCard from '../components/mediaCard';
import { SimpleGrid } from '@chakra-ui/react';

export default function SearchResults(props) {

    return (
        <SimpleGrid columns={1} px={3} spacing={8}>
            {
                props.items.map((item, index) => {
                    return <MediaCard key={index} img={item.picture} title={item.name} blurb={item.details.plotSummary.text} />
                })
            }
        </SimpleGrid>
    );
}