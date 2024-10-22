let inputText = document.getElementById("text");
let button = document.getElementById("submit");
let textContent = document.getElementById("textContent");


button.addEventListener("click", (e) => {
    e.preventDefault();
    let content = inputText.value;
        let deleteButton = document.createElement("button");
        let tagP = document.createElement("p");
    if(content) {

        deleteButton.textContent = "X"
        localStorage.setItem(" texts", content);

        textContent.appendChild(tagP);
        textContent.appendChild(deleteButton);
        tagP.textContent = content;
        inputText.value = "";
    } 
    const deleteElement = () => {
        deleteButton.addEventListener("click", () => {
            tagP.remove();
            deleteButton.remove();
    
        })
    }
    deleteElement();
})


function displayUserName () {
    const nameFromLocalStorage = localStorage.getItem("userName"); 

    if (nameFromLocalStorage) {
        textContent.textContent = nameFromLocalStorage;
    } 
}
  
displayUserName()

