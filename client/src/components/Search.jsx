import { React, useState, useEffect } from 'react';
import {APIService} from '../services/APIService';
import { Flex, Input, Button, Box } from '@chakra-ui/react';
import SearchResults from '../views/searchResults';

let apiService = null;

export default function Search() {

    useEffect(() => {
        // intialize the service only once
        apiService = new APIService();
    }, []);

    const [ searchTerm, updateSearchTerm ] = useState('');
    const [ results, setResults ] = useState([]);

    function performSearch(term) {

        apiService.search(term).then((resp) => {
            console.log('RES: ', resp);
            setResults(resp.results);  
        });
    }

    return (
        <Box py={5}>
            {results.length === 0 ?
                <Flex px={8} h="100%;" flexDirection="column" alignItems="center" justifyContent="center" >
                    <Input mb="4rem" size="lg" boxShadow="lg" onChange={(e) => updateSearchTerm(e.target.value) } />
                    <Button colorScheme="teal" onClick={() => performSearch(searchTerm)} >Search!</Button>
                </Flex>
                :
                <SearchResults items={results} />
            }
            
        </Box>
    );
}