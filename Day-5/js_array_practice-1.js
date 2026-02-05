let numArr = [20,40,30,11]
console.log(numArr)


const items = [
    {name: 'Bus', price:100},
    {name: 'Bike', price:200},
    {name: 'Van', price: 150},
    {name: 'Computer', price: 205},
    {name: 'phone', price: 160}
]


const filteredItems = items.filter((item) =>{
    return item.price <= 100
})

console.log(filteredItems)

const arrName = items.filter((item) =>{
    return item.name
})

console.log(arrName)

const arrMapName = items.map((item) =>{
    return item.name

})

console.log(arrMapName)


const arrMapNamePrice = items.map((item) =>{
    return  {Price: item.price, Name: item.name}

})

console.log(arrMapNamePrice)


const foundItem = items.find((item)=>{
    return item.name === 'Bus'
})

console.log(foundItem)


items.forEach((item)=>{
    console.log(item.price)
    console.log(item.name)
})


const checkItems = items.some((item)=>{
    return item.name == 'Van'
})

console.log(checkItems)


const checkAllItems = items.every((item)=>{
    return item.price < 500
})

console.log(checkAllItems)


const total = items.reduce((currentTotal, item)=>{
    return item.price+currentTotal
},0)

console.log(total)


const nameTotal = items.reduce((word, item)=>{
    return item.name+word
})

console.log(nameTotal)