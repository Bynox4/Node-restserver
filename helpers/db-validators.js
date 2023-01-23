import { Category, Product, Rol, User } from '../models/index.js';



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

export const existCategoryId = async( id )=> {
    const existUser = await Category.findById( id );
    if ( !existUser ){
        throw new Error(`id: ${id}, does not exist`)
    }
}

export const existProductId = async( id )=> {
    const existProduct = await Product.findById( id );
    if ( !existProduct ){
        throw new Error(`id: ${id}, does not exist`)
    }
}

