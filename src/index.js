// import _ from 'lodash'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import './main.css'
// import Icon from './icon_service.gif'
// import Data from './bsuser_utf8.json'
// import whoAmI from './user.js'

console.log("Hello Webpack!");

// if('serviceWorker' in navigator){
//     window.addEventListener('load', ()=>{
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW Registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW Registration failed: ', registration);
//         });
//     });
// }

// if(process.env.NODE_ENV !== 'production'){
//     console.log('Looks like we are in development mode!');
// }

// // function getComponent() {
// function component(){
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//     var button = document.createElement('button');
//     var br = document.createElement('br');

//     btn.onclick = whoAmI;

//     button.innerHTML = 'Click me and look the network tab!';
//     element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
//     element.classList.add('vd-title')

//     element.appendChild(btn);
//     element.appendChild(br);
//     element.appendChild(button);

//     button.onclick = e => import('./print').then(module=>{
//         var print = module.default;

//         print();
//     });

//     return element;

//     // var myIcon = new Image();
//     // myIcon.src = Icon;

//     // element.appendChild(myIcon);


//     // return import('lodash').then(({default: _}) => {
//     //     var element = document.createElement('div');
//     //     //element.append(btn);
//     //     element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

//     //     return element;
//     // }).catch(error => 'An error occured while loading the component.');
// }

// document.body.appendChild(component());
// // getComponent().then(component => {
// //     document.body.appendChild(component);
// // })

// if(module.hot){
//     module.hot.accept('./user.js', function(){
//         console.log("Accepting the updated whoAmI module!");
//         whoAmI();
//     });
// }