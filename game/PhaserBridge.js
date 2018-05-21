window.PIXI = window.PIXI || require('phaser-ce/build/custom/pixi');
window.p2 = window.p2 || require('phaser-ce/build/custom/p2');
window.Phaser = window.Phaser || require('phaser-ce/build/custom/phaser-split');

export default {
    Phaser: window.Phaser,
    PIXI: window.PIXI,
    p2: window.p2
}