document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        // setTimeout(() => {
        //     document.querySelector('.cross').style.display = 'inline';
        // }, 300);
        document.querySelector('.cross').style.display = 'inline';
    }
})

document.querySelectorAll('.lgt').forEach(element=>{element.style.display = 'none'});
document.querySelector('.darkmode').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark');
    if (document.querySelector('body').classList.contains('dark')) {

        document.querySelectorAll('.lgt').forEach(element=>{element.style.display = 'inline'});
        document.querySelectorAll('.drk').forEach(element=>{element.style.display = 'none'});
        
        document.querySelector('.BLOG').style.color= 'white';
        document.querySelector('.infoContainer').style.border="1px solid white";
        document.querySelectorAll('.blogItem').forEach(element=>{element.style.border="1px solid white"});
    }
    else {
        document.querySelectorAll('.lgt').forEach(element=>{element.style.display = 'none'});
        document.querySelectorAll('.drk').forEach(element=>{element.style.display = 'inline'});
        
        document.querySelector('.BLOG').style.color= 'black';
        // setTimeout(() => {
        //     document.querySelectorAll('.drk').style.display = 'inline';
        // }, 300);
        
        document.querySelector('.infoContainer').style.border="1px solid black";
        document.querySelectorAll('.blogItem').forEach(element=>{element.style.border="1px solid black"});
    }
})



window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


document.querySelectorAll('.like').forEach(element=>{element.addEventListener('click', () => {
    const num=document.querySelector('.number').innerHTML;
    number=parseInt(num);
    number=number+1;
    document.querySelector('.number').innerHTML=number;

})})

// document.querySelector('#cm').addEventListener('click', () => {
    
// })

// document.querySelector('#dr').addEventListener('click', () => {
//     const num=document.querySelector('.number').innerHTML;
//     number=parseInt(num);
//     number=number+1;
//     document.querySelector('.number').innerHTML=number;

// })

