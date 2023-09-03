import express from 'express';
import bodyParser from 'body-parser';
import jquery from 'jquery';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


//routes
app.get('/',(req,res)=>{
    res.render('index.ejs');
})

let task = [];

app.post('/add',(req,res)=>{
    task.push(req.body.todoitem);
    res.render('index.ejs',{taskItem:task});
});

app.listen(port,()=>{
    console.log(`Server is live at port: ${port}`);
})