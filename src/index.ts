import express, { RequestHandler } from 'express';
// eslint-disable-next-line import/order
import  * as path from 'path';

// eslint-disable-next-line import/order
import { connect } from './database';

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
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.listen(app.get('port'), () => {
 connect();
  console.log('>>> Server is running at', app.get('port'));
});
