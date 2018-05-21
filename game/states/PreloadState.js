import '~/game/PhaserBridge'

class PreloadState extends Phaser.State {

    preload(){
        
    }

    create(){
        console.log('PRELOAD');
        this.state.start('MainMenu');
    }

}

export default PreloadState;