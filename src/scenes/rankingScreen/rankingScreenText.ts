import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";
import KeyboardKeys from "../../utils/KeyboardKeys";

export default class rankingScreenText extends Phaser.Scene
{
    keys! : KeyboardKeys;
    v! : GlobalVariables; 
    axiosImp! : AxiosImp;   

    text_verify_ranking! : Phaser.GameObjects.Text;
    text_informations! : Phaser.GameObjects.Text;
    text_ranking! : Phaser.GameObjects.Text;

    rankings : string[] = [];

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'rankingScreenText' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    async create() : Promise<void>
    {
        let temp_rankings : Array<string | number>[] = [];

        await this.axiosImp.getRanking().then((rankings) => {
            rankings.forEach(ranking => {
                temp_rankings.push(ranking);
            });
        })

        console.log(temp_rankings.length);

        for (let i = 0; i < Math.min(temp_rankings.length, 10); i++) 
        {
            this.rankings.push(`${i + 1}.   ` +
                              `|              ${temp_rankings[i][0]}            ` + 
                              `|              ${temp_rankings[i][1]}            ` + 
                              `|              ${temp_rankings[i][2]}            ` + 
                              `|              ${temp_rankings[i][3]}            |`);
        }

        let informations = '| -----Nickname----- | -----Pontuação----- | -----Nível----- | -----Experiência----- |';

        this.text_verify_ranking = this.add.text(275, 100, 'Ranking Completo dos Jogadores: ', { font : '30px Ubuntu', color: '#008000'}).setScrollFactor(0);

        this.text_informations = this.add.text(155, 150, informations,{ font : '24px Ubuntu', color: '#008000'}).setScrollFactor(0);

        this.text_ranking = this.add.text(125, 250, this.rankings,{ font : '20px Ubuntu', color: '#008000'}).setScrollFactor(0);

        for (let i = 0; i < Math.min(temp_rankings.length, 10); i++) 
        {
            this.rankings.pop();
        }
        
    }
}

