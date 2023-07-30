import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class rankingScreen extends Phaser.Scene
{
    v! : GlobalVariables
    axiosImp! : AxiosImp;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'rankingScreen' });
        
        this.v = v;
        this.axiosImp = axiosImp;
    }

    create() : void
    {
        this.scene.start('rankingScreenBackground');
        this.scene.start('rankingScreenButton');
        this.scene.start('rankingScreenText');
    }
}