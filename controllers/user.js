import { response } from "express";


export const usersGet = (req, res = response) => {

    res.json({
        msg: 'get API - usersGet'
    });
}

export const usersPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usersPut',
        id
    });
}

export const usersPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usersPost',
        nombre, edad
    });
}

export const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usersDelete'
    });
}

export const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usersPatch'
    });
}