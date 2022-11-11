input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list_1[randint(0, 4)]))
})
let text_list_1: string[] = []
text_list_1 = [
"0",
"1",
"2",
"3",
"4"
]
let text_list_2 = [
"0",
"1",
"2",
"3",
"4"
]
basic.pause(1)
text_list_1[0] = "Ironman"
text_list_1[1] = "Batman"
text_list_1[2] = "Spiderman"
text_list_1[3] = "Superman"
text_list_1[4] = "Captain America"
basic.pause(1)
text_list_2[0] = "Thanos"
text_list_2[1] = "Joker"
text_list_2[2] = "Green Goblin"
text_list_2[3] = "DarkSied"
text_list_2[4] = ""
