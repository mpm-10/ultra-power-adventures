

export interface GlobalVariablesInterface
{
    nickname : string,
    password : string,
    time_game : number,
    lifes : number,
    score : number,
    level : number,
    experience : number,
    coins : number,
    power1 : number,
    power2 : number,
    life : number,
    stamina : number, 
    shield : number,
    armor : number,

    life_limit : number,
    stamina_limit : number,
    shield_limit : number,
    armor_limit : number,

    life_bar : Phaser.Geom.Rectangle,
    stamina_bar : Phaser.Geom.Rectangle,
    shield_bar : Phaser.Geom.Rectangle,
    armor_bar : Phaser.Geom.Rectangle,

    life_proportion : number,
    stamina_proportion : number,
    shield_proportion : number,
    armor_proportion : number,

    best_score : number,

    powerIsActivated : boolean[],
    power1_position : number,
    power2_position : number,
    
    experienceByLevel : number,

    experienceLevels : number[],

    scenes : Phaser.Scene[],

    loginIsAccepted : boolean,

    selected_powers : boolean[],
    disponible_powers : boolean[],

    gameIsStart : boolean,

    qtd_powers_selected : number,

    time_game_update : number,

    ranking : Array<string | number>[];
}