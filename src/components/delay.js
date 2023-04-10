function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function myFunction() {
    console.log('Starting');
    await delay(1000);
    console.log('1 second has elapsed');
  }
  
  myFunction();