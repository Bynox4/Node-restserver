import { response } from "express";
import bcryptjs from 'bcryptjs'

import User from '../models/user.js';
import generarJWT from "../helpers/generar-jwt.js";


export const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
    
        // verificar si el email existe
        const user = await User.findOne({ email });
        if( !user ){
            return res.status(400).json({
                msg: 'User / Password is not correct'
            })
        }

        // Si el usuario está activo
        if( !user.estado ){
            return res.status(400).json({
                msg: 'User / Password is not correct - estado: false'
            })
        }

        // verificar la contraseña
        const validPass = bcryptjs.compareSync( password, user.password );
        if( !validPass ){
            return res.status(400).json({
                msg: 'User / Password is not correct - password'
            })
        }

        // Generar el JWT
        const token = await generarJWT( user.id );

        res.json({
            user,
            token
        })        
    } catch (error) {
        console.log(error);
        return req.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}
