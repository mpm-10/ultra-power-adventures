import { Request, Response } from "express";
import ProgressModel from "../models/Progress";


export default class ProgressController
{

    constructor()
    {

    }

    async show(req : Request, res : Response)
    {
        const listProgress = await ProgressModel.find(req.body);

        return res.json(listProgress);
    }

    async indexById(req : Request,res : Response)
    {
        const progressById = await ProgressModel.findOne({ _id : req.params.id });
        return res.json(progressById);
    }

    async indexByNickname(req : Request,res : Response)
    {
        const progressByNickname = await ProgressModel.findOne({ nickname : req.params.nickname });
        return res.json(progressByNickname);
    }


    async indexByPassword(req : Request,res : Response)
    {
        const progressByPassword = await ProgressModel.findOne({ password : req.params.password });
        return res.json(progressByPassword);
    }

    async store(req : Request, res : Response)
    {
        const progress =  await ProgressModel.create(req.body);

        return res.json(progress);
    }

    async update(req : Request,res : Response)
    {
        let progress = await ProgressModel.findOneAndUpdate({ nickname : req.params.nickname },req.body);
        return res.json(progress);
    }

    async destroy(req : Request,res : Response)
    {
        let progress = await ProgressModel.deleteOne({ nickname : req.params.nickname });
        return res.json(progress);
    }

     async destroyById(req : Request,res : Response)
     {
        let progressById = await ProgressModel.findByIdAndDelete(req.params.id);
        return res.json(progressById);
     }

}
