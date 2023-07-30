import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class pauseScreen extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;

    

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'pauseScreen' });
        
        this.v = v;
        this.axiosImp = axiosImp;
    }

    create() : void
    {
        this.scene.start('pauseScreenBackground');
        this.scene.start('pauseScreenOptions');
        this.scene.start('pauseScreenButtons');
    }
}