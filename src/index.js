import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// window.begin = Date.now();
// let a = 0;
// let b = 0;
// ReactDOM.render(
//   <div className='loading'>111</div>,
//   document.getElementById('root')
// )
// function listen () {
//   if (document.readyState == 'complete') { // 资源加载完成
//     console.log(22,Date.now())
//     b = Date.now() - window.begin;
//     // c = Date.now() - window.time;
//     console.log('time1',)
//     console.log('time2',b)
//   } else { // 资源加载中
//     // console.log(11,Date.now())
//     a = Date.now()
//     ReactDOM.render(
//       <div className='loading'>111</div>,
//       document.getElementById('root')
//   )
//   }
// }

// document.onreadystatechange = listen
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);