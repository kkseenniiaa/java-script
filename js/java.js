//1 задание
let arr=[1,2,3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//2 задание
let sum=0;
for(let i=0; i<arr.length; i++){
    sum=sum+arr[i];
}
console.log(sum);

//3 задание
arr.push(4,5);
console.log(arr);

//4 задание
let names=prompt('Введите имя, фамилию и возраст');
console.log(names);
let=[name, lastname, age] = names.split(' ');
console.log(name);
console.log(lastname);
console.log(age);