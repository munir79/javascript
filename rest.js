const rest=(...numbers)=>{
    let total=0;

    for(let num of numbers){
       total =total+num;
    }
    return total
}

const result=rest(2, 3, 45, 5)

console.log("total",result);