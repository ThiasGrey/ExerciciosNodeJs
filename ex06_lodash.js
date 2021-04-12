const _ = require('lodash')

const alunos = [
    {
        nome: 'ana',
        nota: 7.5
    },
    {
        nome: 'pedro',
        nota: 5.2
    },
    {
        nome: 'Diego',
        nota: 9.8
    }
]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)