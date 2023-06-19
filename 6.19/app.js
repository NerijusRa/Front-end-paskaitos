'use strict'
console.log('app.js')

const colors = ['red', 'green', 'blue']

console.log('colors===', colors)


//paprastas isrykiavimas
colors.sort()

console.log('colors after sort===', colors)

colors.reverse()

console.log('colors after reverse===', colors)


//skaitinis rykiavimas

const nums = [7, 1, 0, 10, 50, 5]

console.log('nums', nums)

nums.sort()
console.log('nums sort', nums)

//sorting nums with function

nums.sort((a, b) => a - b)
console.log('sorted nums', nums)

nums.sort((a, b) => b - a)
console.log('reversed nums', nums)

//
nums.sort((num1, num2) => {
    //turi grazinti neigiama, teigiama arba 0
    if (num1 > num2) return -1
    
    if (num1 < num2) return 1
    
    return 0
})
console.log('nums sorted(expanded)', nums)


