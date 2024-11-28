var findPoisonedDuration = function (timeSeries, duration) {
  //okay so the duration, is equal to the duration and the arrays are when the attack happens= so we are supposed to calculate the entire time?
  //my life is good. I have a dream life.
  //work hard
  //two things learned here +=
  //Math.min(condition A, Condition B) returns the smaller condition.
  let totalTime = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (i < timeSeries.length - 1) {
      //so it is taken the smaller of these two Math.min(a,b);
      totalTime += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    } else {
      totalTime += duration;
    }
  }
  return totalTime;
};
