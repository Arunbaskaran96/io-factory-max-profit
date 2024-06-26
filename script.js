let result = new Array(3).fill(0);
let theatre = 1500;
let pub = 1000;
let commercial = 3000;
let profit = 0;
function findMaxProfit(n) {
  let currentBuild = null;
  let temp = new Map();
  if (n < 4) {
    return 0;
  } else {
    if (n >= 4) {
      let findDiff = n - 4;
      let tempProfit = findDiff * pub;
      temp.set(tempProfit, 4);
    }
    if (n >= 5) {
      let findDiff = n - 5;
      let tempProfit = findDiff * theatre;
      temp.set(tempProfit, 5);
    }
    if (n >= 10) {
      let findDiff = n - 10;
      let tempProfit = findDiff * commercial;
      temp.set(tempProfit, 10);
    }
  }
  let max = Math.max(...temp.keys());
  profit += max;
  currentBuild = temp.get(max);
  if (currentBuild === 5) {
    result[0]++;
  }
  if (currentBuild === 4) {
    result[1]++;
  }
  if (currentBuild === 10) {
    result[1]++;
  }
  return findMaxProfit(n - currentBuild);
}

function submitHandler() {
  const inputVal = document.getElementById("input");
  if (!inputVal.value) {
    alert("Please Enter Number");
  } else {
    const prevContainer = document.getElementById("answer");
    if (prevContainer.hasChildNodes()) {
      prevContainer.removeChild(prevContainer.children[0]);
    }
    const number = parseInt(inputVal.value);
    result = new Array(3).fill(0);
    profit = 0;
    findMaxProfit(number);
    const container = document.getElementById("answer");
    const divElem = document.createElement("h2");
    divElem.style.textAlign = "center";
    divElem.style.marginTop = "30px";
    divElem.innerText = `Answer : T :${result[0]} P :${result[1]} C :${result[2]} , Profit : ${profit}`;
    container.appendChild(divElem);
  }
}
