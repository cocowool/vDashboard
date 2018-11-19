import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './main.css'
import Icon from './icon_service.gif'

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());