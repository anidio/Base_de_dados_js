const series = require('./database')
console.log(series)

//pegar o input

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

//se for sim, a gente mostra os generos disponivéis, epergunta qual ela escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Esses são os generos disponíveis:')
    console.log('ação policial', '/Comédia policial','/Drama, ação', '/Adolescente','/Vampiros adolescentes')

    const entradaGenero = readline.question('Qual genero voce escolhe:')

    const retorno = series.filter (serie => serie.genero === entradaGenero)

    console.table(retorno)
}else{
    const seriesOrdenadas = series.sort((a,b) => a.temporadas - b.temporadas)
    console.log('Essas são todas as séries disponíveis:')
    console.table(seriesOrdenadas)
}
//se escolher não, mostramos todas as series em ordem crescente de temporadas