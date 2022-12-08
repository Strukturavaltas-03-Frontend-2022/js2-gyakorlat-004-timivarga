/* const countOfWorkingDays = (day1, day2) => {
  day1 = new Date(day1);
  day2 = new Date(day2);
  let weeks;
  let workDaysOnDay2LastWeek;
  let workDaysOnDay1FirstWeek;
  if (day2 - day1 < 0) {
    throw new Error(`The first parameter is earlier date, than second!`);
  } else {
    weeks = (day2.getTime() - day1.getTime()) / 1000 / 60 / 60 / 24 / 7;
    if (weeks > 1) {
      //ha egy hétnél több van a két dátum között
      const dayOfWeekDay1 = day1.getDay(); // megnézzük mi a day1 napja
      day1.setDate(07); // átállítjuk vasárnapra a dátumát, mert az addigi munkanapokat megszámoljuk
      workDaysOnDay1FirstWeek = 0;
      console.log(day1);
      if (dayOfWeekDay1 > 5) {
        workDaysOnDay1FirstWeek = 0;
      } else {
        workDaysOnDay1FirstWeek = 5 - dayOfWeekDay1;
      }
      const dayOfWeekDay2 = day2.getDay(); // megnézzük mi a day2 napja
      day2.setDate(1); // átállítjuk hétfő 00:00-raa a dátumát, mert az az utáni munkanapokat megszámoljuk
      workDaysOnDay2LastWeek = 0;
      if (dayOfWeekDay2 > 4) {
        workDaysOnDay2LastWeek = 5;
      } else {
        workDaysOnDay2LastWeek = dayOfWeekDay2;
      }
    }
    // ez lesz az egész hetek száma, ahol 5 munkanap van
    weeks = (day2.getTime() - day1.getTime()) / 1000 / 60 / 60 / 24 / 7;
    console.log(weeks * 5); //+ workDaysOnDay1FirstWeek + workDaysOnDay2LastWeek);
  }
}; */

const isWorkday = (day) => {
  day = new Date(day);
  return (day.getDay() > 0) & (day.getDay() < 6) ? true : false;
};

const countOfWorkingDays = (day1, day2) => {
  day1 = new Date(day1);
  day2 = new Date(day2);
  let currentDay = new Date(day1);
  let weekdayCounter = 0;
  if (day2 - day1 < 0) {
    throw new Error(`The first parameter is earlier date, than second!`);
  } else {
    //console.log(currentDay.getDate());

    while (currentDay <= day2) {
      isWorkday(currentDay) ? weekdayCounter++ : weekdayCounter;
      currentDay.setDate(currentDay.getDate() + 1); // egy napot hozzáadunk
    }
  }
  return weekdayCounter;
};

countOfWorkingDays("2022-07-01T03:24:00", "2022-08-17T03:24:00");

export default countOfWorkingDays;