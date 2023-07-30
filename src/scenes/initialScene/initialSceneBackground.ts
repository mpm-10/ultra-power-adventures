import AxiosImp from "../../connection/AxiosImp";
import GlobalVariables from "../../utils/GlobalVariables";

export default class initialSceneBackground extends Phaser.Scene
{
    v! : GlobalVariables;
    axiosImp! : AxiosImp;
    
    background1! : Phaser.GameObjects.Image;
    background2! : Phaser.GameObjects.Image;
    background3! : Phaser.GameObjects.Image;
    background4! : Phaser.GameObjects.Image;

    constructor(v : GlobalVariables, axiosImp : AxiosImp)
    {
        super({ key : 'initialSceneBackground' });
        this.v = v;
        this.axiosImp = axiosImp;
    }

    preload() : void
    {
        this.load.image('background1', './assets/scenes/initialScene/background1.png');
        this.load.image('background2', './assets/scenes/initialScene/background2.png');
        this.load.image('background3', './assets/scenes/initialScene/background3.png');
        this.load.image('background4', './assets/scenes/initialScene/background4.png');
    }

    create() : void
    {
        const width = this.scale.width;
	    const height = this.scale.height;

        const totalWidth = width * 500;

        this.cameras.main.setBounds(0, 0, 1024 * 500, 768);
        this.physics.world.setBounds(0, 0, 1024 * 500, 768);

	    this.add.image(width * 0.5, height * 0.5, 'background1').setScrollFactor(0);
        this.add.image(width * 0.5, height * 0.5, 'background2').setScrollFactor(0);

        for (let i = 0; i < 500; i++) 
        {
            this.add.image(1024 * i, height, 'background2').setOrigin(0, 1).setScrollFactor(0.25);
            this.add.image(1024 * i, height, 'background3').setOrigin(0, 1).setScrollFactor(0.25);
        }
        
        this.createAligned(this, totalWidth, 'background3', 0.5);
        this.createAligned(this, totalWidth, 'background4', 0.5);
    }

    update(): void 
    {   
        const cam = this.cameras.main;
		const speed = 10;

		cam.scrollX += speed;

        if(cam.scrollX == 500000)
        {
            cam.scrollX = 0;
        }
    }

    createAligned(scene : Phaser.Scene, totalWidth : number, 
            texture : string, scrollFactor : number) : void
    {
        const w = scene.textures.get(texture).getSourceImage().width;
        const count = Math.ceil(totalWidth / w) * scrollFactor;
            
        let x = 0
        for (let i = 0; i < count; i++)
        {
            const m = scene.add.image(x, scene.scale.height, texture)
                .setOrigin(0, 1)
                .setScrollFactor(scrollFactor);
            
            x += m.width;


        }
    }
}