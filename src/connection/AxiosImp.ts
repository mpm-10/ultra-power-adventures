import axios, { Axios } from "axios";
import GlobalVariables from "../utils/GlobalVariables";
import IProgress from "./models/IProgress";


export default class AxiosImp extends Axios
{
    v! : GlobalVariables;
    progress! : IProgress;

    constructor(v : GlobalVariables, progress : IProgress)
    {
        super({url : "https://api-rest-mongoose.matheusportela4.repl.co"});
        this.v = v;
        this.progress = progress;
    }

    // Atualização de Valores

    updateVariables() : void
    {
        this.v.nickname = this.progress.nickname;
        this.v.password = this.progress.password;
        this.v.time_game = this.progress.time_game;
        this.v.time_game = this.progress.lifes;
        this.v.score = this.progress.score;
        this.v.level = this.progress.level;
        this.v.experience = this.progress.experience;
        this.v.coins = this.progress.coins;
        this.v.power1 = this.progress.power1;
        this.v.power2 = this.progress.power2;
        this.v.life = this.progress.life;
        this.v.stamina = this.progress.stamina;
        this.v.shield = this.progress.shield;
        this.v.armor = this.progress.armor;
    }

    updateValues() : void
    {
        this.progress.nickname = this.v.nickname;
        this.progress.password = this.v.password;
        this.progress.time_game = this.v.time_game;
        this.progress.lifes = this.v.lifes;
        this.progress.score = this.v.score;
        this.progress.level = this.v.level;
        this.progress.experience = this.v.experience;
        this.progress.coins = this.v.coins;
        this.progress.power1 = this.v.power1;
        this.progress.power2 = this.v.power2;
        this.progress.life = this.v.life;
        this.progress.stamina = this.v.stamina;
        this.progress.shield = this.v.shield;
        this.progress.armor = this.v.armor;
    }

    // Rotas

    async show() : Promise<IProgress[]>
    {
        let listProgress : Array<IProgress> = new Array<IProgress>;

        const getListProgress = axios.get<IProgress[]>('https://api-rest-mongoose.matheusportela4.repl.co/progress');

        return await getListProgress.then((response) => {
            let res = response.data;

            res.forEach(progress => {
                const getResponse : IProgress =
                {
                    nickname : progress.nickname,
                    password : progress.password,
                    time_game : progress.time_game,
                    lifes : progress.lifes,
                    score : progress.score,
                    level : progress.level,
                    experience : progress.experience,
                    coins : progress.coins,
                    power1 : progress.power1,
                    power2 : progress.power2,
                    life : progress.life,
                    stamina : progress.stamina,
                    shield : progress.shield,
                    armor: progress.armor
                };

                listProgress.push(getResponse)
            });

            console.log(listProgress);
            return listProgress;
        })
    }

    async indexByNickname(nickname : String) : Promise<IProgress>
    {

        const getProgressByNickname = axios.get<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/search_nickname/' + nickname);

        return await getProgressByNickname.then((response) => {
            let res = response.data;
                
            const getResponse : IProgress =
            {
                nickname : res.nickname,
                password : res.password,
                time_game : res.time_game,
                lifes : res.lifes,
                score : res.score,
                level : res.level,
                experience : res.experience,
                coins : res.coins,
                power1 : res.power1,
                power2 : res.power2,
                life : res.life,
                stamina : res.stamina,
                shield : res.shield,
                armor: res.armor
            };

            return getResponse;
        });   
        
    }

    async indexByPassword(password : String) : Promise<IProgress>
    {
        const getProgressByPassword = axios.get<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/search_nickname/' + password);

        return await getProgressByPassword.then((response) => {
            let res = response.data;
                
            const getResponse : IProgress =
            {
                nickname : res.nickname,
                password : res.password,
                time_game : res.time_game,
                lifes : res.lifes,
                score : res.score,
                level : res.level,
                experience : res.experience,
                coins : res.coins,
                power1 : res.power1,
                power2 : res.power2,
                life : res.life,
                stamina : res.stamina,
                shield : res.shield,
                armor: res.armor
            };

            return getResponse;
        });   
    }

    async store() : Promise<void>
    {
        await axios.post<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/', this.progress);
    }

    async update(nickname : String) : Promise<void>
    {
        await axios.put<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/' + nickname, this.progress);
    }

    async destroy(nickname : String) : Promise<void>
    {

        await axios.delete<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/' + nickname);
    }

    async getBestScore() : Promise<number>
    {
        let bestScore = 0;
        let scores: number[] = [];

        let listProgress = this.show();

        (await listProgress).forEach(progress => {
            scores.push(progress.coins);
        });

        scores.reverse();
        bestScore = scores[0];

        return bestScore;
    }

}