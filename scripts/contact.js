// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submit = document.getElementById("submit-button");

const paragraph = document.createElement("p");

const node = document.createTextNode("Thank you for your message");

paragraph.appendChild(node);

//paragraph.style.fontsize(24);

function thanks(){
    document.getElementsByTagName('main')[0].innerHTML = paragraph.appendChild(node);

}

submit.addEventListener("click", thanks);

