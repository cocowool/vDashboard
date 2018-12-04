// import _ from 'lodash'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import './main.css'
import Icon from './icon_service.gif'
// import Data from './bsuser_utf8.json'
import whoAmI from './user.js'

if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!');
}

function getComponent() {
    // let element = document.createElement('div');
    var btn = document.createElement('button');

    btn.onclick = whoAmI;

    // element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
    // element.classList.add('vd-title')

    // var myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);
    // element.appendChild(btn);

    return import('lodash').then(({default: _}) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

        return element;
    }).catch(error => 'An error occured while loading the component.');
}

// document.body.appendChild(component());
getComponent().then(component => {
    document.body.appendChild(component);
})

if(module.hot){
    module.hot.accept('./user.js', function(){
        console.log("Accepting the updated whoAmI module!");
        whoAmI();
    });
}