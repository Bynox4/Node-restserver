import express from 'express';
import cors from 'cors'

import routes from '../routes/users.js'
import auth from '../routes/auth.js'

import { dbConnection } from '../database/config.js';


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.usersPath = '/api/users';
        this.authPath = '/api/auth';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio public
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.authPath, auth );
        this.app.use( this.usersPath, routes );
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el servido', this.port );
        });
    }

}

export default Server