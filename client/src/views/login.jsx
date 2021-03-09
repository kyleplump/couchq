import { Box, Text, Input, Button } from '@chakra-ui/react';
import { APIService } from '../services/APIService';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();

    function login() {

        const api = new APIService();
        // todo form validation
        api.login(username, password).then(() => {
            console.log('trying push')
            history.push('/');
        });
    }

    return (
        <Box>
            <Text>Login</Text>
            <Input type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={login}>Click</Button>
        </Box>
    );
}