// code your solution here
function superbowlWin(array) {
    let val = array.find(obj => obj.result === "W")
    if (val) {
        return val.year
    } else {
        return undefined
    }
}
