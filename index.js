// Iteration 1: Names and Input

const hacker1 = "Scott"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Panthari"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, XX characters!.`)
}

// Iteration 3: Loops

let hacker1UpperCase = "";
for (i = 0; i < hacker1.length; i++) {
  hacker1UpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1UpperCase)


let hacker2Reversed = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  const charReversed = hacker2[j];
  hacker2Reversed += charReversed
}
console.log(hacker2Reversed);


if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first.")
} else if (hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first definitely.")
} else { console.log("What?! You both have the same name?")}

/*I wasn't sure how to form a loop for the 3.3 task. I could only solve it just using a conditional unfortunately*/


//Bonus Iteration longText Part 2

let longText = `Nam interdum eu ex lacinia vulputate. Nam lacinia pellentesque turpis, at lacinia lectus aliquam at. Maecenas condimentum posuere nisl, sed molestie tellus tempor in. Phasellus sed pellentesque turpis, ut mattis elit. Quisque consectetur gravida metus. Mauris vitae nisi quis odio egestas vestibulum sed non elit. Pellentesque lectus lorem, scelerisque ac dolor eget, condimentum sodales lectus. Suspendisse at orci felis. Nullam posuere urna pellentesque ligula congue, et accumsan massa sollicitudin.

Aenean ultricies mauris ut ipsum consequat egestas. Aliquam erat volutpat. Suspendisse sodales commodo pellentesque. Morbi sit amet tellus vitae mauris placerat aliquet. Cras dictum, urna vel malesuada ornare, mi leo porta diam, sed aliquet dui dui a est. Sed maximus velit quam, quis faucibus nulla viverra id. Sed augue nibh, rhoncus non augue nec, porttitor commodo dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. In hac habitasse platea dictumst. In eleifend risus pharetra rutrum volutpat. Nulla facilisi. Pellentesque varius consequat consectetur. Ut odio velit, volutpat a euismod sit amet, mollis rhoncus lacus. Curabitur quam erat, pretium mollis risus non, cursus porta felis.

Proin malesuada, ligula ac iaculis egestas, odio ante imperdiet sapien, non feugiat purus libero vel erat. Nam tempus semper ligula quis tincidunt. Nam eget aliquam turpis, fringilla molestie nibh. Nunc et odio in ligula tincidunt euismod a quis nisl. Morbi sapien dolor, pellentesque vitae pretium et, euismod eget felis. Nam sit amet justo eget felis dignissim egestas. Sed sed rutrum mauris. Integer id eros suscipit, imperdiet lacus non, sollicitudin quam. Donec maximus erat metus, id facilisis diam sodales ut. Donec dignissim tincidunt quam vel fringilla.`

let counter = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] + longText[i + 1] === "et")
    counter ++;
}

console.log(counter)