import  mongoose  from 'mongoose';
 
// export async function run(): Promise<void> {
//  // 4. Connect to MongoDB
//  await connect('mongodb://localhost:27017/test', {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//  });
export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/ts-app', {
        });
        console.log('>>> Database connected');
    }
    catch {
        console.log('Error');
    }
}