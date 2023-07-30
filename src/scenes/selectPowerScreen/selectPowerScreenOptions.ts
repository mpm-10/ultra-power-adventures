import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";


export default class selectPowerScreenOptions extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;

    text_select_power! : Phaser.GameObjects.Text;
    text_powers_selected! : Phaser.GameObjects.Text;

    disponible_skill1! : Phaser.GameObjects.Image;
    disponible_skill2! : Phaser.GameObjects.Image;
    disponible_skill3! : Phaser.GameObjects.Image;
    disponible_skill4! : Phaser.GameObjects.Image;
    disponible_skill5! : Phaser.GameObjects.Image;

    selected_skill1! : Phaser.GameObjects.Image;
    selected_skill2! : Phaser.GameObjects.Image;
    selected_skill3! : Phaser.GameObjects.Image;
    selected_skill4! : Phaser.GameObjects.Image;
    selected_skill5! : Phaser.GameObjects.Image;

    text_description_skill1! : Phaser.GameObjects.Text;
    text_description_skill2! : Phaser.GameObjects.Text;
    text_description_skill3! : Phaser.GameObjects.Text;
    text_description_skill4! : Phaser.GameObjects.Text;
    text_description_skill5! : Phaser.GameObjects.Text;

    temp_selected_powers : number[] = [];

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'selectPowerScreenOptions' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('skill1', './assets/scenes/selectPowerScreen/skill1.png');
        this.load.image('skill2', './assets/scenes/selectPowerScreen/skill2.png');
        this.load.image('skill3', './assets/scenes/selectPowerScreen/skill3.png');
        this.load.image('skill4', './assets/scenes/selectPowerScreen/skill4.png');
        this.load.image('skill5', './assets/scenes/selectPowerScreen/skill5.png');
    }

    create() : void
    {
        console.log(this.v.power1, this.v.power2);

        if(this.v.power1 > 0 && this.v.power1 < 6)
        {
            this.v.selected_powers[this.v.power1 - 1] = true;
            this.v.disponible_powers[this.v.power1 - 1] = false;

            this.v.qtd_powers_selected++;
        }

        if(this.v.power2 > 0 && this.v.power2 < 6)
        {
            this.v.selected_powers[this.v.power2 - 1] = true;
            this.v.disponible_powers[this.v.power2 - 1] = false;

            this.v.qtd_powers_selected++;
        }

        this.text_select_power = this.add.text(300, 100, 'Selecione os Seus Poderes Abaixo: ', { font : '30px Ubuntu', color: '#008000'}).setScrollFactor(0);

        let description_skill1 : string = "Poder 1:\n\n" + 
                                          "-Aumenta a Velocidade em 2x por 20s\n" + 
                                          "-Aumenta o Limite da Histamina em 100\n";

        this.disponible_skill1 = this.add.image(130, 150, 'skill1').setOrigin(0).setFlipX(true).setDisplaySize(150,150);
        this.text_description_skill1 = this.add.text(130, 350, description_skill1, { font : '8px Ubuntu', color: '#008000'}).setScrollFactor(0);

        let description_skill2 : string = "Poder 2:\n\n" + 
                                          "-Aumenta o Limite de Vida em 100\n" + 
                                          "-Recupera 50 de Vida\n";

        this.disponible_skill2 = this.add.image(280, 150, 'skill2').setOrigin(0).setFlipX(true).setDisplaySize(150,150);
        this.text_description_skill2 = this.add.text(280, 350, description_skill2, { font : '8px Ubuntu', color: '#008000'}).setScrollFactor(0);

        let description_skill3 : string = "Poder 3:\n\n" + 
                                          "-Aumenta o Ataque em\n 4x por 15s\n" + 
                                          "-Diminui o Dano Recebido em 25%\n";

        this.disponible_skill3 = this.add.image(430, 150, 'skill3').setOrigin(0).setFlipX(true).setDisplaySize(150,150);
        this.text_description_skill3 = this.add.text(430, 350, description_skill3, { font : '8px Ubuntu', color: '#008000'}).setScrollFactor(0);

        let description_skill4 : string = "Poder 4:\n\n" + 
                                          "-Armadura Indestrutível por 30s\n" + 
                                          "-Aumento de 100 Pontos de Armadura\n";

        this.disponible_skill4 = this.add.image(580, 150, 'skill4').setOrigin(0).setFlipX(true).setDisplaySize(150,150);
        this.text_description_skill4 = this.add.text(580, 350, description_skill4, { font : '8px Ubuntu', color: '#008000'}).setScrollFactor(0);

        let description_skill5 : string = "Poder 5:\n\n" + 
                                          "-Escudo não Sofre Dano\n" + 
                                          "-Recupera 100 de Escudo\n";

        this.disponible_skill5 = this.add.image(730, 150, 'skill5').setOrigin(0).setFlipX(true).setDisplaySize(150,150);
        this.text_description_skill5 = this.add.text(730, 350, description_skill5, { font : '8px Ubuntu', color: '#008000'}).setScrollFactor(0);

        this.text_select_power = this.add.text(325, 500, 'Poderes já Selecionados Anteriormente: ', { font : '20px Ubuntu', color: '#008000'}).setScrollFactor(0);

        this.selected_skill1 = this.add.image(350, 550, 'skill1').setOrigin(0).setFlipX(true).setDisplaySize(60,60);
        this.selected_skill2 = this.add.image(410, 550, 'skill2').setOrigin(0).setFlipX(true).setDisplaySize(60,60);
        this.selected_skill3 = this.add.image(470, 550, 'skill3').setOrigin(0).setFlipX(true).setDisplaySize(60,60);
        this.selected_skill4 = this.add.image(530, 550, 'skill4').setOrigin(0).setFlipX(true).setDisplaySize(60,60);
        this.selected_skill5 = this.add.image(590, 550, 'skill5').setOrigin(0).setFlipX(true).setDisplaySize(60,60);


        this.disponible_skill1.setInteractive({useHandCursor : true});


        this.disponible_skill1.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected < 2)
            {
                this.v.disponible_powers[0] = false;
                this.v.selected_powers[0] = true;

                this.v.qtd_powers_selected++;
            }
            else
            {
                alert("Número Máximo de Poderes Alcançado!");
            }
        });

        this.disponible_skill2.setInteractive({useHandCursor : true});

        this.disponible_skill2.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected < 2)
            {
                this.v.disponible_powers[1] = false;
                this.v.selected_powers[1] = true;

                this.v.qtd_powers_selected++;
            }
            else
            {
                alert("Número Máximo de Poderes Alcançado!");
            }
        });

        this.disponible_skill3.setInteractive({useHandCursor : true});

        this.disponible_skill3.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected < 2)
            {
                this.v.disponible_powers[2] = false;
                this.v.selected_powers[2] = true;

                this.v.qtd_powers_selected++;
            }
            else
            {
                alert("Número Máximo de Poderes Alcançado!");
            }
        });

        this.disponible_skill4.setInteractive({useHandCursor : true});

        this.disponible_skill4.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected < 2)
            {
                this.v.disponible_powers[3] = false;
                this.v.selected_powers[3] = true;

                this.v.qtd_powers_selected++;
            }
            else
            {
                alert("Número Máximo de Poderes Alcançado!");
            }
        });

        this.disponible_skill5.setInteractive({useHandCursor : true});

        this.disponible_skill5.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected < 2)
            {
                this.v.disponible_powers[4] = false;
                this.v.selected_powers[4] = true;

                this.v.qtd_powers_selected++;
            }
            else
            {
                alert("Número Máximo de Poderes Alcançado!");
            }
        });


        this.selected_skill1.setInteractive({useHandCursor : true});


        this.selected_skill1.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected > 0)
            {
                this.v.disponible_powers[0] = true;
                this.v.selected_powers[0] = false;

                this.v.qtd_powers_selected--;
            }
            else
            {
                alert("Nenhum Poder Selecionado!");
            }
        });



        this.selected_skill2.setInteractive({useHandCursor : true});


        this.selected_skill2.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected > 0)
            {
                this.v.disponible_powers[1] = true;
                this.v.selected_powers[1] = false;

                this.v.qtd_powers_selected--;
            }
            else
            {
                alert("Nenhum Poder Selecionado!");
            }
        });

        this.selected_skill3.setInteractive({useHandCursor : true});


        this.selected_skill3.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected > 0)
            {
                this.v.disponible_powers[2] = true;
                this.v.selected_powers[2] = false;

                this.v.qtd_powers_selected--;
            }
            else
            {
                alert("Nenhum Poder Selecionado!");
            }
        });

        this.selected_skill4.setInteractive({useHandCursor : true});


        this.selected_skill4.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected > 0)
            {
                this.v.disponible_powers[3] = true;
                this.v.selected_powers[3] = false;

                this.v.qtd_powers_selected--;
            }
            else
            {
                alert("Nenhum Poder Selecionado!");
            }
        });

        this.selected_skill5.setInteractive({useHandCursor : true});

        this.selected_skill5.on('pointerdown', () => { 
            if(this.v.qtd_powers_selected > 0)
            {
                this.v.disponible_powers[4] = true;
                this.v.selected_powers[4] = false;

                this.v.qtd_powers_selected--;
            }
            else
            {
                alert("Nenhum Poder Selecionado!");
            }
        });
    }

    update(): void 
    {
        this.disponible_skill1.setVisible(this.v.disponible_powers[0]);
        this.disponible_skill2.setVisible(this.v.disponible_powers[1]);
        this.disponible_skill3.setVisible(this.v.disponible_powers[2]);
        this.disponible_skill4.setVisible(this.v.disponible_powers[3]);
        this.disponible_skill5.setVisible(this.v.disponible_powers[4]);

        this.selected_skill1.setVisible(this.v.selected_powers[0]);
        this.selected_skill2.setVisible(this.v.selected_powers[1]);
        this.selected_skill3.setVisible(this.v.selected_powers[2]);
        this.selected_skill4.setVisible(this.v.selected_powers[3]);
        this.selected_skill5.setVisible(this.v.selected_powers[4]);

        for (let i = 0; i < this.v.selected_powers.length; i++) 
        {
            if(this.v.selected_powers[i] == true)
            {
                this.temp_selected_powers.push(i+1);
            }    
            else
            {
                continue;
            }
        }

        this.v.power1 = this.temp_selected_powers[0];
        this.v.power2 = this.temp_selected_powers[1];

        this.temp_selected_powers.pop();
        this.temp_selected_powers.pop();
    }

}