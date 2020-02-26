'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu" aria-labelledby="cinema">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    let container = document.createElement('div');
    container.innerHTML = this.template;

    element.appendChild(container);

    let menuElements = document.querySelectorAll('.list-group-item');

    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener('pointerenter', event => {
        let dropList = event.target.children[1];
        dropList.classList.add('show');

        let backDrop = document.querySelector('.backdrop');
        backDrop.classList.add('show');
      });

      menuElements[i].addEventListener('pointerleave', event => {
        let dropList = event.target.children[1];
        dropList.classList.remove('show');

        let backDrop = document.querySelector('.backdrop');
        backDrop.classList.remove('show');
      });
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
