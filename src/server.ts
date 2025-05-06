import { Server } from 'http';
import app from './app';

const PORT = process.env.PORT || 3000;

async function startServer() {
  const server: Server = app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
  });
}

startServer();
