let caixaDeSuprimentos = []
let higiente = ["sabão", "escova", "papel", "pasta", "pente"]
let alimentacao = ["carne", "fruta", "pão", "suco", "biscoito"]
let cuidadosMedicos = ["mercurio", "mertiolate", "band-aid", "gase", "esparadrapo"]
let lazer = ["bola", "taco", "espada", "escudo", "playboy"]
let importante = ["isqueiro", "lanterna", "barraca", "lampião", "querosene"]
// let besteira = ["corrente", "spike"]

caixaDeSuprimentos.push(higiente)
caixaDeSuprimentos.push(alimentacao)
caixaDeSuprimentos.push(cuidadosMedicos)
caixaDeSuprimentos.push(lazer)
// caixaDeSuprimentos.push(importante)
// caixaDeSuprimentos.push(besteira)


console.table(caixaDeSuprimentos)

function acampar(lista) {
    if (lista.length == 5) {
        for (let i = 0; i < lista.length; i++) {
            console.log(lista[i])
            if (lista[i].length == 5) {
                return "Podemos ir acampar."
            } else if (lista[i].length > 5) {
                return "Tem itens demais, não precisamos de tantos."
            } else if (lista[i].length < 5) {
                return "Precisamos de mais itens desta seção."
            }

        }
        return lista[i]
    } else if (lista.length < 5) {
        return "Algum amigo ainda não retornou com os itens."
    } else if (lista.length > 5) {
        return "Acho que temos um intruso."
    }
}



console.log(acampar(caixaDeSuprimentos))

