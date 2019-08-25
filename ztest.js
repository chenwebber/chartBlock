let flag = '❤'
let padding = ''
for (let i = 0; i < flag.length - 1; i++) {
  padding += ' '
}

function render(n) {
  if (n == 1) {
    return [flag]
  } else {
    let rowCount = Math.pow(3, n - 2)
    let last = render(n - 1)
    let side = []
    let middle = []
    for (let a = 0; a < 3; a++) {
      if (a == 1) {
        last.forEach(item => {
          let padNum = ''
          for (let i = 1; i <= 3; i++) {
            padNum += item
          }
          middle.push(padNum)
        })
      } else if (a == 0) {
        last.forEach(item => {
          let padNum = ''
          for (let i = 1; i <= rowCount; i++) {
            padNum += ' ' + padding
          }
          side.push(padNum + item + padNum)
        })
      }
    }
    return side.concat(middle, side)
  }
}

render(4).forEach(it => {
  console.log(it)
})
