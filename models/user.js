
import { Schema, model } from 'mongoose'

const UsersSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROL', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

UsersSchema.methods.toJSON = function(){
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

export default model( 'User', UsersSchema );
