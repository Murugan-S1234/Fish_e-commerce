function added() {
    var parentElement = event.target.parentElement;
    var button = parentElement.querySelector('.zx');
    if (button.textContent === "Add Cart") {
        button.textContent = "Added";
        button.style.backgroundColor = "yellow";
        button.style.justifyContent="center";
    } else {
        button.textContent = "Add Cart";
        button.style.backgroundColor = "rgb(0, 255, 234)";
    }
    }
