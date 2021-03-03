import { Box, Text, Input, Button } from '@chakra-ui/react';
import { APIService } from '../services/APIService';

export default function Login() {

    function login() {

        const api = new APIService();
        // api.login('kyle@test.com', 'testpass');
        api.getWatchlist('123456789');
    }

    return (
        <Box>
            <Text>Login</Text>
            <Input type="text" />
            <Input type="password" />
            <Button onClick={login}>Click</Button>
        </Box>
    );
}