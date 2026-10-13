let firstName, lastName, fullName;

document.getElementById("button_merge").onclick = function(){
    firstName = document.getElementById("first-name").value;
    lastName = document.getElementById("last-name").value;
    fullName = firstName + " " + lastName;

    console.log(fullName);

    document.getElementById ("full-name").textContent = fullName;
};