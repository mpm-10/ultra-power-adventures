import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class selectPowerScreen extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;

    

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'selectPowerScreen' });
        
        this.v = v;
        this.axiosImp = axiosImp;
    }

    create() : void
    {
        this.scene.start('selectPowerScreenBackground');
        this.scene.start('selectPowerScreenOptions');
        this.scene.start('selectPowerScreenButtons');
    }
}