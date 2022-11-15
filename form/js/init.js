import { createForm, configureEvents } from './formHandler.js';

let form = {
    "id" : "tamagochiForm",
    "action" : "something",
    "elements" : [
        {
            "id" : "chk1",
            "type" : "checkbox"
        },
        {
            "id" : "chk2",
            "type" : "checkbox"
        }, {
            "id" : "chk3",
            "type" : "checkbox"
        },
        {
            "id" : "range1",
            "type" : "range"
        },
        {
            "id" : "submit1",
            "type" : "submit"
        }
    ]
}
createForm(form);

configureEvents();