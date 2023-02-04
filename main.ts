basic.showString("Hello!")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 5)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 3)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, 1)
    }
})
