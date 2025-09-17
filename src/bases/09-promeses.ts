const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //! después de dos segundos quiero mi dinero
        resolve(100);
        reject('mi migo se perdio');
    }, 2000); // dos segundos
});

myPromise
    .then((myMoneyIsBack) => {
        console.log(`Tengo mi dinero ${myMoneyIsBack}`);
    })
    .catch((reason) => {
        console.warn(reason);
    })
    .finally(() => {
        console.log('pues a seguir con la vida');
    });












