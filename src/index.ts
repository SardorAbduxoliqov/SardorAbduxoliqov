import express, { RequestHandler } from 'express';
import config from 'config';
import  * as path from 'path';
import bodyParser from 'body-parser';
import  connect from './database';
import tasksRoutes from './routes/tasks';

const app = express();

const port = config.get("port") as number;
const host = config.get("host") as string;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json() as RequestHandler);

app.use('/', tasksRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.listen(port, host, () => {
  console.log(`Server listing at http://${host}:${port}`);
  connect();
});