const container = document.querySelector('#container');
const para = document.createElement('p');
const header = document.createElement('h3');
const div = document.createElement('div');
const paraChild = document.createElement('p');
const headerChild= document.createElement('h1');

para.textContent = 'Hey i\'m red!';
para.setAttribute('style', 'color: red;' );
header.textContent = "i'm a blue h3!";
header.setAttribute('style','color:blue;');
div.setAttribute('style', 'border-color:black; background-color:pink;');
headerChild.textContent = "i'm in a div";
paraChild.textContent = "ME TOO!";


div.append(headerChild, paraChild);
container.append(para, header, div);
const btn = document.querySelector('button');
//btn.addEventListener('click', alertFunction)
btn.addEventListener('click', function (e){ 
    console.log(e.target);
})



function alertFunction(){
    alert('it worked');
}