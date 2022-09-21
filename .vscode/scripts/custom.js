// let observers = [];

// const getElement = () => document.querySelector('.sidebar .monaco-list-rows')

// let timeout = null;

// const handleChange = () => {
//   // clearTimeout(timeout)
//   // timeout = setTimeout(() => {
//   //   const rows = document.querySelectorAll('.monaco-list-row');
//   //   rows.forEach((row, i) => {
//   //     const currentTop = parseFloat(row.style.top)
//   //     row.style.top = `${currentTop + 5 + i}px`;
//   //   })
//   // }, 500)
// }

// const registerObserver = (target) => {
//   const observersLength = observers.length
//   observers[observersLength] = new MutationObserver(function (mutations) {
//     mutations.forEach(function (mutationRecord) {
//       (window.handleChange || handleChange)();
//     });
//   });


//   observers[observersLength].observe(target, { attributes: true, attributeFilter: ['style'] });
// }

// setTimeout(() => {
//   const target = getElement()
//   registerObserver(target)
// }, 2000)

// window.onbeforeunload = () => {
//   observers.forEach(observer => {
//     observer.disconnect()
//   })
// }