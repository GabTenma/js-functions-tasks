const isPrimeOrNot = (num) => { 
    // BEGIN
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true; 
    // END
  };
  
  const sayPrimeOrNot = (num) => {
    // BEGIN
    console.log(isPrimeOrNot(num) ? 'yes' : 'no');
    // END
  };
  
  export default sayPrimeOrNot;