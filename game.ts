import AxiosImp from "./connection/AxiosImp";
import IProgress from "./connection/models/IProgress";
import informationsBars from "./elements/informationsBars";
import firstPhase from "./scenes/firstPhase/firstPhase";
import firstPhaseBackground from "./scenes/firstPhase/firstPhaseBackground";
import firstPhaseButton from "./scenes/firstPhase/firstPhaseButton";
import initialScene from "./scenes/initialScene/initialScene";
import initialSceneBackground from "./scenes/initialScene/initialSceneBackground";
import initialSceneButtons from "./scenes/initialScene/initialSceneButtons";
import initialSceneLogo from "./scenes/initialScene/initialSceneLogo";
import Introduction from "./scenes/introduction/introduction";
import introductionBackground from "./scenes/introduction/introductionBackground";
import introductionButton from "./scenes/introduction/introductionButton";
import introductionText from "./scenes/introduction/introductionText";
import pauseScreen from "./scenes/pauseScreen/pauseScreen";
import pauseScreenBackground from "./scenes/pauseScreen/pauseScreenBackground";
import pauseScreenButtons from "./scenes/pauseScreen/pauseScreenButtons";
import pauseScreenOptions from "./scenes/pauseScreen/pauseScreenOptions";
import rankingScreen from "./scenes/rankingScreen/rankingScreen";
import rankingScreenBackground from "./scenes/rankingScreen/rankingScreenBackground";
import rankingScreenButton from "./scenes/rankingScreen/rankingScreenButton";
import rankingScreenText from "./scenes/rankingScreen/rankingScreenText";
import selectPowerScreen from "./scenes/selectPowerScreen/selectPowerScreen";
import selectPowerScreenBackground from "./scenes/selectPowerScreen/selectPowerScreenBackground";
import selectPowerScreenButtons from "./scenes/selectPowerScreen/selectPowerScreenButtons";
import selectPowerScreenOptions from "./scenes/selectPowerScreen/selectPowerScreenOptions";
import GlobalVariables from "./utils/GlobalVariables";



export default class Game extends Phaser.Scene
{

    v! : GlobalVariables;
    axiosImp! : AxiosImp;

    introduction! : Introduction;
    introductionBackground! : introductionBackground;
    introductionText! : introductionText;
    introductionButton! : introductionButton;
    
    initialScene! : initialScene;
    initialSceneBackground! : initialSceneBackground;
    initialSceneLogo! : initialSceneLogo;
    initialSceneButtons!  : initialSceneButtons;

    rankingScreen! : rankingScreen;
    rankingScreenBackground! : rankingScreenBackground;
    rankingScreenButton! : rankingScreenButton;
    rankingScreenText! : rankingScreenText;
    
    selectPowerScreen! : selectPowerScreen;
    selectPowerScreenBackground! : selectPowerScreenBackground;
    selectPowerScreenOptions! : selectPowerScreenOptions;
    selectPowerScreenButtons! : selectPowerScreenButtons;

    pauseScreen! : pauseScreen;
    pauseScreenBackground! : pauseScreenBackground;
    pauseScreenOptions! : pauseScreenOptions;
    pauseScreenButtons! : pauseScreenButtons;

    informationsBars! : informationsBars;
    
    firstPhase! : firstPhase;
    firstPhaseBackground! : firstPhaseBackground;
    firstPhaseButton! : firstPhaseButton;

    
    progress : IProgress = {
        nickname : "default",
        password : "default",
        time_game : 0,
        lifes : 10,
        score : 1,
        level : 2,
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

        this.v.life_limit = 300 + (50 * (this.v.level - 1));
        this.v.stamina_limit = 300 + (50 * (this.v.level - 1));
        this.v.shield_limit = 200 + (50 * (this.v.level - 1));
        this.v.armor_limit = 150 + (50 * (this.v.level - 1));
        

        this.introduction = new Introduction(this.v);
        this.introductionBackground = new introductionBackground(this.v);
        this.introductionText = new introductionText(this.v);
        this.introductionButton = new introductionButton(this.v);

        this.initialScene = new initialScene(this.v, this.axiosImp);
        this.initialSceneBackground = new initialSceneBackground(this.v, this.axiosImp);
        this.initialSceneLogo = new initialSceneLogo(this.v, this.axiosImp);
        this.initialSceneButtons = new initialSceneButtons(this.v, this.axiosImp);

        this.rankingScreen = new rankingScreen(this.v, this.axiosImp);
        this.rankingScreenBackground = new rankingScreenBackground(this.v, this.axiosImp);
        this.rankingScreenButton = new rankingScreenButton(this.v, this.axiosImp);
        this.rankingScreenText = new rankingScreenText(this.v, this.axiosImp);
        
        this.selectPowerScreen = new selectPowerScreen(this.v, this.axiosImp);
        this.selectPowerScreenBackground = new selectPowerScreenBackground(this.v, this.axiosImp);
        this.selectPowerScreenOptions = new selectPowerScreenOptions(this.v, this.axiosImp);
        this.selectPowerScreenButtons = new selectPowerScreenButtons(this.v, this.axiosImp);

        this.pauseScreen = new pauseScreen(this.v, this.axiosImp);
        this.pauseScreenBackground = new pauseScreenBackground(this.v, this.axiosImp);
        this.pauseScreenOptions = new pauseScreenOptions(this.v, this.axiosImp);
        this.pauseScreenButtons = new pauseScreenButtons(this.v, this.axiosImp);
        
        this.firstPhase = new firstPhase(this.v);
        this.firstPhaseBackground = new firstPhaseBackground(this.v);
        this.firstPhaseButton = new firstPhaseButton(this.v);

        this.informationsBars = new informationsBars(this.v, this.axiosImp);

        this.scene.add('introduction', this.introduction, true);
        this.scene.add('introductionBackground', this.introductionBackground, false);
        this.scene.add('introductionText', this.introductionText, false);
        this.scene.add('introductionButton', this.introductionButton, false);
        
        this.scene.add('initialScene', this.initialScene, false);
        this.scene.add('initialSceneBackground', this.initialSceneBackground, false);
        this.scene.add('initialSceneLogo', this.initialSceneLogo, false);
        this.scene.add('initialSceneButtons', this.initialSceneButtons, false);

        this.scene.add('rankingScreen', this.rankingScreen, false);
        this.scene.add('rankingScreenBackground', this.rankingScreenBackground, false);
        this.scene.add('rankingScreenButton', this.rankingScreenButton, false);
        this.scene.add('rankingScreenText', this.rankingScreenText, false);

        this.scene.add('selectPowerScreen', this.selectPowerScreen, false);
        this.scene.add('selectPowerScreenBackground', this.selectPowerScreenBackground, false);
        this.scene.add('selectPowerScreenOptions', this.selectPowerScreenOptions, false);
        this.scene.add('selectPowerScreenButtons', this.selectPowerScreenButtons, false);

        this.scene.add('pauseScreen', this.pauseScreen, false);
        this.scene.add('pauseScreenBackground', this.pauseScreenBackground, false);
        this.scene.add('pauseScreenOptions', this.pauseScreenOptions, false);
        this.scene.add('pauseScreenButtons', this.pauseScreenButtons, false);

        this.scene.add('firstPhase', this.firstPhase, false);
        this.scene.add('firstPhaseBackground', this.firstPhaseBackground, false);
        this.scene.add('firstPhaseButton', this.firstPhaseButton, false);

        this.scene.add('informationsBars', this.informationsBars, false);

        this.time.addEvent({ delay: 1000, callback : this.onEvent, callbackScope: this, loop: true });
    }

    update(): void 
    {
    
        
        this.v.life_proportion = 260 / this.v.life_limit;
        this.v.stamina_proportion = 260 / this.v.stamina_limit;
        this.v.shield_proportion = 260 / this.v.shield_limit;
        this.v.armor_proportion = 260 / this.v.armor_limit;

        this.v.life_bar = new Phaser.Geom.Rectangle(0,0, 0 + (this.v.life * this.v.life_proportion), 40);
        this.v.stamina_bar = new Phaser.Geom.Rectangle(0,0, 0 + (this.v.stamina * this.v.stamina_proportion), 40);
        this.v.shield_bar = new Phaser.Geom.Rectangle(0,0, 0 + (this.v.shield * this.v.shield_proportion), 40);
        this.v.armor_bar = new Phaser.Geom.Rectangle(0,0, 0 + (this.v.armor * this.v.armor_proportion), 40);

        this.v.experienceByLevel = this.v.experienceLevels[this.v.level - 1]

        this.v.power1_position = this.v.power1 - 1;
        this.v.power2_position = this.v.power2 - 1;

        
        if(this.v.experience >= this.v.experienceLevels[this.v.level - 1])
        {
            this.v.level++;
        }

        if(this.v.powerIsActivated[this.v.power1_position] == false)
        {
            this.v.powerIsActivated[this.v.power1_position] = true;
        }

        if(this.v.powerIsActivated[this.v.power2_position] == false)
        {
            this.v.powerIsActivated[this.v.power2_position] = true;
        }

        for (let i = 0; i < this.v.powerIsActivated.length; i++)
        {
            if(i == this.v.power1_position || i == this.v.power2_position)
            {
                continue;
            }

            this.v.powerIsActivated[i] = false;
        }
        
    }

    async onEvent ()
    {
        let temp_best_score : number = 0;

        this.v.time_game_update++;

        if(this.v.time_game_update % 10 == 0)
        {
            this.axiosImp.getBestScore().then((best_score) => {
                temp_best_score = best_score;
            });

            this.v.best_score = temp_best_score;

            console.log(this.v.best_score);
        }

        if(this.v.time_game % 10 == 0)
        {
            
            if(this.v.stamina > 0 && this.v.life < this.v.life_limit)
            {
                this.v.stamina = this.v.stamina - (10 + (10 * (this.v.level - 1)));
                this.v.life = this.v.life + (10 + (10 * (this.v.level - 1)));
            }
        }

        if(this.v.time_game % 15 == 0)
        {
            if(this.v.shield < this.v.shield_limit)
            {
                this.v.shield = this.v.shield + (20 + (10 * (this.v.level - 1)));
            }
        }

        if(this.v.time_game % 30 == 0)
        {
            if(this.v.armor < this.v.armor_limit)
            {
                this.v.armor = this.v.armor + (30 + (10 * (this.v.level - 1)));
            }
        }

    }
    
}
