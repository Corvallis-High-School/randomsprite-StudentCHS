controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    createSprite(list)
})
function createSprite (spriteImageArray: Image[]) {
    sprites.create(spriteImageArray._pickRandom(), SpriteKind.Player).setPosition(randint(0, scene.screenWidth() - 8), randint(0, scene.screenHeight() - 8))
}
let list: Image[] = []
list = [
assets.image`myCat`,
assets.image`mySnake`,
assets.image`myShroom`,
assets.image`myDonut`
]
