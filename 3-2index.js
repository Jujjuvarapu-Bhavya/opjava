function bigNumber(a,b){
    return a>b?a:b;
}
let r=bigNumber(10,20)
console.log(r)

let big2=function(x,y){
    return x>y?x:y;
}
let g=big2(20,3)
console.log(g)

let bigNum=(c,d)=>c>d?c:d
let big3=bigNum(100,3)
console.log(big3)

let test2=()=>console.log