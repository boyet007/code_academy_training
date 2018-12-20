const getSleepHours = day => {
  switch(day) {
    case 'Monday' :
      return 8; break;
    case 'Tuesday' :
      return 9; break;
    case 'Wednesday' :
      return 7; break;
    case 'Thursday' :
      return 8; break;
    case 'Friday' :
      return 6; break;
    case 'Saturday' :
      return 10; break;
    case 'Sunday' :
      return 10; break;
    default: 
      return 'Sorry! I dont recognize that day.';
  }
}

console.log(getSleepHours('Sunday'))
 
const getActualSleepHours = () => {
 return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); 
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7
}

const calculateSleepDate = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest')
  }
}

console.log(calculateSleepDate())