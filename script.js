let add = document.querySelector('#add');
let container = document.querySelector('#container');
let input = document.querySelector('#inp');

add.addEventListener('click', function()
    {
        let val = input.value;
        let div = document.createElement('div');
        div.innerHTML = `<div class='indiv'><span class='spn'>${val}</span>
                         <button class='done' id='done'>Done</button>s
                        <button class="delete-button">Remove</button></div>`;
        container.appendChild(div);
        input.value = null;
    })

container.addEventListener('click', function(event)
    {
     if (event.target.className === 'delete-button')
      {
        event.target.parentNode.remove();
      }
    })

container.addEventListener('click', function(event)
    {
        if (event.target.className === 'done')
        {
            let button = document.getElementById('done');
            let color = 'rgb(35, 206, 29)';
            button.addEventListener('click', function()
            {
                button.style.backgroundColor = color;
            });
        }
    })