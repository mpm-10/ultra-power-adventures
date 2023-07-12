import { GlobalVariablesInterface } from "./GlobalVariablesInterface";


export default class GlobalVariables implements GlobalVariablesInterface
{

    // Variáveis de Usuário
    
    nickname! : string;
    password! : string;

    // Variáveis das Barras de Status

    time_game! : number;
    lifes! : number;
    score! : number;
    level! : number;
    experience! : number;
    coins! : number;
    power1! : number;
    power2! : number;
    life! : number;
    stamina! : number;
    shield! : number;
    power! : number;
    armor! : number;   
}