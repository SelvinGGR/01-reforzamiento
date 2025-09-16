
const person = {

name: 'tony',
age: 45,
key: 'IronMan',

};

const { name, age, key} = person;

//const name = person.name;
//const age = person.age;
//const key = person.key;


console.log({name,age,key});



interface Hero{

    name: string;
    age: number;
    key: string;
    rank?: string; 
}

const useContext = ({key, name, age, rank}: Hero) =>{
return{
keyName: key,
user:{
name: name,
age: age,

},

rank: rank

};

};

const context = useContext(person);
console.log(context);

context.user.age
context.user.name















