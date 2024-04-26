const run = (text) => {
  // BEGIN
  const takeLast = (str, num) => {
    if (str.length < num) return null;
    return str.slice(-num).split('').reverse().join('');
  };
  // END

  return takeLast(text, 4);
};



export default run;