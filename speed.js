//Check speed function which uses if and else conditionals to evaluate data.
function checkSpeed(speed) {
    if (speed < 70) {
      alert("Ok.");
    } else {
      let points = Math.floor((speed - 70) / 5);
      alert(`Points: ${points}`);
    if (points > 12) {
      alert("License suspended");
    }
  }
  }