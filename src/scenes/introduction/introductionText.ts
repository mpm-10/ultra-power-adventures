import GlobalVariables from "../../utils/GlobalVariables";
import KeyboardKeys from "../../utils/KeyboardKeys";

export default class introductionText extends Phaser.Scene
{
    keys! : KeyboardKeys;
    v! : GlobalVariables;

    earth! : Phaser.GameObjects.Image;

    history : string[] = [];

    historyPart : number = 0;

    text_history! : Phaser.GameObjects.Text;

    text_skip! : Phaser.GameObjects.Text;

    timeIntroduction : number = 0;

    constructor(v : GlobalVariables)
    {
        super({ key : 'introductionText' });
        this.v = v;
    }

    preload() : void
    {
        this.load.image('earth', './assets/scenes/introduction/earth.png');
    }

    create() : void
    {
        this.setHistory();

        this.text_history = this.add.text(0, 0, '', { font : '20px Ubuntu', color: '#00ff00'});

        this.text_skip = this.add.text(430, 650, 'Pressione o Botão para Pular', { font : '24px Ubuntu', color: '#00ff00'});

        this.earth = this.add.image(25, 178, 'earth').setOrigin(0).setDisplaySize(384,384);

        this.text_history.setPosition(512, 178);

        this.text_history.setText(this.history[this.historyPart]).setFixedSize(512, 768);

        this.time.addEvent({ delay: 1000, callback : this.onEvent, callbackScope: this, loop: true });
    }

    update(): void 
    {
        this.text_history.setText(this.history[this.historyPart]).setFixedSize(512, 768);    
    }


    setHistory() : void
    {
        let firstPart : string = "Ao longo da história, surgiram, de maneira inexplicável\n" +
                                "pessoas que apresentavam grandes habilidades\n" +
                                "sobre-humanas,apresentando um poder vasto, diverso e\n" +
                                "grande, e tendo como a fonte desse poder um tipo de\n" +
                                "poder natural e secreto...\n" 

        let secondPart : string = "...em conhecimento desse poder, surgiram grupos\n" + 
                                  "secretos de pessoas que estudavam e pesquisavam\n" + 
                                  "essa força natural para conseguir cumprir os\n" + 
                                  "seus próprios objetivos, muitas das vezes para\n" + 
                                  "o mal, como dominar o mundo. Os grupos\n" + 
                                  "secretos escolhem uma ilha grande e remota para\n" +
                                  "desenvolver os seus planos, pois isso esconderia\n" + 
                                  "as suas atividades para o mundo...\n"

        let thirdPart : string = "...em sua configuração atual, essa ilha possui\n" +
                                 "os chamados territórios, que possuem estrutura\n" +
                                 "de reinos, porém com características modernas,\n" +
                                 "e a ilha possui ao todo 10 desses territórios,\n" +
                                 "governado por um líder único, e seus auxiliares\n" +
                                 "Cada líder promove torneios e eventos, com o\n" + 
                                 "objetivo de escolher os melhores guerreiros que\n" + 
                                 "se destacarem para representar cada população.\n" +
                                 "porém, isso é apenas um plano de cada líder\n" +
                                 "para recrutar aqueles que se destacarem\n" + 
                                 "para serem os seus soldados e receber uma\n" + 
                                 "parte do poder secreto para defender os\n" + 
                                 "seus objetivos...\n"

        let forthPart : string = "...entretanto, assim como em tempos antigos,\n" + 
                                 "todos esses problemas sociais causados pelo\n" +
                                 "governo desses líderes únicos esconde um\n" + 
                                 "plano de fundo de dominação mundial...\n"

       

        this.history.push(firstPart);
        this.history.push(secondPart);
        this.history.push(thirdPart);
        this.history.push(forthPart);
    }

    onEvent() : void
    {
        this.timeIntroduction++;

        if(this.timeIntroduction % 5 == 0)
        {
            this.historyPart++;
        }
        if(this.timeIntroduction % 20 == 0)
        {
            this.scene.start('initialScene');

            this.scene.stop('introductionBackground');
            this.scene.stop('introductionText');
            this.scene.stop('introductionButton');
        }
    }
}

