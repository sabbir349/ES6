// const info = {
//     name : 'Sabbir',
//     address : 'Azimpur',
//     age : 19,
//     func : function(){
//         console.log('okay');
//     }
// }

// const arr = [{
//     name : 'Sabbir',
//     address : 'Azimpur',
//     age : 19,
//     func : function(){
//         console.log('thik ase');
//     }},
//     {
//         name : 'rasel',
//     address : 'farmgate',
//     age : 21,
//     func : function(){
//         console.log('okay');
//     }
//     }
// ]
// console.log(arr)

// two dimentional array

// const arrays = [[10,20,30],[40,50,60],[70,80,90]]
// // for(const ar of arrays){
// //     for(const a of ar){
// //         console.log(a)
// //     }
// // }

// for(let i =0;i<arrays.length;i++){
//     for(let j= 0;j<arrays[i].length;j++){
//         console.log(arrays[i][j])
//     }

// }

// closure

// let a = 10;

// function sabbir(){
//     console.log(a)
// }
// sabbir()

// higher order function


// function summation(a,b){
//     return a+b
// }

// function multiply(a,b,another){
//     const c = m+n;
//     const d = m-n;

//     function multiplication(){
//         const e = another(10,20);
//         const result = e*(c*d)
//         return result
//     }
//     return multiplication
// }
// const result = multiply(10,20,summation)
// console.log(result())


// arrow function

// const number = (a,b,c) => {
//      return (a+b*(c))
// }
// console.log(number(20,30,50))


// destructuring


// const objects ={
//     name : 'Sabbir',
//     address : 'Azimpur',
//     age : 19,
//     func : function(){
//         console.log('okay');
//     }
// }
// const {name,address,age,func} = objects

// console.log(name)

// const arrays1 = [10,20,30]
// const [rasel,shipon,rafi] = arrays1
// console.log(rasel)


// spread operator

// const arrays2 = [1,2,3,5,8,6,7,9,10]
// for(const a of arrays2){
//     console.log(a)
// }

// const arra = [888,...arrays2,777]
// console.log(arrays2)
// console.log(arra)



// const arrays2 = [1,2,3,5,8,6,7,9,10]


// const result = arrays2.forEach(ar => ar)
// console.log(result)

// find

//  const result = arrays2.find(ar => ar>8)
//  console.log(result)

// map (one type of loop)


// const result = arrays2.map(ar => ar*2)
// console.log(result)

// filter

// const result =arrays2.filter(ar=>ar%2 !== 0)
// console.log(result)


// call back 

function multiply(a,b,callBack){
    const c = a+b;
    const d = a-b;

    const result = callBack(c,d)
    return result
}


console.log(multiply(10,20,(a,b)=>{
    return a*b
}))

// function sum(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }