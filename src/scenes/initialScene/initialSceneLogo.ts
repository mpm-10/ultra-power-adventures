import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class initialSceneLogo extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;

    logo! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'initialSceneLogo' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('logo', './assets/scenes/initialScene/logo.png');
    }

    create() : void
    {
        this.logo = this.add.image(512, 384, 'logo');

        
    }

    
}