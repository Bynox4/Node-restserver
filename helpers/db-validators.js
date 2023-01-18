import Rol from '../models/rol.js';
import User from '../models/user.js'




export const rolValid = async(rol = '') => {
    const existRol = await Rol.findOne({ rol });
    if( !existRol ){
        throw new Error(`${ rol } rol is not registered in the DB`)
    }
}

export const emailExist = async( email = '' )=> {
    const existEmail = await User.findOne({ email });
    if ( existEmail ){
        throw new Error(`${email} email already exists`)
    }
}

export const existUserId = async( id )=> {
    const existUser = await User.findById( id );
    if ( !existUser ){
        throw new Error(`id: ${id}, does not exist`)
    }
}

