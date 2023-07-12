import AxiosImp from "../../connection/AxiosImp";
import KeyboardKeys from "../../utils/KeyboardKeys";
import { firstPhaseFunctions } from "./firstPhaseFunctions";

export default class firstPhaseBackground extends Phaser.Scene
{
    v! : firstPhaseFunctions;
    keys! : KeyboardKeys;
    axiosImp! : AxiosImp;
    
    background1! : Phaser.GameObjects.Image;
    background2! : Phaser.GameObjects.Image;
    background3! : Phaser.GameObjects.Image;
    background4! : Phaser.GameObjects.Image;

    constructor(v : firstPhaseFunctions, axiosImp : AxiosImp)
    {
        super({ key : 'firstPhaseBackground' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('background1', './assets/scenes/firstPhase/background1.png');
        this.load.image('background2', './assets/scenes/firstPhase/background2.png');
        this.load.image('background3', './assets/scenes/firstPhase/background3.png');
        this.load.image('background4', './assets/scenes/firstPhase/background4.png');
    }

    create() : void
    {
        const width = this.scale.width;
	    const height = this.scale.height;

        const totalWidth = width * 10;

        this.cameras.main.setBounds(0, 0, 1024 * 10, 768);
        this.physics.world.setBounds(0, 0, 1024 * 10, 768);

	    this.add.image(width * 0.5, height * 0.5, 'background1').setScrollFactor(0);
        this.add.image(width * 0.5, height * 0.5, 'background2').setScrollFactor(0);

        for (let i = 0; i < 10; i++) 
        {
            this.add.image(1024 * i, height, 'background2').setOrigin(0, 1).setScrollFactor(0.25);
            this.add.image(1024 * i, height, 'background3').setOrigin(0, 1).setScrollFactor(0.25);
        }
        
        this.createAligned(this, totalWidth, 'background3', 0.5);
        this.createAligned(this, totalWidth, 'background4', 0.5);
    }

    update(): void 
    {
        this.keys = new KeyboardKeys(this.input.keyboard, 1);
        this.keys.key_cursors(this);
        
        const cam = this.cameras.main;
		const speed = 10;

		if (this.keys.cursor.right.isDown)
		{
			cam.scrollX += speed
		}
		else if (this.keys.cursor.left.isDown)
		{
			cam.scrollX -= speed
		}    
    }

    createAligned(scene : Phaser.Scene, totalWidth : number, 
            texture : string, scrollFactor : number) : void
    {
        const w = scene.textures.get(texture).getSourceImage().width;
        const count = Math.ceil(totalWidth / w) * scrollFactor;
            
        let x = 0
        for (let i = 0; i < count; ++i)
        {
            const m = scene.add.image(x, scene.scale.height, texture)
                .setOrigin(0, 1)
                .setScrollFactor(scrollFactor);
            
            x += m.width;
        }
    }
}