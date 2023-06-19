const ages = [1, 2, 3, 4, 5]

//psiaudo kodas suskaiciuoti suma

//sukam cikla
//kiekviena reiksme sudedam
//gale po ciklu  atspausdinam kiek gavosi

let total = 0
//ciklas
ages.map((sk) => {
    total = total+sk
})
console.log('total ===', total)

//gauti  vidurki, total/kiek elementu

const avg = total / ages.length

console.log('avg ===', avg.toFixed(2))

//reduce

const agesTotal = ages.reduce((total, sk, idx) => {
    console.log(`ciklas: ${idx}, sk: ${sk}, total: ${total}`)
    //ka grazins sita funkcija tas gris i kita ciklo total
    const miniSuma = total + sk
    return miniSuma;
}, 0);
const agesTotalShorter = ages.reduce((total, sk, idx) => total + sk, 0)

console.log('ages total ===', agesTotal)
console.log('ages total shorter ===', agesTotalShorter)

const agesAvgShorter = ages.reduce((total, sk, idx, arr) => total + sk / arr.length, 0)

console.log('ages avg shorter ===', agesAvgShorter)