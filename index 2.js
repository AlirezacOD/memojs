import express from 'express'
const router = express.Router()
const db = [{
    id: 1,  
    name: 'Alireza',
    family: 'hosseini',
    age: '15',
    city: 'ramsar'

},
{
    id: 2,
    name: 'mani',
    family: 'madady',
    age: '15',
    city: 'shahsavar'
},
{
    id: 3,
    name: 'parham',
    family: 'roshan',
    age: '15',
    city: 'rasht'
}]      
router.get('/findByfamily/:family', (req, res) => {
    const { family } = req.params
    const place = []
    for (let i = 0; i < db.length; i++) {
        if (family === db[i].family) {
            place.push(db[i])
        }
    }
    res.status(200).json(place)

})
export default router
