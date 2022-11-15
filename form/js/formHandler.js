import anime from "../../node_modules/animejs/lib/anime.es.js";

let availableTypes = ['checkbox', 'range', 'submit'];

function addField(typeField, element, inputField, index) {
    switch (typeField) {
        case 'id':
            if (!element.id) {
                inputField.id = inputField.type + index;
            } else {
                inputField.id = element.id;
            }
        break;
        case 'type':
            if (availableTypes.includes(element.type)) {
                inputField.type = element.type;
            } else {
                inputField.type = "text";
            }
        break;
    }
}

function configureEvents() {
    let chkbox = document.querySelectorAll(".option");
    for (const chk of chkbox) {
        chk.addEventListener('mouseenter', () => scaleElement(chk.id, 1.2, 0));
        chk.addEventListener('mouseleave', () => scaleElement(chk.id, 1, 50));
        chk.addEventListener('click', function() {
            if (!chk.style.backgroundColor) {
                chk.style.backgroundColor = 'green';
                // CHECK HIDDEN FORM
            } else {
                chk.removeAttribute('style');
                // CHECK HIDDEN FORM
            }
        })
    }
}

function createForm(config) {
    let container = document.getElementById("containerForm");
    let form = document.createElement("form");

    form.id = config.id;
    form.action = config.action;

    let elements = config.elements;
    elements.forEach((element, index) => {
        let inputField = document.createElement("input");
        addField('type', element, inputField);
        addField('id', element, inputField, index);
        form.appendChild(inputField);
    });

    container.appendChild(form);
}

function scaleElement(elementId, scale, radius) {
    anime({
        targets: ['#' + elementId],
        scale: scale
    });
}

export {createForm, configureEvents}