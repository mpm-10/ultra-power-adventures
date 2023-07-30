import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";


export default class selectPowerScreenBackground extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;
    
    menuBackground! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'selectPowerScreenBackground' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('menuBackground', './assets/scenes/selectPowerScreen/menuBackground.png');
    }

    create() : void
    {

        const width = this.scale.width;
	    const height = this.scale.height;

	    this.add.image(width * 0.5, height * 0.5, 'menuBackground').setScrollFactor(0);
    }

}