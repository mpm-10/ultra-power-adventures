import GlobalVariables from "../../utils/GlobalVariables";

export default class Introduction extends Phaser.Scene
{
    v! : GlobalVariables
    

    constructor(v : GlobalVariables)
    {
        super({ key : 'introduction' });
        
        this.v = v;
    }

    create() : void
    {
        this.scene.start('introductionBackground');
        this.scene.start('introductionText');
        this.scene.start('introductionButton');
    }
}