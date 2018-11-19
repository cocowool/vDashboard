import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

    return element;
}

document.body.appendChild(component());