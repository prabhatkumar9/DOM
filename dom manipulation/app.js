let element = document.querySelector('div');
element.style.color = 'orangered';

let pelem = document.querySelectorAll('p');
for(var p of pelem){
    p.style.color = 'blue';

}

var pnew = document.createElement('p');
console.log(pnew);

pnew.textContent = 'paragraph five';
el = document.querySelector('div');
el.appendChild(pnew);

// console.log(pnew);

// el.removeChild(pnew);

let strong = document.createElement('strong');
strong.textContent = 'strong';
element.appendChild(strong);