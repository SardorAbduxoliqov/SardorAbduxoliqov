import express, { RequestHandler } from 'express';
import  * as path from 'path';
import  connect from './database';
import tasksRoutes from './routes/tasks';
import 'dotenv/config'


const app = express();

const port = parseInt(process.env.PORT as string, 10) || 4000;
const host = process.env.HOST as string;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}) as RequestHandler) ;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json() as RequestHandler);

app.use('/', tasksRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.listen(port, host, () => {
  console.log(`Server listing at http://${host}:${port}`);
  connect();
});