// 1. Write a function that returns the sum of any two integers passed as arguments
function addTwoNumbers (x, y) {
	let total = x + y ;
	console.log(total);
  return total;
}
addTwoNumbers(50,4);

// 2. Write a function that returns the difference of the second argument from the first
function subTwoNumbers(x,y) {
  let total = x - y;
  console.log(total);
  return total;
}
subTwoNumbers(50,4)
// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greet(username) {
  let name = `hello, ${username}!`;
  console.log(name);
  return name;
}
greet(`John`)
// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multi (x){
  let total = x*x;
  console.log(total);
  return total;
};
multi(8)
// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥
function box(L,W,H) {
  let volume = `The dimensions of the box are ${L*W*H} cubic meters`;
  console.log(callback.volume(6,7,8));
  return volume;
}
