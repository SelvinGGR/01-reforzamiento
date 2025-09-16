import { heroes, type Hero } from "../data/herores.data"


const getHeroById = (id: number): Hero | undefined  =>{

    const hero = heroes.find((hero) => {

        return hero.id === id;

    });

    //if (!hero){

      //  throw new Error('No existe un heore con ese ID')
   // }

    return hero;
     
};
console.log(getHeroById(1));
















