import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class rankingScreenButton extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;

    prev! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'rankingScreenButton' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('prev', './assets/scenes/rankingScreen/prev.png');
    }

    create() : void
    {
        this.prev = this.add.image(10, 550, 'prev').setOrigin(0);

        this.prev.setInteractive({useHandCursor : true});


        this.prev.on('pointerdown', () => { 
            this.scene.stop('rankingScreenBackground');
            this.scene.stop('rankingScreenText');
            this.scene.stop('rankingScreenButton');

            this.scene.start('initialSceneButtons');
        });
    }
}