import mongoose from 'mongoose';
import config from 'config';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function connect() {
  const dbUri = config.get('dbUri') as string;

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

// import  mongoose  from 'mongoose';
 
// // export async function run(): Promise<void> {
// //  // 4. Connect to MongoDB
// //  await connect('mongodb://localhost:27017/test', {
// //    useNewUrlParser: true,
// //    useUnifiedTopology: true
// //  });
// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// async function connect() {
//     try {
//         await mongoose.connect('mongodb://localhost/ts-app', {
//         });
//         console.log('>>> Database connected');
//     }
//     catch {
//         console.log('Error');
//     }
// }
// export default connect();