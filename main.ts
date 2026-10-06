input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 2; index++) {
            music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 120), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
        }
    }
})
basic.forever(function () {
	
})
