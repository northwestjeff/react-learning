import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Apps'


// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for Ralph</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }

// var portland = new City();
// portland.state.name = 'Portland';
// portland.state.offset = 7;
// //
// var miami = new City();
// miami.state.name = 'Miami';
// miami.state.offset = 4;
//
// // let cityList = new Array;
//
// var miami = "Miami";
// var portland = 'Portland';
// var chicago = "Chicago";
// var la = "Los Angeles";
//
// var cityList = [miami, portland, chicago, la];
//
// const data = [
//     {
//         name: 'Portland',
//         offset: 7
//     },
//     {
//         name: 'Miami',
//         offset: 4
//     }
// ];
//
// // var seattle = new City();
// // seattle.state.name = "Seattle";
// // seattle.state.offset = 7;
//
//
// class Time extends React.Component {
//     render() {
//         var today = new Date();
//         var h = today.getHours();
//         var m = today.getMinutes();
//         var tz = today.getTimezoneOffset() / 60;
//         var utcHours = today.getUTCHours();
//         var hourCalc = utcHours - tz;
//
//
//         return (
//             <div className="jumbotron">
//                 <h2>{tz}</h2>
//                 <h2>{utcHours}</h2>
//                 <h2>{hourCalc}</h2>
//
//                 <h3>{h}:{m}</h3>
//                 <div>
//
//                 </div>
//             </div>
//         )
//     }
// }
//
// class City extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: null,
//             offset: null,
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="city-comp">
//                     {/*{cityList.map(function(name) {*/}
//                         {/*return <h2 className="city-name">{name}</h2>*/}
//                     {/*})}*/}
//                     <h3>{this.state.name}</h3>
//                     <h3>{this.state.offset}</h3>
//                 </div>
//                 <div>
//
//                 </div>
//
//
//             </div>
//         )
//     }
// }
//
//
//
//
// class Splash extends React.Component {
//     render() {
//         return (
//             <div className="jumbotron">
//                 <h1>Select a City to find it's current time</h1>
//             </div>
//         );
//     }
// }
//
// class Page extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Splash/>
//                 <Time/>
//                 <City />
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <App/>,

    document.getElementById('root')
);
