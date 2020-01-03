const container = document.querySelector('#container');

for (let i = 0; i < 16; ++i)
{
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'div-format');
    container.appendChild(newDiv);
}