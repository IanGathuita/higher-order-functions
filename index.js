let numbers =[];
for (var i=1;i<=100;i++){
    numbers.push(i);
}

let check_divisibility_by_5 = (num) => {
    return num % 5 == 0;
}       

let divisible_by_5 = numbers.filter(check_divisibility_by_5);

let add_all = (previous,current)=>{
    return previous + current;
};

let sum = divisible_by_5.reduce(add_all);

console.log(sum);