import GlobalVariables from "../utils/GlobalVariables";
import AxiosImp from "./AxiosImp";
import IProgress from "./models/IProgress";



export default class AxiosIntegration extends AxiosImp
{
    constructor(v : GlobalVariables, progress : IProgress)
    {
        super(v, progress);
    }
}