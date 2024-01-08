// Your code here
function moveDodgerLeft() {
  dodger.style.left = (parseInt(dodger.style.left) || 0) - 10 + 'px';
}

function moveDodgerRight() {
  dodger.style.left = (parseInt(dodger.style.left) || 0) + 10 + 'px';
}

