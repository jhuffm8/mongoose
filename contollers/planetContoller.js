import Planets from '../models/PlanetsModels.js'
// get all planets
const indexPlanets =  async (req, res) => {
    const result =  await Planets.find();
    res.json(result)
  };

// get planet by id
const getPlanetsId = async (req, res) => {
    const result = await Planets.findById(req.params.id)
    res.send(result).status(200)
};

// Create new planet

const createPlanet =  async (req, res) => {
    const {name, orderFromSun, hasRings} = req.body

    try{
        const planet =  await Planets.create({name, orderFromSun, hasRings});
        res.json(planet).status(200)
    } catch(err){
        res.json({error: err.message}).status(400)
    }
};

  export {indexPlanets, getPlanetsId, createPlanet}
