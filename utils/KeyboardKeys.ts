import Phaser from "phaser";

export default class KeyboardKeys extends Phaser.Input.Keyboard.Key
{
    w!: Phaser.Input.Keyboard.Key;
    a!: Phaser.Input.Keyboard.Key;
    s!: Phaser.Input.Keyboard.Key;
    d!: Phaser.Input.Keyboard.Key;

    u!: Phaser.Input.Keyboard.Key;
    i!: Phaser.Input.Keyboard.Key;
    o!: Phaser.Input.Keyboard.Key;

    j!: Phaser.Input.Keyboard.Key;
    k!: Phaser.Input.Keyboard.Key;
    l!: Phaser.Input.Keyboard.Key;

    cursor!: Phaser.Types.Input.Keyboard.CursorKeys;


    key_cursors(scene : Phaser.Scene) : void
    {
        this.w = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.a = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.s = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.d = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

        this.u = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U)
        this.i = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I)
        this.o = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O)

        this.j = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J)
        this.k = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K)
        this.l = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L)

        this.cursor = scene.input.keyboard.createCursorKeys()
    }
}