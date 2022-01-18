function timer() {
  const numArr = process.argv.slice(2);
  // input is an array of numbers from the user(command line)

  numArr.forEach((element) => {
    const delay = Number(element) * 1000;

    // edge cases: if no numbers are given, or if negative number, or if input is not a number; SKIP
    if (delay === 0 || Number.isNaN(delay) || delay < 0) {
      console.log("if statement hit");
      return;
    } else {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, delay);
    }
  });
}
timer();
