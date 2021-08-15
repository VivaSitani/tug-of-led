input.onButtonPressed(Button.A, function () {
    dot += -1
    basic.clearScreen()
    led.plot(dot, 2)
})
input.onButtonPressed(Button.B, function () {
    dot += 1
    basic.clearScreen()
    led.plot(dot, 2)
})
let dot = 0
dot = 2
basic.clearScreen()
led.plot(dot, 2)
basic.forever(function () {
    if (dot < 0) {
        basic.clearScreen()
        basic.pause(500)
        basic.showString("A wins!")
    }
    if (dot > 4) {
        basic.clearScreen()
        basic.pause(500)
        basic.showString("B wins!")
    }
})
