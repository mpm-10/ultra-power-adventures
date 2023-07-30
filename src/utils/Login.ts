import AxiosImp from "../connection/AxiosImp";
import GlobalVariables from "./GlobalVariables";

export default class Login extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;
    
    temp_nickname! : string | null;
    temp_password! : string | null;
    temp_result! : boolean[];

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'login' });

        this.v = v;

        this.axiosImp = axiosImp;
    }

    async loginPrompt() : Promise<void>
    {
        while(!this.v.loginIsAccepted)
        {
            this.temp_nickname = prompt("Insira o Nickname: ");

            if(this.temp_nickname == null)
            {
                break;
            }
            else if(this.temp_nickname == '')
            {
                alert("Insira um Nickname!");
                continue;
            }

            this.temp_password = prompt("Insira o Password: ");

            if(this.temp_password == null)
            {
                break;
            }
            else if(this.temp_password == '')
            {
                alert("Insira um Password!");
                continue;
            }

            await this.axiosImp.verifyUser(this.temp_nickname, this.temp_password).then((result) => {
                this.temp_result = result;
            });

            console.log(this.temp_result)

            if(this.temp_result[0] == false && this.temp_result[1] == false)
            {
                this.v.nickname = this.temp_nickname.trim();
                this.v.password = this.temp_password.trim();

                alert("Usuário Criado com Sucesso! Novo Progresso Criado!");

                this.axiosImp.createProgress();

                this.v.loginIsAccepted = true;
            }
            else if(this.temp_result[0] == true && this.temp_result[1] == false)
            {
                this.v.nickname = this.temp_nickname.trim();
                this.v.password = this.temp_password.trim();

                alert("Senha Incorreta!");

                this.v.loginIsAccepted = false;
            }
            else if(this.temp_result[0] == true && this.temp_result[1] == true)
            {
                this.v.nickname = this.temp_nickname.trim();
                this.v.password = this.temp_password.trim();

                alert("Usuário já Existente! Progresso Recuperado com Sucesso!");

                this.axiosImp.recoveryProgress();

                this.v.loginIsAccepted = true;
            }
        }
    }
}