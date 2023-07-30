import Phaser from 'phaser';
import './style.css';
import Game from './game';

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
    scene: [Game]
  }

new Phaser.Game(config);