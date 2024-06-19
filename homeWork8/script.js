const div = document.createElement("div");
const button = document.createElement("button");
div.appendChild(button);
document.body.appendChild(div);
div.style.cssText = "border: 1px solid black; margin: auto; width: 400px; height: 300px; display: flex; justify-content: center; align-items: center";
button.innerText = "Change";
document.addEventListener("DOMContentLoaded", function() {
    const classes = ['class1', 'class2', 'class3'];
    let currentIndex = 0;
    button.addEventListener('click', function() {
        classes.forEach(className => div.classList.remove(className));
        div.classList.add(classes[currentIndex]);
        currentIndex = (currentIndex + 1) % classes.length;
    });
});
