import Example from "../examples/Example";



export default class Player extends Phaser.Physics.Arcade.Image
{
    player!: Phaser.Physics.Arcade.Image;

    loadPlayer(scene : Example, temp : string) : void
    {
        scene.load.image('player', temp);
    }

    createPlayer(scene : Example) : Phaser.Physics.Arcade.Image
    {
        this.player = scene.physics.add.image(1024 / 2, 768 / 2, 'player').setScale(0.25, 0.25);
        this.player
            .setCollideWorldBounds(true);

        return this.player;
    }

    
}