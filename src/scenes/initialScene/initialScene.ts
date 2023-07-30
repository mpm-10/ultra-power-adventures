import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class initialScene extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;

    

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'initialScene' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    create() : void
    {
        this.scene.start('initialSceneBackground');
        this.scene.start('initialSceneLogo');
        this.scene.start('initialSceneButtons');
    }
}