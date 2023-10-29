//  function myFunction(user){
//         if (user === 'admin'){
//                 return `${user}, welcome!`
//         } else {
//                 return `sory, not correct user`
//         }
// }
//
// console.log(myFunction( 'admin'))


// function isFebruary(day){
//         if (day <= 28){
//                 return `today is ${day} of february`
//         } else if (day<=31) {
//                 return `on february only 28 day, your day is ${day} of another month`
//         }
// }
//
// console.log(isFebruary( 31))


// function numFunction(num){
//         if (num !== 50){
//                 return `${num} is not correct`
//         } else {
//                 return "Correct"
//         }
// }
//
// console.log(numFunction( 64))


// function ageFunction(age,user){
//         if (age >= 18){
//                 return `${user} is ${age} old, welcome`
//         } else {
//                 return `${user} so young, rejected!`
//         }
//
// }
//
// console.log(ageFunction( 6, "diana" ))


// function userName(user){
//         if (user.length <= 3){
//                 return `${user} name is too short (min 3)`
//         } else {
//                 return `${user} name accepted`
//         }
// }
//
// console.log(userName( 'di'))


// function userName(user){
//         if (user.length >= 6){
//                 return `${user} name is too long (max 5)`
//         } else {
//                 return `${user} name accepted`
//         }
// }
//
// console.log(userName( 'dianakjj'))


// function userAge(age){
//         if (typeof (age) === 'number') {
//                 return `${age} age accepted`
//         } else {
//                 return `${age} must be number`
//         }
// }
//
// console.log(userAge( 12))


// function userAge(age){
//         if (typeof (age) === 'number'){
//                 return `${age} must be a string`
//         } else if ( age < 23){
//                 return `must be older than 23`
//         } else {
//                 return 'accepted'
//         }
// }
//
// console.log(userAge( '19'))


// function weekDay(day){
//         if ( day === 1){
//                 return `${day} is Monday`
//         } else if ( day === 2){
//                 return `${day} is Tuesday`
//         } else if ( day === 3){
//                 return `${day} is Wednesday`
//         } else if ( day === 4) {
//                 return `${day} is Thursday`
//         } else if ( day === 5) {
//                 return `${day} is Friday`
//         } else if ( day === 6){
//                 return `${day} is Saturday,the weekend`
//         } else if ( day === 7) {
//                 return `${day} is Sunday,the weekend`
//         } else {
//                 return 'There is only 7 day in week'
//         }
// }
//
// console.log(weekDay( 7))
// console.log(weekDay( 12))


// function checkWord(str){
//     str=str.trim()
//     str=str.slice(str.indexOf(' ')+1)+' '+str.slice(0, str.indexOf(' '))
//     str=str.slice(0, str.lastIndexOf('o'))+'a'
//     return `${str}`
// }
// console.log(checkWord(' hello world '))


// function checkLength(str){
//     if(str.length % 2 === 0) {
//         return `${str.length} (четное)`
//     }else{
//         return `${str.length} (не четное)`
//     }
// }
// console.log(checkLength('home'))
// console.log(checkLength('homee'))


// function checkSpace(str){
//     str = str.replaceAll(' ','')
//     str = str[0].toUpperCase()+str
//         .slice(1,5)+str[5]
//         .toUpperCase()+str
//         .slice(6,10)+str[10]
//         .toUpperCase()+str
//         .slice(11,15)+str[15]
//         .toUpperCase()+str
//         .slice(16,18)+str[18]
//         .toUpperCase()+str
//         .slice(19,22)
//     return `${str}`
// }
// console.log(checkSpace('lorem ipsum dolor sit amet'))


// function priceDiscount(price, discount){
//     price=price-(price*discount/100)
//     return `${price}`
// }
// console.log(priceDiscount(300,20))


// function checkString(str) {
//     if (str.length !== 0) {
//         if (typeof str === 'number') {
//             return 'must be a string'
//         } else if (str.length >= 4 && str.length <= 10) {
//             if (str.length % 2 === 0) {
//                 return `${str}`
//             }else{
//                 return 'odd number'
//             }
//         }else{
//             return 'string must match in length'
//         }
//     } else {
//         return 'must not be empty'
//     }
// }
// console.log(checkString('diana'))
// console.log(checkString('di'))
// console.log(checkString(''))