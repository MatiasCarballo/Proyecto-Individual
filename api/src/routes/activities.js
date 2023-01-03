const { Router } = require('express');
const router = Router();

const {Activity, Country} = require('../db')

router.get('/', async(req, res) => {
    try{
        const allActivity = await Activity.findAll({
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country, 
                through: {
                    attributes: []
                } 
            }
        })
       res.json(allActivity)
    }catch(err){
        res.status(404).send(err)
    }

})

router.get('/id/:id', async(req, res) => {
    const {id} = req.params;
    try{
        const activityID = await Activity.findAll({
            where: { id:id },
                attributes: { 
                    exclude: ['updatedAt', 'createdAt'],
                },
                include: {
                    model: Country, 
                    through: {
                        attributes: []
                    } 
                }
            })
         res.json(activityID)    
    }catch(err){
        res.status(404).send(err)
    }
    
  
}) 

router.post('/', async(req, res)=>{
    const postActivity = await Activity.findAll();
    const { name, difficulty, duration, season, image, countries, like} = req.body;
    try{
        for (let i = 0; i < countries.length; i++){
            let id = postActivity.length + i 
            const activity = await Activity.create({
            id, name, difficulty, duration, season ,image, like
            });
            await activity.setCountries(countries[i]);
        }

        let activityWithCountry = await Activity.findOne({
            where: { name: name },
            attributes: {
               exclude: ['updatedAt', 'createdAt'],
            },
            include: {
               model: Country, 
               through: {
                   attributes: []
               }
           }
        })
        res.json(activityWithCountry)
    }catch(err){
        res.status(404).send(err)
    }

})

router.delete('/id/:id', async(req, res) => {
    const {id} = req.params;
    try{
        await Activity.destroy({
            where: { id:id },  
        })

        const allActivities = await Activity.findAll({
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country, 
                through: {
                    attributes: []
                } 
            }
        })
    res.status(200).send(allActivities) 
    }catch(err){
        res.status(404).send(err)
    }

}) 

module.exports = router;