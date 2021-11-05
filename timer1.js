// alarm clock / timer beep after specified amount of time passed
// can specified unlimited  # of alarms using command line args
// should not beep for: no num (NaN) provided, input is negative num, input is NaN
const args = process.argv;
let timeArr = args.slice(2);
// console.log("the times are: ", timeArr);

//sort through unchrono nums
timeArr.sort(function(a, b) {
  return a - b;
});
console.log('Sorted time: ', timeArr);

// loop though specified time & beep
for (let time of timeArr) {
  if (typeof(time) !== NaN && time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}
