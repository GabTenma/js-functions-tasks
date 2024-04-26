const convert = (...dates) => {
    // BEGIN
    if (dates.length === 0) return [];
    
    const convertedDates = dates.map(([year, month, day]) => {
      month++;
      if (month > 12) {
        month -= 12;
        year++;
      }
      const newDate = new Date(year, month - 1, day);
      return newDate.toDateString();
    });
    // END
  
    return convertedDates;
  };
  
  export default convert;