

const myPromise = new Promise((resolve) => {


    setTimeout (() => {

    //!despues de dos segundos quiero mi dinero
    resolve(100)
}, 2000); //dos segundos


});

myPromise.then(

    (myMoneyIsBack) => {

    console.log('Tengo mi dinero' ${myMoneyIsBack})  

    }
)















