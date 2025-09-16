

const characterNames=['Goku','Naruto','Ichigo'];

//en los arreglos se debe desestructurar en orden

//const [p1,p2,p3]= characterNames;


//console.log({p1,p2,p3});


const [, p2 ,]= characterNames;


console.log({ p2 });

const returnsArrayFn = () =>{

    return ['ABC', 123] as const;


}


const [letters, number]= returnsArrayFn();

console.log(letters,number)


// tarea
 
const useState =(value: string) =>{
return[
  value,
  (newValue: String) => {
console.log(newValue);

},
] as const; 
};

const [name, setName] = useState('Goku');
console.log(name); // imprime goku
setName('Vegeta'); //imprime vegeta











