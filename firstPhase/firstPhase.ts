import AxiosImp from "../../connection/AxiosImp";
import informationsBars from "../../elements/informationsBars";
import GlobalVariables from "../../utils/GlobalVariables";
import firstPhaseBackground from "./firstPhaseBackground";

export default class firstPhase extends Phaser.Scene
{
    v! : GlobalVariables
    firstPhaseBackground! : firstPhaseBackground;
    informationsBars! : informationsBars;
    axiosImp! : AxiosImp;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'firstPhase' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    create() : void
    {

        this.firstPhaseBackground = new firstPhaseBackground(this.v, this.axiosImp);
        this.informationsBars = new informationsBars(this.v, this.axiosImp);

        this.scene.add('firstPhaseBackground', this.firstPhaseBackground, true);
        this.scene.add('informationsBars', this.informationsBars, true);
    }
}