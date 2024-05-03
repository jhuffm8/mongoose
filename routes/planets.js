import express from 'express'
import db from "../db/conn.js"

import { indexPlanets, getPlanetsId, createPlanet } from '../contollers/planetContoller.js';

const router = express.Router();

// get all planets
router.get('/', indexPlanets)

//get a single planet
router.get('/:id', getPlanetsId);

//Post a new planet
router.post('/', createPlanet);

//





export default router