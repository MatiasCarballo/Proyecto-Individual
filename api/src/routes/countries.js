const { Router } = require('express');
const {Op} = require('sequelize');
const router = Router();

const { Country, Activity } = require('../db');


router.get('/', async(req, res) => {
    const name = req.query.name;
    let countryAll
    try{
        if(name){
            countryAll = await Country.findAll({
                where:{
                    name: {
                        [Op.iLike] : "%" + name + "%"
                    },
                    
                },
                attributes: {
                   exclude: ['updatedAt', 'createdAt'],
                },
                include: {
                   model: Activity,
                   
                }
            })
            res.json(countryAll)
        }else{
            countryAll = await Country.findAll({
                attributes: {
                    exclude: ['updatedAt', 'createdAt'],
                },
                include: {
                    model: Activity,
                    through: {
                        attributes: []
                    }
                }
             
        })
        res.json(countryAll)
        }
    }
    catch(err){
        res.status(404).send(err)
    }
}) 



router.get('/id/:id', async(req, res) => {
    const {id} = req.params;
    try{
    const countryID = await Country.findAll({
        where: { id:id },
            attributes: { 
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Activity,
                through: {
                    attributes: []
                    },
                },
        })
        res.json(countryID)     
    }catch(err){
        res.status(404).send(err)
    }

        
    
   
}) 



module.exports = router