import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Container, Stack,
  Typography,
} from '@mui/material';
import Form from './Form';

export default function Login() {
  return (
    <Container maxWidth="xs">
      <Stack sx={{ mt: 8 }} alignItems="center">
        <Avatar sx={{ m: 1 }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Form />
      </Stack>
    </Container>
  );
}
