// Arrow function is preferred when writing JS code
// const myArrowFunc = (arg1, arg2, ...) => {<Some code>}
const timeWarp = numSeconds => {
  const remaining = numSeconds % 3600; // Prefer const > let > var
  const numHours = (numSeconds - remaining) / 3600;
  const remainingSec = remaining % 60;
  const numMin = (remaining - remainingSec) / 60;
  // Template strings using backtick ` and not single quote '
  // `blah blah ${myVariable} blah`
  return `${numHours} hours, ${numMin} minutes, ${remainingSec} seconds`;
};
