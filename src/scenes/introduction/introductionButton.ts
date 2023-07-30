import GlobalVariables from "../../utils/GlobalVariables";

export default class introductionButton extends Phaser.Scene
{
    v! : GlobalVariables;

    next! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables)
    {
        super({ key : 'introductionButton' });
        this.v = v;
    }

    preload() : void
    {
        this.load.image('next', './assets/scenes/introduction/next.png');
    }

    create() : void
    {
        this.next = this.add.image(810, 555, 'next').setOrigin(0);

        this.next.setInteractive({useHandCursor : true});


        this.next.on('pointerdown', () => { 
            this.scene.start('initialScene');

            this.scene.stop('introductionBackground');
            this.scene.stop('introductionText');
            this.scene.stop('introductionButton');
        });
    }
}