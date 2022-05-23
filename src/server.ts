import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path  from 'path';
import webROutes from './routes/web';

dotenv.config();

const port = process.env.PORT;
const server = express();
//CONFIGURAÇÃO ENGINE
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
/////////////////////////////////////////////////////////////////////
// pasta public 
server.use( express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));





// Rotas 
server.use(webROutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada');
});

server.listen(port, () => {
    console.log(`App rodando na  port ${port}`)
})