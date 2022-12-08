const getSecondsOfThisYearUntilNow = () => {
    const dateNow = new Date();
    const newYear = new Date(`${dateNow.getFullYear()}-01-01T00:00:00`);
    //console.log(dateNow - newYear);
    return (dateNow - newYear) / 1000;
  };
  
  //getSecondsOfThisYearUntilNow();
  
  const getSecondsOfThisYearUntilNowOnTest = () => {
    const from = new Date(2021, 0, 1);
    const now = new Date(2021, 10, 12, 2, 23, 23);
    //console.log(dateNow - newYear);
    return (now - from) / 1000;
  };
  
  //getSecondsOfThisYearUntilNow();
  
  export default getSecondsOfThisYearUntilNow;