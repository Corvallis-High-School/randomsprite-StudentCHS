controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    showSprite(sprites.create(list._pickRandom(), SpriteKind.Player))
})
function showSprite (mySprite: Sprite) {
    mySprite.setPosition(randint(0, scene.screenWidth() - 8), randint(0, scene.screenHeight() - 8))
}
let list: Image[] = []
list = [
assets.image`myCat`,
assets.image`mySnake`,
assets.image`myShroom`,
assets.image`myDonut`
]
