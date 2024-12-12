// menu navigation

let navContentsA = document.querySelectorAll('.nav-contents a');
let mainElements = document.querySelectorAll('main > *');

let elemId, rect;

window.onload = () => {

  mainElements.forEach((elem, index) => {
    elemId = elem.id;
    rect = elem.getBoundingClientRect();
    document.documentElement.style.setProperty('--' + elemId + '-line', Math.max(0, rect.top + elem.offsetHeight - 150)+'px');
  });
}

window.addEventListener('scroll', () => {
  var scrollPos = window.scrollY;

  mainElements.forEach((elem, index) => {
    elemId = elem.id;
    rect = elem.getBoundingClientRect();

    if (rect.top + scrollPos <= scrollPos + 200 && rect.top + scrollPos + elem.offsetHeight > scrollPos + 200) {

      navContentsA.forEach((link, index) => {
        if (!document.getElementById('nav-' + elemId).classList.contains('active')) {
          link.classList.remove('active');
        }
        document.getElementById('nav-' + elemId).classList.add('active');
      });
    }
    else {
      document.getElementById('nav-' + elemId).classList.remove('active');
    }

    document.documentElement.style.setProperty('--' + elemId + '-line', Math.max(0, rect.top + elem.offsetHeight - 150)+'px');
  });

});

navContentsA.forEach((link, index) => {
  link.addEventListener('click' , () => {
    let linkId = link.id.split('-')[1].split('.')[0];
    if(linkId == 'home' || linkId == 'start' || linkId == 'language') {
      window.scrollTo(0, 0);
    }
    else {
      document.querySelector('#' + linkId + '-divider').scrollIntoView();
    }

  })
});



//mobile menu

let menu = document.getElementById('menu');
let header = document.querySelector('header');

menu && header && menu.addEventListener('click', () => {
  if (menu.innerHTML == 'menu') {
    header.classList.add('mobile');
    menu.innerHTML = 'close';
  } else {
    header.classList.remove('mobile');
    menu.innerHTML = 'menu';
  }
});

document.querySelectorAll('.nav-contents a').forEach((link, index) => {
  link.addEventListener('click', () => {
    header.classList.remove('mobile');
    menu.innerHTML = 'menu';
  })
});



//portfolio art menu

let menuIllustration = document.querySelector('#menu-illustration');
let illustrationArtwork = document.getElementById('illustration-artwork');
let menuDesign  =document.querySelector('#menu-design');
let designArtwork = document.getElementById('design-artwork');

if ((window.location.pathname.endsWith('/index.html') || window.location.pathname == '/')) {
  var images = document.querySelectorAll('#illustration-artwork .image-preview');

  menuIllustration && menuIllustration.addEventListener('click', () => {
    if (illustrationArtwork.className == 'artwork') {
      illustrationArtwork.className = 'artwork active';
      designArtwork.className = 'artwork';
      menuIllustration.classList.add('active');
      menuDesign.classList.remove('active');
      images = document.querySelectorAll('#illustration-artwork .image-preview');
      eachImage();
    }
  });
  
  menuDesign && menuDesign.addEventListener('click', () => {
    if (designArtwork.className == 'artwork') {
      designArtwork.className = 'artwork active';
      illustrationArtwork.className = 'artwork';
      menuDesign.classList.add('active');
      menuIllustration.classList.remove('active');
      images = document.querySelectorAll('#design-artwork .image-preview');
      eachImage();
    }
  });
}

if (window.location.pathname.endsWith('/commissions/index.html') || window.location.pathname.endsWith('/commissions') || window.location.pathname.endsWith('/commissions/')) {
  var images = document.querySelectorAll('.commissions .image-preview');
}



//mail to clipboard

document.querySelectorAll('.mail').forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText('glitchedmoons@gmail.com')
        .then(() => {
          link.innerHTML = 'copied!';
          setTimeout(() => {
            link.innerHTML = 'mail';
          }, 3000);
        })
        .catch(() => {
          window.location.href = 'mailto:glitchedmoons@gmail.com';
        });
    } else {
      window.location.href = 'mailto:glitchedmoons@gmail.com';
    }
  });
});



// image viewer, zoomed in fullscreen
// https://www.tutorjoes.in/JS_tutorial/image_gallery_in_javascript

let allImages = document.querySelectorAll('img');

allImages.forEach ((image) => {
  image .addEventListener('contextmenu', function(e) {
    e.preventDefault();
  })
});

document.ondragstart = function() {
  return false; 
};

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

if (images) {
  eachImage ();
}

let isViewerOpen = false;

let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      let newClass = mutation.target.className;
      if (newClass == 'image-viewer viewer-open') {
        isViewerOpen = true;
      } else {
        isViewerOpen = false;
      }
    }
  });
});

if (viewer) {
  observer.observe(viewer, { attributes: true });
}

document.addEventListener('keyup', (e) => {
  if (isViewerOpen === true) {
    if (e.code === "ArrowLeft") {
      currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
      changeImage();
    }
    if (e.code === "ArrowRight") {
      currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
      changeImage();
    }
    if (e.code === "Escape") {
      viewer.className = 'image-viewer';
      body.style.overflow = '';
    }
  }
});

document.querySelector('.viewer-close') && document.querySelector('.viewer-close').addEventListener('click', () => {
  viewer.className = 'image-viewer';
  body.style.overflow = '';
});

document.getElementById('noise-viewer') && document.getElementById('noise-viewer').addEventListener('click', () => {
  console.log('meow');
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

document.querySelector('.viewer-previous') && document.querySelector('.viewer-previous').addEventListener('click', () => {
  currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  changeImage();
});

document.querySelector('.viewer-next') && document.querySelector('.viewer-next').addEventListener('click', () => {
  currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
  changeImage();
});



// custom cursor

const cursor = document.getElementById('cursor');
const links = document.querySelectorAll('a');
const imgs = document.querySelectorAll('.image-preview');
let isPC = !/Mobi/i.test(navigator.userAgent);

document.addEventListener('touchend', (e) => {
  cursor.style.display = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (isPC) {
    cursor.style.display = 'block';
  }
  
  let cursorX = e.clientX;
  let cursorY = e.clientY;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  handleMouseMove(e);
});

function handleMouseMove(event) {
  sessionStorage.setItem('cursorX', event.pageX);
  sessionStorage.setItem('cursorY', event.pageY);
  sessionStorage.setItem('cursorStyle', cursor.style.display);
}

document.addEventListener('DOMContentLoaded', () => {
  let cursorX = sessionStorage.getItem('cursorX');
  let cursorY = sessionStorage.getItem('cursorY');
  let cursorStyle = sessionStorage.getItem('cursorStyle');

  cursor.style.display = cursorStyle;


  if (cursorX && cursorY) {
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
  }
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



//background parallax

//let scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

let randomNumber = Math.floor(Math.random() * 11) + 95;

window.addEventListener('scroll', () => {
  var scrolled = window.pageYOffset;
  document.documentElement.style.setProperty('--bg-position', -(scrolled*0.2)+'px');
  document.documentElement.style.setProperty('--border-position', (Math.floor(scrolled / randomNumber) * randomNumber)+'vh');
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

if (el && fx) {
  next();
}



// language change

let en = document.getElementById('english'),
    pl = document.getElementById('polish');

en && en.addEventListener('click', () => {
  if (!en.classList.contains('active')) {
    changeLanguage('en');
  }
});

pl && pl.addEventListener('click', () => {
  if (!pl.classList.contains('active')) {
    changeLanguage('pl');
  }
});



let rulesp = document.querySelector('#rules p'),
    rules = document.querySelectorAll('#rules dd'),
    processp = document.querySelector('#process p'),
    process = document.querySelectorAll('#process li'),
    tosp = document.querySelector('#terms-of-service p'),
    tosdt = document.querySelectorAll('#terms-of-service dt'),
    tosdd = document.querySelectorAll('#terms-of-service dd');

function changeLanguage(language) {

  if (language == 'pl') {
    pl.classList.add('active');
    en.classList.remove('active');

    fetch('https://sonnelia.github.io/tos-pl.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not as expected');
      }
      return response.text();
    })
    .then(data => {
        let lines = data.split('\n').map(line => line.substring(2).replace(/( 〕| 〉)/g, ""));

        rulesp.innerText = lines[4];
        for (let i = 6; i < 13; i++) {
          rules[i - 6].innerText = lines[i];
        }

        processp.innerText = lines[15];
        for (let i = 17; i < 23; i++) {
          process[i - 17].innerText = lines[i];
        }

        tosp.innerText = lines[25];
        let indices = [27, 32, 40, 45, 50, 55, 60, 67];
        let j = 0;
        let k = 0;
        for (let i = 27; i < lines.length - 1; i++) {
          if (lines[i] === "") {
            continue;
          }
          if (indices.includes(i)) {
            tosdt[j].innerText = lines[i];
            j++;
          }
          else {
            tosdd[k].innerText = lines[i];
            k++;
          }
        }
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  else if (language == 'en') {
    en.classList.add('active');
    pl.classList.remove('active');

    fetch('https://sonnelia.github.io/tos-en.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not as expected');
      }
      return response.text();
    })
    .then(data => {
        let lines = data.split('\n').map(line => line.substring(2).replace(/( 〕| 〉)/g, ""));

        rulesp.innerText = lines[4];
        for (let i = 6; i < 13; i++) {
          rules[i - 6].innerText = lines[i];
        }

        processp.innerText = lines[15];
        for (let i = 17; i < 23; i++) {
          process[i - 17].innerText = lines[i];
        }

        tosp.innerText = lines[25];
        let indices = [27, 32, 40, 45, 50, 55, 60, 67];
        let j = 0;
        let k = 0;
        for (let i = 27; i < lines.length - 1; i++) {
          if (lines[i] === "") {
            continue;
          }
          if (indices.includes(i)) {
            tosdt[j].innerText = lines[i];
            j++;
          }
          else {
            tosdd[k].innerText = lines[i];
            k++;
          }
        }
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
}