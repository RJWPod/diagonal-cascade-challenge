input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 8; y++) {
            led.toggle(x - y, y + 0)
            basic.pause(10)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 8; y++) {
            led.toggle(8 - x, y - x)
            basic.pause(10)
        }
    }
})
basic.forever(function () {
	
})
