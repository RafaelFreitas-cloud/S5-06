let garden = [
    [0,0,0,'G'],
    [0,0,'G',0],
    [0,'G',0,0],
    ['G',0,0,0]
    ]

function cortador(lista){
    for(let i=0;i<lista.length;i++){
        for(let j=0;j<lista[i].length;j++){
            if(lista[i][j]=="G"){
                lista[i][j]=0
            }
        }
    }
    return lista
}

console.table(cortador(garden))