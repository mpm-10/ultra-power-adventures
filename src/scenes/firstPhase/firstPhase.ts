import GlobalVariables from "../../utils/GlobalVariables";

export default class firstPhase extends Phaser.Scene
{
    v! : GlobalVariables
    

    constructor(v : GlobalVariables)
    {
        super({ key : 'firstPhase' });
        
        this.v = v;
    }

    create() : void
    {
        this.scene.start('firstPhaseBackground');
        this.scene.start('informationsBars');
        this.scene.start('firstPhaseButton');
    }
}