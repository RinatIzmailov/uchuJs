//const myFun = function(a, b) {
//    let c
//    a = a + 2
//    c = a + b
//    return c
//}
//
//myFun(5, 3)

//const myFn = function (value, mult = 1) {
//    return value*mult
//}
//myFn(5, 10)
//myFn(30)

//const myFn = (value, mult = 1) => {
//    return value*mult
//}
//myFn(20, 5) 

// const newPost = (post, addedAd = Date()) => ({
//     ...post,
//     addedAd,
// })

const a = (post, addedAd = Date()) => {


    return {
        ...post,
        addedAd,
    }
}

const firstPost = {
    id: 1,
    autor: 'Rinat,'
}

 a(firstPost)

const show =  a(firstPost)

console.log(show)