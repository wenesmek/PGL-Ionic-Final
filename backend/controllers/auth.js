const jwt = require('jsonwebtoken');
const utils = require('../utils');
const bcrypt = require('bcryptjs');

const db = require('../models');
const User = db.user;

exports.signin = (req, res) => {
    const user = req.body.username;
    const utils = require('../utils')
    const pwd = req.body.password;


    // Devuelve 400 status si al user/pass no existen
    if (!user || !pwd) {
        return res.status(400).json({
            error: true,
            message: "Usuario o contraseña requeridos."
        });
    }

    // Devuelve 401 status si no coinciden los credeciales
    User.findOne({where: {username: user}})
        .then(data => {
            console.log(data);
            const result = bcrypt.compareSync(pwd, data.password);
            if (!result) return res.status(401).send('Contraseña no válida');

            //generando token
            const token = utils.generateToken(data);

            // recogiendo detalles usuarios
            const userObj = utils.getCleanUser(data);

            // Devuelve el token con los detalles del usuario
            return res.json({user: userObj, access_token: token});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algún error ha ocurrido mientras se devolvían los credenciales."
            });
        });
};

exports.isAuthenticated = (req, res, next) => {
    // Comprueba los parámetros en la cabecera de la URL para el token

    var token = req.token;
    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required."
        });
    }

    // Comprobando que el token que se recibe, al decodificarlo, es el token secreto
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) return res.status(401).json({
            error: true,
            message: "Invalid token."
        });

        User.findByPk(user.id)
            .then(data => {
                // Devuelve 401 status si el ID del usuario no concuerda
                if (!user.id) {
                    return res.status(401).json({
                        error: true,
                        message: 'Usuario no válido.'
                    });
                }

                // Recogiendo detalles básicos del usuario
                next();
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error devolviendo usuario con id=" + id
                });
            });
    });
};



