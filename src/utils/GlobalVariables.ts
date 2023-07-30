import { GlobalVariablesInterface } from "./GlobalVariablesInterface";


export default class GlobalVariables implements GlobalVariablesInterface
{
    
    // Variáveis de Usuário
    
    nickname : string = "default";
    password : string = "default";

    // Variáveis das Barras de Status

    time_game : number = 0;
    lifes : number = 10;
    score : number = 0;
    level : number = 1;
    experience : number = 0;
    coins : number = 0;
    power1 : number = 0;
    power2 : number = 0;
    life : number = 300;
    stamina : number = 0;
    shield : number = 200;
    armor : number = 150; 

    // Variáveis de Cálculo de Recursos do Jogador

    life_limit! : number;
    stamina_limit! : number;
    shield_limit! : number;
    armor_limit! : number;
    life_bar! : Phaser.Geom.Rectangle;
    stamina_bar! : Phaser.Geom.Rectangle;
    shield_bar! : Phaser.Geom.Rectangle;
    armor_bar! : Phaser.Geom.Rectangle;
    proportion! : number;
    best_score : number = 0;

    powerIsActivated : boolean[] = [false, false, false, false, false];
    power1_position! : number;
    power2_position! : number;

    experienceLevels : number[] = [500, 1000, 2000, 3500, 5500, 7500, 10500, 14000, 18000, 22500, 27000];
    experienceByLevel! : number;

    life_proportion! : number;
    stamina_proportion! : number;
    shield_proportion! : number;
    armor_proportion! : number;

    scenes: Phaser.Scene[] = [];

    loginIsAccepted : boolean = false;

    selected_powers : boolean[] = [false, false, false, false, false];
    disponible_powers : boolean[] = [true, true, true, true, true];

    gameIsStart : boolean = false;

    qtd_powers_selected : number = 0;

    time_game_update : number = 0;

    ranking: (string | number)[][] = []; 
}

