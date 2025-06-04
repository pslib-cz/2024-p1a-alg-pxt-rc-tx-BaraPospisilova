radio.setGroup(43)
radio.setTransmitPower(7)
radio.setFrequencyBand(81)
radio.setTransmitSerialNumber(true)

basic.showIcon(IconNames.Happy)

basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    let speedX = Math.map(x, -1024, 1024, -250, 250)
    let speedY = Math.map(y, -1024, 1024, -250, 250)

    let leftMotor = speedY - speedX
    let rightMotor = speedY + speedX

    leftMotor = Math.round(leftMotor)
    rightMotor = Math.round(rightMotor)

    leftMotor = Math.constrain(leftMotor, -250, 250)
    rightMotor = Math.constrain(rightMotor, -250, 250)

    
    
    
    
    let zprava = "S|" + leftMotor + "|" + rightMotor

    radio.sendString(zprava)

    
   
})
