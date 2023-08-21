const fanodes = document.querySelectorAll(".node");
const get = document.querySelectorAll(".get");
const inner = document.querySelector(".box-1");

// fanodes.forEach(item2 =>{
//     item2.addEventListener('click', ()=> {
//         get.forEach(item => {
//             item.classList.toggle('open')
//         });
//     })
// })
fanodes.forEach((f, i) => {
    f.addEventListener('click', () => {

            get[i].classList.add('open')
            
        });

})

document.addEventListener('click', (e) => {
    get.forEach((g, i) => {
        if (e.target !== g && e.target !== fanodes[i] && !e.target.classList.contains('fa')) {
            if (g.classList.contains('open')) {
                g.classList.remove('open')
            }
        }

    })
})



// inner.addEventListener('click', ()=> {
//     get.classList.remove('open')
// })




