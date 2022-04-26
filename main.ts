let 方位 = 0
let 方向 = 0
basic.forever(function () {
    // 方位值 : 0~359
    方位 = input.compassHeading()
    // 方向值: 0~7
    方向 = Math.round(方位 / 45) % 8
    if (方向 == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (方向 == 1) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (方向 == 2) {
        basic.showArrow(ArrowNames.West)
    } else if (方向 == 3) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (方向 == 4) {
        basic.showArrow(ArrowNames.South)
    } else if (方向 == 5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (方向 == 6) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
