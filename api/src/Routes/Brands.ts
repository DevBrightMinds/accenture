import express, { Request, Response } from "express";

import { Results } from "../Inferfaces/Results";

import BrandRepository from "../Repositories/BrandRepository";

const results: Results = {} as Results;

const BrandsRouting = express.Router();

const BrandsRepository = new BrandRepository();

// having defined the repository and its interface, we now need to have an entry point to access the brands
// so we establish a routing, using express - and thereby the endpoints we need.

BrandsRouting.get("/GetBrands", async (request: Request, response: Response) => {
    try {
        results.Error = false;
        results.ErrorDetails = null;
        results.Results = await BrandsRepository.GetAll();

    } catch (error: any) {
        results.Error = true;
        results.ErrorDetails = error.message;
        results.Results = null;

    }

    response.send(results);

});

BrandsRouting.post("/GetBrand", async (request: Request, response: Response) => {
    try {
        results.Error = false;
        results.ErrorDetails = null;
        results.Results = await BrandsRepository.GetBrand(request.body.ID);
        
    } catch (error: any) {
        results.Error = true;
        results.ErrorDetails = error.message;
        results.Results = null;

    }

    response.send(results);

});

export default BrandsRouting;