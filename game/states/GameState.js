import '~/game/PhaserBridge'

class GameState extends Phaser.State {

    create() {
        if(this.game.$settings.debug){
            this.game.time.advancedTiming = true;
        }
        console.log('GAME');
    }

    render(){
        if(this.game.$settings.debug){
            this.game.debug.text('FPS: ' + this.game.time.fps || 'FPS: --', 40, 40, "#00ff00"); 
        }
    }

}

export default GameState;