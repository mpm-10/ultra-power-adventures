import GlobalVariables from "../../utils/GlobalVariables";

export default class firstPhaseButton extends Phaser.Scene
{
    v! : GlobalVariables;

    pause! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables)
    {
        super({ key : 'firstPhaseButton' });
        this.v = v;
    }

    preload() : void
    {
        this.load.image('pause', './assets/scenes/firstPhase/pause.png');
    }

    create() : void
    {
        this.pause = this.add.image(900, 125, 'pause').setOrigin(0).setDisplaySize(125, 125);

        this.pause.setInteractive({useHandCursor : true});


        this.pause.on('pointerdown', () => { 
            this.scene.pause('informationsBars');
            this.scene.pause('firstPhaseBackground');
            this.scene.pause('firstPhaseButton');

            this.scene.start("pauseScreen");

            this.scene.bringToTop("pauseScreenBackground");
            this.scene.bringToTop("pauseScreenOptions");
            this.scene.bringToTop("pauseScreenButtons");

        });
    }
}