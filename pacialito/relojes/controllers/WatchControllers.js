var Watch = require('../models/watch')

module.exports.getOne = (req,res,next) => {
    debug("Search Watch", req.params);
    Watch.findOne({
        username: req.params.modelo
    })
    .then((foundWatch)=> {
        if(foundWatch)
            return res.status(200).json(foundWatch);
        else 
            return res.status(400).json(null);
    })
    .catch(err=>{
        next(err);
    })
}

module.exports.getAll = (req,res,next) => {

    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;
    var sortProperty = req.query.sortby || "createdAt",
        sort = req.query.sort || "desc";

    debug("Watch List", {size: perPage, page, sortby:sortProperty,sort});

    Watch.find({})
        .limit(perPage)
        .skip(perPage*page)
        .sort({ [sortProperty]: sort})
        .then((watches) => {
            return res.status(200).json(watches);
        }).catch(err=>{
            next(err);
        })
}

module.exports.updateWatch = (req,res,next) => {
    let update = {
        marca: req.params.marca,
        tipo: req.params.tipo,
        precio: req.params.precio,
        ...req.body
    };

    Watch.findOneAndUpdate({
        modelo: req.params.modelo,
    }, update, {
        new: true
    })
    .then((updated) => {
        if(updated)
            return res.status(200).json(updated);
        else
            return res.status(400).json(error);
    })
}

module.exports.deleteWatch = (req,res,next) => {
    debug("Delete watch", {
        modelo: req.params.modelo
    });

    Watch.findOneAndDelete({modelo: req.params.modelo})
    .then((data) =>{
        if (data) res.status(200).json(data);
        else res.status(404).send();
    }).catch( err => {
        next(err);
    })
}

module.exports.register = (req,res,next) => {
    debug("Watch", {body : req.body});
    User.findOne({
        modelo : req.body.modelo
    })
    .then((foundWatch) => {
        if(foundWatch){
            debug("Reloj Duplicado");
            throw new Error(`Reloj duplicado ${req.body.username}`);
        }
        else{
            let newWatch = new Watch({
                modelo: req.body.modelo,
                marca: req.body.marca,
                tipo: req.body.tipo,
                precio: req.body.precio
            });
            return newWatch.save();
        }
    }).then(watch => {
        return res
                .header('Location', '/watches/' + watch.modelo)
                .status(201)
                .json({
                    _id : watch._id
                });

    }).catch(err =>{
        next(err);
    })
}