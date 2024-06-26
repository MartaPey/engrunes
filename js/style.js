function on() {
    
}

function off() {
     document.getElementById("overlay").style.display = "none";
}

 
// Drag carpetas
 const draggable = document.getElementById('draggable');
    const header = document.getElementById('draggable-header');
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;
        header.style.cursor = 'grabbing';

        function onMouseMove(e) {
            draggable.style.left = `${e.clientX - offsetX}px`;
            draggable.style.top = `${e.clientY - offsetY}px`;
        }

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
            header.style.cursor = 'grab';
        }, { once: true });
    });


//Cambiar color boton a lila al hacer click

document.addEventListener('DOMContentLoaded', () => {
    const toggleElements =document.getElementById('toggle-element');

    toggleElements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('active');
        });
    });
});


//Abrir overlay

function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay.classList.contains('show')) {
        overlay.classList.remove('show');
    } else {
        overlay.classList.add('show');
    }
}

// Asigna la función toggleOverlay al primer botón
document.querySelector('.navbar-link').addEventListener('click', function() {
    toggleOverlay();
});

function toggleOverlay2() {
    var overlay2 = document.getElementById('overlay-2');
    if (overlay2.classList.contains('show')) {
        overlay2.classList.remove('show');
    } else {
        overlay2.classList.add('show');
    }
}


// Asigna la función toggleOverlay2 al segundo botón (la imagen dentro del div)
document.querySelector('.navbar-link img').addEventListener('click', function() {
    toggleOverlay2();
});


//despliegue titulo projectes
function toggleVisibility(id) {
    var content = document.getElementById(id);
    content.classList.toggle('show');
}


//Scan overlay


function toggleOverlay3(id) {
    var overlay3 = document.getElementById(id);
    if (overlay3.classList.contains('show')) {
        overlay3.classList.remove('show');
    } else {
        overlay3.classList.add('show');
    }
}


//Darkmode
document.addEventListener('DOMContentLoaded', () => {
    const modeToggleButton = document.getElementById('mode-toggle-button');

    // Check for saved user preference in localStorage
    const currentMode = localStorage.getItem('mode') || 'light';
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
    }

    modeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save the current mode in localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    });
});



//Hora

       function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}

//Numero random
function generateRandomNumber() {
            return Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
        }

        function updateRandomNumber() {
            var randomNumberElement = document.getElementById('random-number');
            randomNumberElement.textContent = generateRandomNumber();
        }

        // Actualiza el número aleatorio cada segundo (1000 milisegundos)
        setInterval(updateRandomNumber, 100);