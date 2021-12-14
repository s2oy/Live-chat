import express from "express";


const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public')); //user가 /public으로가면 폴더를 보여줌
app.get('/', (req, res) => res.render('home'));	//home으로 가면 req,res를 받고 home을 렌더링함

const handleListen = () => console.log('Listening on http://localhost:3000');
app.listen(3000, handleListen);