input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 8; y++) {
            led.toggle(x - y, y)
            basic.pause(10)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= -8; x++) {
        for (let y = 0; y <= -8; y++) {
            led.toggle(x - y, y)
            basic.pause(10)
        }
    }
})
basic.forever(function () {
	
})
