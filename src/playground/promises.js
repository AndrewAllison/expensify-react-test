const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('THis is my reslved promise');
  }, 10500);
});

promise.then((data) => {
  console.log('data', data);
}).catch((error) => {
  console.error('BOOOM!!1', error);
});