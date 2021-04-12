console.log(global === this)
console.log(module === this)
console.log(module.exports === this)

this.DigaOi = function(){
    return console.log('oi')
}

this.nome = function(){
    return console.log('nome')
}