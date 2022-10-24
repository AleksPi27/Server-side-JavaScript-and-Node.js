// async function getData() {
//     try { 
//         if (true) return Promise.reject('Promise is rejected')
//     } catch (err) {
//         console.log('Error')
//     }
// }

// getData().then(()=> console.log("I will pass it no matter what will have happened"))
// .catch(()=>console.log('Catching err'))


const successfulPromise = new Promise((resolve) => {
    resolve('Success');
})

successfulPromise.then((data) => console.log(data))

const errorPromise = new Promise((resolve, reject) => {
    reject('Error')
})

errorPromise.then((data) => { 
    console.log('Successful block')
    console.log(data) }).catch((err) => console.error(err))