let times = [];
let MD = new Date();
let Y = MD.getFullYear();
let M = MD.getMonth() + 1;
let D = MD.getDate();

for (let h = 0; h < 24; h++) {
    if (h < 10) {
        h = `0${h}`
    }
    for (let m = 0; m < 60; m++) {
        if (m < 10) {
            m = `0${m}`
        }
        let date = new Date(`${Y}-${M}-${D} ${h}:${m}`);
        times.push(date.valueOf())
    }
}
// for (let h = 0; h < 24; h++) {
//     if (h < 10) {
//         h = `0${h}`
//     }
//     for (let m = 0; m < 60; m++) {
//         if (m < 10) {
//             m = `0${m}`
//         }
//         for (let s = 0; s < 60; s++) {
//             if (s < 10) {
//                 s = `0${s}`
//             }
//             times.push(`${h}:${m}:${s}`)
//         }
//     }
// }
export { times }