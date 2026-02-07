const sum = function(a,b){
    return a+b
}

const sub = (a,b) => {
    return a-b
}

// module.exports = {
//     sum , sub
// }

// module.export mai hum saare function ek hi baar export krsakte hai aur agar alag -alag krne ho to

exports.multiply = (a,b) => a*b
exports.divide = (a,b) => a/b
