function reverse() {
  s = prompt("Enter a string:");
  add = "";
  for (i = s.length - 1; i >= 0; i--) {
    add = add + s[i];
  }
  console.log(add);
}
reverse();
//Input: hello
//Output: olleh

function before() {
  let a = "divya";
  let b = a.charCodeAt(0);
  console.log(String.fromCharCode(b - 1));
}
before();
//Output: c


function removeSpaces() {
    let a = "   Hello  World    ";
    let b = a.trim();
    c = 0
    d = "";
    for (i=0;i<b.length;i++) {
      if (b[i] != " ") {
        d = d + b[i];
      } else if (b[i] == " " && c==0) {
        d = d + b[i];
        c++
      }
    }
    console.log(d);
  }
  removeSpaces();
  //Output: Hello World