import KeyboardKeys from '../utils/KeyboardKeys';
import Player from '../utils/Player';
import { firstPhase } from './ExampleFunctions';
import { firstPhaseVariables } from './ExampleFunctionsInterface';



export default class Example extends Phaser.Scene implements firstPhase
{
    
    test!: firstPhaseVariables;

    player!: Phaser.Physics.Arcade.Image;
    p!: Player;

    test_hb!: Phaser.GameObjects.Image;
    test_hb_shadow!: Phaser.GameObjects.Image;
    test_hb_xp!: Phaser.GameObjects.Image;

    hb!: Phaser.GameObjects.Image;
    hb_shadow!: Phaser.GameObjects.Image;
    hb_xp!: Phaser.GameObjects.Image;

    text!: Phaser.GameObjects.Text;

    temp : string = './assets/examples/repl.png'
    
    percent!: number;
    count!: number;


    preload(): void 
    {
       
        this.p = new Player(this, 1024 / 2, 768 / 2, 'player')

        this.p.loadPlayer(this, this.temp);
        
        this.load.image('test_hb', './assets/elements/hb.png');
        this.load.image('test_hb_shadow', './assets/elements/hb_shadow.png');
        this.load.image('test_hb_xp', './assets/elements/hb_xp.png');

    }
    
    create() 
    {
        
        this.player = this.p.createPlayer(this);

        const hb_shadow = this.add.image(150, 30, 'test_hb_shadow').setOrigin(0, 0.5);
        const hb = this.add.image(154, 30, 'test_hb').setOrigin(0, 0.5);
        const hb_xp = this.add.image(70, 30, 'test_hb_xp')

        hb_shadow.displayWidth = 211;
        hb_shadow.displayHeight = 54;

        hb.displayWidth = 200;
        hb.displayHeight = 40;

        hb_xp.displayWidth = 97;
        hb_xp.displayHeight = 54;

        this.hb = hb;
        this.hb_xp = hb_xp;
        this.hb_shadow = hb_shadow;

        this.percent = 0;
        this.count = 0;

        this.text = this.add.text(10, 100, 'Cursors to move', { font : '16px Courier', color: '#00ff00'}).setScrollFactor(0);
    }


    update() 
    {
        const key = new KeyboardKeys(this.input.keyboard, 1);
        key.key_cursors(this);

        

        if ((key.cursor.left.isDown || key.a.isDown) || (key.cursor.right.isDown || key.d.isDown)) this.player.setVelocityX(key.cursor.left.isDown || key.a.isDown ? -160 : 160);
        else
        {
            this.player.setVelocityX(0) ;
        }

        if ((key.cursor.up.isDown || key.w.isDown) || (key.cursor.down.isDown || key.s.isDown)) this.player.setVelocityY(key.cursor.up.isDown || key.w.isDown ? -160 : 160);
        else 
        {
            this.player.setVelocityY(0);
        }

        let r = new Phaser.Geom.Rectangle(0,0,200 - this.percent,40);

        

        if(key.o.isDown && this.percent < 200 && this.count < 300)
        {
            this.percent += 2;
            this.count += 1.5;
        }

        if(key.l.isDown && this.percent > 0 && this.count > 0)
        {
            this.percent -= 2;
            this.count -= 1.5;
        }

        let v = 150 - this.count;

        this.text.setText([
            `percent: ${100 - (this.percent / 2)}`,
            `count: ${v.toFixed(0)}`
        ]);
        this.hb.setCrop(r)
    }

    
}
