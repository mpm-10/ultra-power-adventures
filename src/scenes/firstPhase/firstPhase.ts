import informationsBars from "../../elements/informationsBars";
import firstPhaseBackground from "./firstPhaseBackground";
import firstPhaseBackground1 from "./firstPhaseBackground";
import { firstPhaseFunctions } from "./firstPhaseFunctions";

export default class firstPhase extends Phaser.Scene
{
    v! : firstPhaseFunctions
    background! : firstPhaseBackground;
    informationsBars! : informationsBars;

    constructor()
    {
        super({key : 'firstPhase'});
    }

    create() : void
    {
        this.v = new firstPhaseFunctions();

        this.background = new firstPhaseBackground1(this.v);
        this.informationsBars = new informationsBars(this.v);


        this.scene.add('firstPhaseBackground', this.background, true)
        this.scene.add('informationsBars', this.informationsBars, true)
    }
}