document.querySelector('#home').addEventListener('click', () => {
    window.scrollTo(0, 0);
    return false;
});

document.querySelector('#work').addEventListener('click', () => {
  document.querySelector('#work-divider').scrollIntoView();
  return false;
});

document.querySelector('#about').addEventListener('click', () => {
  document.querySelector('#about-divider').scrollIntoView();
  return false;
});

let menu = document.getElementById('art-menu');

document.querySelector('.menu-main a').addEventListener('click', () => {
  if (menu.className == 'menu') {
    menu.className = 'menu open';
  } else {
    menu.className = 'menu';
  }
});

let illustration = document.getElementById('illustration');
let design = document.getElementById('design');
let images = document.querySelectorAll('#illustration .image-preview');

document.querySelector('#menu-illustration').addEventListener('click', () => {
  if (illustration.className == 'artwork') {
    illustration.className = 'artwork active';
    design.className = 'artwork';
    images = document.querySelectorAll('#illustration .image-preview');
    eachImage();
  }
});

document.querySelector('#menu-design').addEventListener('click', () => {
  if (design.className == 'artwork') {
    design.className = 'artwork active';
    illustration.className = 'artwork';
    images = document.querySelectorAll('#design .image-preview');
    eachImage();
  }
});

// https://www.tutorjoes.in/JS_tutorial/image_gallery_in_javascript

const viewer = document.querySelector('.image-viewer');
const body = document.querySelector('body');
const zoom = document.querySelector('.image-zoom');
let currentIndex = 0;

function eachImage () {
  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentIndex = index;
      zoom.setAttribute("src", image.src);
      viewer.className = 'image-viewer viewer-open';
      body.style.overflow = 'hidden';
    });
  });
};

eachImage ();

document.querySelector('.viewer-close').addEventListener('click', () => {
  viewer.className = 'image-viewer';
  body.style.overflow = '';
});

function changeImage() {
  const image = images[currentIndex];
  zoom.className = 'image-zoom change';
  setTimeout(() => {
    zoom.setAttribute("src", image.src);
    zoom.className = 'image-zoom';
  }, 350);
};

document.querySelector('.viewer-previous a').addEventListener('click', () => {
  currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  changeImage()
});

document.querySelector('.viewer-next a').addEventListener('click', () => {
  currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
  changeImage()
});

const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const imgs = document.querySelectorAll('.image-preview');

document.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

imgs.forEach(img => {
  img.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  img.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

// ——————————————————————————————————————————————————
// TextScramble https://codepen.io/soulwire/pen/mEMPrK
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="scramble">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const intro = [
  'hello, welcome to my headspace',
  'explore my creations below'
]

const el = document.querySelector('#intro')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(intro[counter]).then(() => {
    setTimeout(next, 5000)
  })
  counter = (counter + 1) % intro.length
}

next()