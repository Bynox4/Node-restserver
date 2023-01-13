import express from 'express';
import cors from 'cors'

import routes from '../routes/user.js'


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';
        
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
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
        this.app.use( this.usuariosPath, routes );
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el servido', this.port );
        });
    }

}

export default Server