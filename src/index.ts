import express, { RequestHandler } from 'express';
import { connect } from './database';
import  * as path from 'path';

// Routes
import tasksRoutes from './routes/tasks';

const app = express();

app.set('port', 4000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(express.json() as RequestHandler);

app.use('/', tasksRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'));

app.listen(app.get('port'), () => {
 connect();
  console.log('>>> Server is running at', app.get('port'));
});

function __dirname(__dirname: any, arg1: string): any {
  throw new Error('Function not implemented.');
}
