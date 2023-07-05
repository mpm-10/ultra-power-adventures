import { firstPhaseFunctions } from "../scenes/firstPhase/firstPhaseFunctions";

export default class informationsBars extends Phaser.Scene
{
    v! : firstPhaseFunctions;
    informationBarsBackground! : Phaser.GameObjects.Image;

    hb_hp! : Phaser.GameObjects.Image;
    hb_sp! : Phaser.GameObjects.Image;
    hb_front1! : Phaser.GameObjects.Image;
    hb_front2! : Phaser.GameObjects.Image;

    hb_shadow! : Phaser.GameObjects.Image;
    hb_health! : Phaser.GameObjects.Image;

    health! : Phaser.GameObjects.Image;
    stamina! : Phaser.GameObjects.Image;
    shield! : Phaser.GameObjects.Image;
    power! : Phaser.GameObjects.Image;

    text_hp! : Phaser.GameObjects.Text;
    text_sp! : Phaser.GameObjects.Text;
    text_shield! : Phaser.GameObjects.Text;
    text_armor! : Phaser.GameObjects.Text;

    text_time! : Phaser.GameObjects.Text;

    text_score! : Phaser.GameObjects.Text;
    text_high_score! : Phaser.GameObjects.Text;

    text_level! : Phaser.GameObjects.Text;
    text_xp! : Phaser.GameObjects.Text;
    text_life! : Phaser.GameObjects.Text;
    text_coins! : Phaser.GameObjects.Text;

    skill1! : Phaser.GameObjects.Image;
    skill2! : Phaser.GameObjects.Image;
    skill3! : Phaser.GameObjects.Image;
    skill4! : Phaser.GameObjects.Image;
    skill5! : Phaser.GameObjects.Image;

    coin! : Phaser.Types.Loader.FileTypes.AtlasJSONFileConfig;
    coin_animation! : Phaser.GameObjects.Sprite;

    timed_event! : Phaser.Time.TimerEvent;

    a : number = 0;

    constructor(v : firstPhaseFunctions)
    {
        super({key:'informationsBars', active : true});
        this.v = v;
    }

    preload() : void
    {
        this.load.image('informationBarsBackground', './assets/elements/information_bars_background.png');

        this.load.image('hb_hp', './assets/elements/hb_hp.png');
        this.load.image('hb_sp', './assets/elements/hb_sp.png');

        this.load.image('health', './assets/elements/health.png');
        this.load.image('stamina', './assets/elements/stamina.png');
        this.load.image('shield', './assets/elements/shield.png');
        this.load.image('power', './assets/elements/power.png');

        this.load.image('hb_front1', './assets/elements/hb_front1.png');
        this.load.image('hb_front2', './assets/elements/hb_front2.png');

        this.load.image('hb_shadow', './assets/elements/hb_shadow.png');
        this.load.image('hb_health', './assets/elements/hb_health.png');

        this.load.image('skill1', './assets/elements/skill1.png');
        this.load.image('skill2', './assets/elements/skill2.png');
        this.load.image('skill3', './assets/elements/skill3.png');
        this.load.image('skill4', './assets/elements/skill4.png');
        this.load.image('skill5', './assets/elements/skill5.png');

        this.load.atlas('coin', 'assets/elements/coin/coin_spritesheet.png', 'assets/elements/coin/coin_spritesheet.json');
    }

    create() : void
    {
        this.informationBarsBackground = this.add.image(0, 0, 'informationBarsBackground').setOrigin(0);

        //
        
        this.hb_front2 = this.add.image(25, 17, 'hb_front2').setOrigin(0);
        this.health = this.add.image(33, 25, 'health').setOrigin(0).setDisplaySize(35,35);
        this.hb_shadow = this.add.image(80, 13, 'hb_shadow').setOrigin(0);
        this.hb_health = this.add.image(87, 20, 'hb_health').setOrigin(0);

        this.text_hp = this.add.text(175, 27, '300/300', { font : '20px Ubuntu', color: '#000000'}).setScrollFactor(0);
        
        this.hb_front2 = this.add.image(25, 68, 'hb_front2').setOrigin(0);
        this.stamina = this.add.image(32, 75, 'stamina').setOrigin(0).setDisplaySize(35,35);
        this.hb_shadow = this.add.image(80, 63, 'hb_shadow').setOrigin(0);
        this.hb_health = this.add.image(87, 70, 'hb_health').setOrigin(0);
        
        this.text_sp = this.add.text(175, 77, '300/300', { font : '20px Ubuntu', color: '#000000'}).setScrollFactor(0);

        //

        this.hb_front2 = this.add.image(945, 17, 'hb_front2').setOrigin(0);
        this.shield = this.add.image(953, 25, 'shield').setOrigin(0).setDisplaySize(35,35);
        this.hb_shadow = this.add.image(670, 13, 'hb_shadow').setOrigin(0).setFlipX(true);
        this.hb_health = this.add.image(677, 20, 'hb_health').setOrigin(0).setFlipX(true);
        
        this.text_shield = this.add.text(780, 27, '200/200', { font : '20px Ubuntu', color: '#000000'}).setScrollFactor(0);

        this.hb_front2 = this.add.image(945, 68, 'hb_front2').setOrigin(0);
        this.power = this.add.image(950, 75, 'power').setOrigin(0).setDisplaySize(35,35);
        this.hb_shadow = this.add.image(670, 63, 'hb_shadow').setOrigin(0).setFlipX(true);
        this.hb_health = this.add.image(677, 70, 'hb_health').setOrigin(0).setFlipX(true);

        this.text_armor = this.add.text(780, 77, '150/150', { font : '20px Ubuntu', color: '#000000'}).setScrollFactor(0);

        //

        this.text_time = this.add.text(355, 10, 'Tempo Decorrido: 0:00', { font : '20px Ubuntu Mono', color: '#00ff00', align: 'center'}).setScrollFactor(0);

        this.health = this.add.image(590, 10, 'health').setOrigin(0).setDisplaySize(30,30);
        this.text_life = this.add.text(625, 15, 'x 10', { font : '18px Ubuntu Mono', color: '#00ff00', align: 'center'}).setScrollFactor(0);

        this.text_score = this.add.text(355, 40, 'Pontuação: 0', { font : '16px Ubuntu Mono', color: '#00ff00', align: 'center'}).setScrollFactor(0);
        this.text_high_score = this.add.text(355, 60, 'Melhor Pontuação: 0', { font : '16px Ubuntu Mono', color: '#00ff00', align: 'center'}).setScrollFactor(0);

        this.text_level = this.add.text(565, 40, 'Nível: 1', { font : '16px Ubuntu Mono', color: '#00ff00', align: 'center'}).setScrollFactor(0);
        this.text_xp = this.add.text(565, 60, 'XP: 0/1000', { font : '16px Ubuntu Mono', color: '#00ff00', align: 'center'}).setScrollFactor(0);
        this.text_coins = this.add.text(405, 85, 'x 0', { font : '18px Ubuntu Mono', color: '#00ff00', align: 'center'}).setScrollFactor(0);

        //

        this.skill1 = this.add.image(510, 85, 'skill1').setOrigin(0).setFlipX(true).setDisplaySize(30,30);
        this.skill2 = this.add.image(540, 85, 'skill2').setOrigin(0).setFlipX(true).setDisplaySize(30,30);
        this.skill3 = this.add.image(570, 85, 'skill3').setOrigin(0).setFlipX(true).setDisplaySize(30,30);
        this.skill4 = this.add.image(600, 85, 'skill4').setOrigin(0).setFlipX(true).setDisplaySize(30,30);
        this.skill5 = this.add.image(630, 85, 'skill5').setOrigin(0).setFlipX(true).setDisplaySize(30,30);

        //

        this.anims.create({ key: 'coin_animation', frames: this.anims.generateFrameNames('coin', { prefix: 'coin', end: 7, zeroPad: 3}), repeat: -1 });
        this.coin_animation = this.add.sprite(360, 75, 'coin').setOrigin(0);

        this.coin_animation.play('coin_animation');

        this.time.addEvent({ delay: 1000, callback : this.onEvent, callbackScope: this, loop: true });
    }

    formatTime(seconds : number)
    {
        var minutes = Math.floor(seconds/60);
        var partInSeconds = seconds%60;
        
        var partInSecondsText = partInSeconds.toString().padStart(2,'0');

        return `${minutes}:${partInSecondsText}`;
    }
    
    onEvent ()
    {
        this.a++;

        this.text_time.setText('Tempo Decorrido: ' + this.formatTime(this.a));
    }
}