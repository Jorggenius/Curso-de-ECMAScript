function* iterate(){
    for(let value of array){
        yield value
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer'])
console.log(it.next().value) 