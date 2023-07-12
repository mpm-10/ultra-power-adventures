import AxiosImp from "./connection/AxiosImp";
import IProgress from "./connection/models/IProgress";
import informationsBars from "./elements/informationsBars";
import firstPhase from "./scenes/firstPhase/firstPhase";
import GlobalVariables from "./utils/GlobalVariables";



export default class Game extends Phaser.Scene
{
    v! : GlobalVariables;
    informationsBars! : informationsBars;
    firstPhase! : firstPhase;
    axiosImp! : AxiosImp;
    progress : IProgress = {
        nickname : "",
        password : "",
        time_game : 0,
        lifes : 10,
        score : 0,
        level : 1,
        experience : 0,
        coins: 0,
        power1: 0,
        power2: 0,
        life: 300,
        stamina: 0,
        shield: 200,
        armor: 150
    }

    constructor()
    {
        super({ key : 'game' });
    }

    create() : void
    {
        this.v = new GlobalVariables();
        this.axiosImp = new AxiosImp(this.v, this.progress);

        this.firstPhase = new firstPhase(this.v, this.axiosImp);
        this.informationsBars = new informationsBars(this.v, this.axiosImp);


        this.scene.add('firstPhase', this.firstPhase, true);
    }
}