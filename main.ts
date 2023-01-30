function updatescoredboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 1:" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("Player 1:" + Round)
    OLED.newLine()
    OLED.writeStringNewLine("Player 1:" + Tie)
}
let Tie = 0
let Round = 0
let p2 = 0
let P1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Me personally would play this game :)")
P1 = 0
p2 = 0
Round = 0
Tie = 0
basic.pause(1000)
updatescoredboard()
