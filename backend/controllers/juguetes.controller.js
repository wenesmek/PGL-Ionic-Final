const db = require("../models");
const Juguete = db.juguetes;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {


    if(!req.body.nombre) {
        res.status(400).send({
            message: "El contenido no puede estar vacío!"
        });
        return;
    }

    const juguete = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        filename: req.file ? req.file.filename : ""
    };

    Juguete.create(juguete)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido algún error crendo el juguete"
            });
        });

};


exports.findAll = (req, res) => {
    Juguete.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error recuperando los jueguetes"
            })
        })

};


exports.findOne = (req, res) => {

    const id = req.params.id;

    Juguete.findByPk(id)
        .then(data => {
            if(data) {
                res.send(data);
            }else {
                res.status(404).send({
                    message: `No se ha podido encontrar el juguete con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error buscando juguete con id = " + id
            })
        })

};

exports.update = (req, res) => {

    const id = req.params.id;

    const juguete = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        filename: req.file ? req.file.filename : req.body.filename
    };




    Juguete.update(juguete, {
        where: {id: id}
    })
        .then(num => {
            if(num ==1) {
                res.send({
                    message: "Se actualizó el juguete con éxito."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el juguete con id=${id}. Puede que no exista.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el jueguete con id=" + id
            });
        });
};


exports.delete = (req, res) => {

    const id = req.params.id;

    Juguete.destroy({
        where: { id: id }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Juguete borrado con éxito!"
                });
            } else {
                res.send({
                    message: `No se ha podido borrar el juguete con id=${id}. Puede que no exista!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se ha podido borrar el juguete con id=" + id
            })
        })


};
