// Write your code here!
const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("H1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.append(newHeader);
