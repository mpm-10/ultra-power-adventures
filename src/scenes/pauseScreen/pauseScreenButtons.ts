import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class pauseScreenButtons extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp

    next! : Phaser.GameObjects.Image;
    prev! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'pauseScreenButtons' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('next', './assets/scenes/pauseScreen/next.png');
        this.load.image('prev', './assets/scenes/pauseScreen/prev.png');
    }

    async create() : Promise<void>
    {
        
        this.prev = this.add.image(210, 540, 'prev');
        this.next = this.add.image(810, 540, 'next');

        this.prev.setInteractive({useHandCursor : true});

        this.prev.on('pointerdown', async () => { 

            let return_initial_scene = confirm("Deseja Voltar para a Tela Inicial? \nO login deverá ser realizado novamente.");

            // Botão de Voltar

            if(return_initial_scene == true)
            {
                await this.axiosImp.saveProgress();

                this.v.nickname = "default";
                this.v.password = "default";

                this.v.power1 = 0;
                this.v.power2 = 0;

                this.v.selected_powers = [false, false, false, false, false];
                this.v.disponible_powers = [true, true, true, true, true];

                this.v.qtd_powers_selected = 0;

                this.scene.start('initialScene');
                    
                this.scene.stop('firstPhaseBackground');
                this.scene.stop('firstPhaseButtons');
                this.scene.stop('informationsBars');
    
                this.scene.stop('pauseScreenButtons');
                this.scene.stop('pauseScreenOptions');
                this.scene.stop('pauseScreenBackground');
    
                this.v.loginIsAccepted = false;
            }
        });

        this.next.setInteractive({useHandCursor : true});

        this.next.on('pointerdown', async () => { 

            this.scene.resume('firstPhaseBackground');
            this.scene.resume('informationsBars');
            this.scene.start('firstPhaseButton');
                
            this.scene.stop('pauseScreenButtons');
            this.scene.stop('pauseScreenOptions');
            this.scene.stop('pauseScreenBackground');
        });
        
    }

    
}