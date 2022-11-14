const upload = require("../multer/upload");
module.exports = app => {
    const juguetes = require("../controllers/juguetes.controller.js");
    var upload = require('../multer/upload');
    const auth = require('../controllers/auth.js')


    var router = require("express").Router();


    router.post("/", upload.single('file'), juguetes.create);

    router.get("/", juguetes.findAll);

    router.get("/:id", juguetes.findOne);

    router.put("/:id", upload.single('file'), juguetes.update);

    router.delete("/:id", juguetes.delete);

    app.use('/api/juguetes', auth.isAuthenticated, router);
};