// funciones traidicionales y funciones de flecha se usan cuando no se registran explicitamente alguna funcion.

//funcion traducional
function great (name: String):string{
return `Hola ${name}`;

}

//funcion de flecha
const greet = (name:string) =>  `Hola ${name}`;




const message = great(`Goku`);
const message2 = greet(`Naruto`)

console.log(message);
console.log(message2);



function getUser (){

return {
userid: 'DMK-123',
username: 'Goenyi',

};
}
const getuser2 =() => ({

    userid: 'DMK-123',
username: 'Goenyi',

});
const user = getUser();
const user2 = getuser2();
console.log(user,user2);


const mynumber:number[] =[1,2,3,4,5];

mynumber.forEach((value) => {
    console.log({value});
});
















