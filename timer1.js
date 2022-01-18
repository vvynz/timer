let timeout = process.argv.slice(2) * 1000;
// console.log(timeout);
setTimeout(() => {
  process.stdout.write("\x07");
}, timeout);
