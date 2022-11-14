// CREATE FORM
export function createForm(config) {
    // VARIABLES
    let container = document.getElementById("containerForm");
    let form = document.createElement("form");
    
    // CODE
    form.id = config.id;
    form.action = config.action;
    let elements = config.elements;
    elements.forEach((element, index) => {
        let inputField = document.createElement("input");
        // ID
        if (!element.id) {
            inputField.id = "chk" + form.id.charAt(0).toUpperCase() + form.id.slice(1) + index;
        } else {
            inputField.id = element.id;
        }
        // TYPE
        inputField.type = element.type;
        form.appendChild(inputField);
    });

    // FINAL
    container.appendChild(form);
}

// CREATE REAL MENU
export function menuInterface() {
    // VARIABLES
    let chkbox = document.querySelectorAll(".option");
    for (const chk of chkbox) {
        chk.addEventListener("click", function() {
            if (document.getElementById(chk.id).style.backgroundColor != "green") {
                document.getElementById("chk" + chk.getAttribute("num")).setAttribute("checked", true);
                if (document.getElementById("chk" + chk.getAttribute("num")).checked) {
                    document.getElementById(chk.id).style.backgroundColor = "green";
                }
            } else {
                document.getElementById("chk" + chk.getAttribute("num")).setAttribute("checked", false);
                document.getElementById(chk.id).style.backgroundColor = "rgb(141, 34, 34)";
            }
        });
    }
}