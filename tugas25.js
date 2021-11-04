let angka =  [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
console.log(angka)
console.log(angka.sort())
console.log(angka.sort((a,b)=> a-b))
function menyaring (value){
    return value > 10
}
console.log(angka.filter(menyaring))