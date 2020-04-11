// mouseover
const logoChange = document.querySelector('.logo-heading');
logoChange.addEventListener('mouseover', () => {
    logoChange.style.color="red";
    logoChange.style.fontSize="5rem";
});

// click
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.color='blue';
    })
})

// double click
document.querySelectorAll('.content-pick .destination .btn').forEach(el => {
    el.addEventListener('dblclick', () => {
        el.style.color='yellow';
    })
})

// mousemove
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mousemove', () => {
    funBusImg.style.width="70%";
})

// mouseout
funBusImg.addEventListener('mouseout', () => {
    funBusImg.style.width='100%';
})

// mouseenter
const adventureImg = document.querySelector('.img-content');
adventureImg.addEventListener('mouseenter', () => {
    adventureImg.style.opacity="0.2";
})

// mousedown
const funImg = document.querySelector('.img-fluid');
funImg.addEventListener('mousedown', () => {
    funImg.style.opacity="0.6"
})

// mouseup
document.querySelectorAll('.destination h4').forEach(headerChange => {
    headerChange.addEventListener('mouseup', () => {
        headerChange.style.color='blue';
        headerChange.style.fontSize='3.0rem';   
    })
})

// auxselect
document.querySelectorAll('.destination p').forEach(textSelector => {
    textSelector.addEventListener('auxclick', () => {
        textSelector.style.color="red";
    })
})

// mouseleave
document.querySelectorAll('.destination .btn').forEach(btnChange => {
    btnChange.addEventListener('mouseleave', () => {
        btnChange.style.opacity="0.5";
        btnChange.style.color="darkblue";
        btnChange.style.width='50%';
        btnChange.style.backgroundColor='gray';
    })
})
