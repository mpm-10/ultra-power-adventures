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

    async indexByNickname(nicknameUser : string) : Promise<IProgress>
    {

        const getProgressByNickname = axios.get<IProgress>("https://api-rest-mongoose.matheusportela4.repl.co/progress/search_nickname/", { params: {nickname : '' + nicknameUser}});

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

            this.progress = getResponse;

            return getResponse;
        });   
        
    }

    async indexByPassword(passwordUser : String) : Promise<IProgress>
    {
        const getProgressByPassword = axios.get<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/search_nickname/', { params: {password : '' + passwordUser}});

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

            this.progress = getResponse;

            return getResponse;
        });   
    }

    async store() : Promise<void>
    {
        await axios.post<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/', this.progress);
    }

    async update(nicknameUser : String) : Promise<void>
    {
        await axios.put<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/', this.progress,  { params: {nickname : '' + nicknameUser}});
    }

    async destroy(nickname : String) : Promise<void>
    {

        await axios.delete<IProgress>('https://api-rest-mongoose.matheusportela4.repl.co/progress/',  { params: {nickname : '' + nickname}});
    }

    async verifyUser(nickname : string, password : string): Promise<boolean[]>
    {
        let exists : boolean[] = [];

        try
        {
            let userVerify = await this.indexByNickname(nickname);

            if(userVerify != null)
            {
                exists.push(true);
            }

            if(userVerify.password == password)
            {
                exists.push(true);
            }
            else
            {
                exists.push(false);
            }
        }
        catch
        {
            exists.push(false);
            exists.push(false);
        }

        return exists;
    }

    async createProgress() : Promise<void>
    {
        this.updateValues();

        this.store();

        this.getBestScore().then((score) => {
            this.v.best_score = score;
        });
    }

    async recoveryProgress() : Promise<void>
    {
        this.indexByNickname(this.v.nickname);
        
        this.updateVariables();

        this.getBestScore().then((score) => {
            this.v.best_score = score;
        });
    }

    async saveProgress() : Promise<void>
    {
        this.updateValues();
        
        this.update(this.v.nickname);
        
        await this.getBestScore().then((score) => {
            this.v.best_score = score;
        });
    }

    async getRanking() : Promise<Array<string | number>[]>
    {
        let ranking : Array<string | number>[] = [];
        let rankingIndex = [];

        let listProgress = await this.show();

        listProgress.forEach(progress => {
            rankingIndex = [progress.nickname, progress.score, progress.level, progress.experience];
            ranking.push(rankingIndex);
        });

        ranking.sort((n1, n2) => {
            if(n1[1] > n2[1])
            {
                return 1;
            }

            if(n1[1] < n2[1])
            {
                return -1;
            }

            return 0;
        });

        return ranking;
    }

    async getBestScore() : Promise<number>
    {
        let bestScore = 0;
        let scores: number[] = [];

        let listProgress = await this.show();

        listProgress.forEach(progress => {
            scores.push(progress.coins);
        });

        scores.reverse();
        bestScore = scores[0];

        return bestScore;
    }


    

}