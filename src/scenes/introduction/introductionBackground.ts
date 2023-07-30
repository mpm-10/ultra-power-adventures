import GlobalVariables from "../../utils/GlobalVariables";
import KeyboardKeys from "../../utils/KeyboardKeys";

export default class introductionBackground extends Phaser.Scene
{
    keys! : KeyboardKeys;
    v! : GlobalVariables;
    
    background5! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables)
    {
        super({ key : 'introductionBackground' });
        this.v = v;
    }

    preload() : void
    {
        this.load.image('background5', './assets/scenes/introduction/background5.png');
    }

    create() : void
    {
        const width = this.scale.width;
	    const height = this.scale.height;

	    this.add.image(width * 0.5, height * 0.5, 'background5').setScrollFactor(0);
    }

}