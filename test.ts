Brickcell.onGesture(BrickcellGesture.Down, function () {
    serial.writeLine("down")
})
Brickcell.onGesture(BrickcellGesture.Right, function () {
    serial.writeLine("right")
})
Brickcell.onGesture(BrickcellGesture.Up, function () {
    serial.writeLine("up")
})
Brickcell.onGesture(BrickcellGesture.Left, function () {
    serial.writeLine("left")
})
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeString("Setup starting...")
Brickcell.init()
