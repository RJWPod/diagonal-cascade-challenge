input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(x - y, y + 0)
            basic.pause(10)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 16; x++) {
        for (let y = 0; y <= 16; y++) {
            led.toggle(y - x, 16 - y)
            basic.pause(0.1)
        }
    }
})
basic.forever(function () {
	
})
