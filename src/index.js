import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './main.css'
import Icon from './icon_service.gif'
import Data from './bsuser_utf8.json'

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
    element.classList.add('vd-title')

    var myIcon = new Image();
    myIcon.src = Icon;

    // element.appendChild(myIcon);
    console.log(Data);

    return element;
}

document.body.appendChild(component());