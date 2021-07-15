import mongoose from 'mongoose';
import 'dotenv/config'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function connect() {
  const dbUri = process.env.DB_URL as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connected');
    })
    .catch((error) => {
      console.log('db error', error);
      process.exit(1);
    });
}

export default connect;