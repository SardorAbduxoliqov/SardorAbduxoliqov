import express from 'express';
import morgan from 'morgan';
import { connect } from './database';
import path from 'path';

// Routes
import tasksRoutes from './routes/tasks';

const app = express();

app.set('port', 4000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/tasks', tasksRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'));

app.listen(app.get('port'), () => {
 connect();
  console.log('>>> Server is running at', app.get('port'));
});