import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class selectPowerScreenButtons extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp

    next! : Phaser.GameObjects.Image;
    prev! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'selectPowerScreenButtons' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('next', './assets/scenes/selectPowerScreen/next.png');
        this.load.image('prev', './assets/scenes/selectPowerScreen/prev.png');
    }

    create() : void
    {
        
        this.prev = this.add.image(210, 540, 'prev');
        this.next = this.add.image(810, 540, 'next');

        this.prev.setInteractive({useHandCursor : true});

        this.prev.on('pointerdown', async () => { 

            let return_initial_scene = confirm("Deseja Voltar para a Tela Inicial? \nO login deverá ser realizado novamente.");

            // Botão de Voltar

            if(return_initial_scene == true)
            {
                this.v.nickname = "default";
                this.v.password = "default";

                this.v.power1 = 0;
                this.v.power2 = 0;

                this.v.selected_powers = [false, false, false, false, false];
                this.v.disponible_powers = [true, true, true, true, true];

                this.v.qtd_powers_selected = 0;

                this.scene.start('initialScene');
                    
                this.scene.stop('selectPowerScreenBackground');
                this.scene.stop('selectPowerScreenOptions');
                this.scene.stop('selectPowerScreenButtons');
    
                this.scene.stop('firstPhaseButton');
                this.scene.stop('firstPhaseBackground');
                this.scene.stop('informationsBars');
    
                this.v.loginIsAccepted = false;
            }
        });

        this.next.setInteractive({useHandCursor : true});

        this.next.on('pointerdown', async () => { 

            await this.axiosImp.saveProgress();

            this.scene.start('firstPhase');

            this.scene.stop('selectPowerScreenBackground');
            this.scene.stop('selectPowerScreenOptions');
            this.scene.stop('selectPowerScreenButtons');
        });
        
    }

    
}