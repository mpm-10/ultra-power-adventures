import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";
import Login from "../../utils/Login";

export default class initialSceneButtons extends Phaser.Scene
{
    v! : GlobalVariables;
    login! : Login;
    axiosImp! : AxiosImp

    play! : Phaser.GameObjects.Image;
    prize! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'initialSceneButtons' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('play', './assets/scenes/initialScene/play.png');
        this.load.image('prize', './assets/scenes/initialScene/prize.png');
    }

    create() : void
    {
        this.login = new Login(this.v, this.axiosImp);
        
        this.play = this.add.image(375, 555, 'play');
        this.prize = this.add.image(675, 555, 'prize');

        this.play.setInteractive({useHandCursor : true});

        this.play.on('pointerdown', async () => { 
           await this.login.loginPrompt();

           if(this.v.loginIsAccepted == true)
           {
                this.scene.start('selectPowerScreen');

                this.scene.stop('initialSceneBackground');
                this.scene.stop('initialSceneLogo');
                this.scene.stop('initialSceneButtons');
           }  
        });


        this.prize.setInteractive({useHandCursor : true});

        this.prize.on('pointerdown', async () => { 
            this.scene.start('rankingScreen');
         });

    }

    
}