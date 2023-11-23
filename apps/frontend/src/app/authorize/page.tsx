import { LockOutlined } from '@mui/icons-material';
import {
  Alert,
  Avatar,
  Container, Stack,
  Typography,
} from '@mui/material';
import Form from './Form';

interface AuthorizeSearchParams {
  response_type?: 'code',
  client_id?: string,
  state?: string,
  redirect_uri?: string
}

export default function Authorize({ searchParams }:{ searchParams: AuthorizeSearchParams }) {
  const { response_type: responseType, client_id: clientId } = searchParams;
  if (responseType !== 'code' && !clientId) {
    return <Alert severity="error">need response_type and client_id</Alert>;
  }
  return (
    <Container maxWidth="xs">
      <Stack sx={{ mt: 8 }} alignItems="center">
        <Avatar sx={{ m: 1 }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Auth
        </Typography>
        <Form />
      </Stack>
    </Container>
  );
}
