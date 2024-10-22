let inputText = document.getElementById("text");
let button = document.getElementById("submit");
let textContent = document.getElementById("textContent");

button.addEventListener("click", (e) => {
    e.preventDefault();
    let content = inputText.value;

    if(content) {
        let tagP = document.createElement("p");
        localStorage.setItem(" texts", content);

        textContent.appendChild(tagP);
        tagP.textContent = content;
        inputText.value = "";
    } 

})


function displayUserName () {
    const nameFromLocalStorage = localStorage.getItem("userName"); 

    if (nameFromLocalStorage) {
        textContent.textContent = nameFromLocalStorage;
    } 
}
  
displayUserName()