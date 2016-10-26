

const promise = Promise.resolve(12);
promise.then(value => console.log(value), null);
promise.then(null, err => console.log(err));

const rejectedPromise = Promise.reject('reject this promise!');
rejectedPromise.then(value => console.log(value), null);
rejectedPromise.then(null, err => console.log(err));
rejectedPromise.catch(err => console.log(err));

// .then( successHandler, errorHandler )