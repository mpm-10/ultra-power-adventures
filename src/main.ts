import Phaser from 'phaser';
import './style.css';
import firstPhase from './scenes/firstPhase/firstPhase';

export const config : Phaser.Types.Core.GameConfig =
  {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#f9f9f9',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: [firstPhase]
  }

new Phaser.Game(config);