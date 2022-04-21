input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(x, x)
            led.toggle(x, 0)
            basic.pause(50)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
        	
        }
    }
})
basic.forever(function () {
	
})
