import { Box, Text, Input, Button } from '@chakra-ui/react';
import { APIService } from '../services/APIService';
import { useState } from 'react';

export default function Login() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    function login() {

        const api = new APIService();
        // todo form validation
        api.login(username, password);
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