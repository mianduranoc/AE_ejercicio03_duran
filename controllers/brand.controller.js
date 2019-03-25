
let _brand;

const getAll=(req,res)=>{
    _brand.find({})
        .then(data=>{
            res.status(200);
            res.json({
                code:200,
                msg:"Consulta Exitosa",
                detail:data
            })
        })
        .catch(error=>{
            res.status(400);
            res.json({
                code:400,
                msg:"Consulta Fallida",
                detail:error
            })
        });
};
const getById=(req,res)=>{
    const id=req.params.id;
    _brand.findOne({_id:id})
        .then(data=>{
            res.status(200);
            res.json({
                code:200,
                msg:"Consulta Exitosa",
                detail:data
            })
        })
        .catch(error=>{
            res.status(400);
            res.json({
                code:400,
                msg:"Consulta Fallida",
                detail:error
            })
        });
};
const create=(req,res)=>{
    const brand=req.body;
    _brand.create(brand)
        .then(data=>{
            console.log(data);
            res.status(200);
            res.json({
                code:200,
                msg:"Saved!",
                detail:data
            });
        })
        .catch(error=>{
            console.log(error);
            res.status(400);
            res.json({
                code:400,
                msg:"No se pudo insertar",
                detail:error
            });
        });
};
const deleteBrand=(req,res)=>{
    const id=req.params.id;
    _brand.deleteOne({_id:id})
        .then(data=>{
            res.status(200);
            res.json({
                code:200,
                msg:"Eliminado Exitosamente",
                detail:data
            })
        })
        .catch(error=>{
            res.status(400);
            res.json({
                code:400,
                msg:"No se elimino",
                detail:error
            })
        });
};
const updateBrand=(req,res)=>{
    const id=req.params.id;
    const brand=req.body.brand;
    _brand.updateOne({_id:id},{$set:{brand:brand}})
        .then(data=>{
            res.status(200);
            res.json({
                code:200,
                msg:"Marca Actualizado",
                detail:data
            })
        })
        .catch(error=>{
            res.status(400);
            res.json({
                code:400,
                msg:"Error al actualizar",
                detail:error
            })
        });
};

module.exports=(Brand)=>{
    _brand=Brand;
    return({
        getAll,getById,create,deleteBrand,updateBrand
    });
};