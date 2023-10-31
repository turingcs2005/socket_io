import express, { Express, Request, Response }  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import chalk from "chalk";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import { createServer } from "node:http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
dotenv.config({path: path.resolve(__dirname, '../.env')});

const PORT = process.env.PORT ? process.env.PORT : 5555;
const app: Express = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// 🅰️ serve angular app
app.use(express.static(path.join(__dirname, '..', 'angular')));
app.all('/*', (req, res, next) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'angular')});
});

const server = createServer(app);

// ⚽ socket.io: server-side code --------------------------------------- 
const io = new Server(server);

io.on('connection', (socket) => {
    console.log(chalk.bold.green('👨 A user connected to our Angular web app!'));

    socket.on('message', (message) => {
        io.emit('message', `${socket.id.substring(0, 2)}: ${message}`)
    });

    socket.on('disconnect', () => {
        console.log(chalk.bold.green('👋 A user disconnected from our Angular web app!'));
    });
});
// -------------------------------------------------------------------

server.listen(PORT, () => {
    console.log(chalk.bold.green(`Server is listening on port ${PORT}`));
});
