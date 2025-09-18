// © Sonnelia design and code. All rights reserved.
// Do not redistribute or edit without obtaining explicit permission
// Last updated 15 JUL 2025



// menu navigation

const body = document.querySelector('body');

let navsideA = document.querySelectorAll('.nav-side a');
let sections = document.querySelectorAll('.section');

let sectionId, sectionPosition;

window.onload = () => { updateSideNav(0); }

window.addEventListener('scroll', () => { updateSideNav(window.scrollY); })

const updateSideNav = (scrollPosition) => {
  sections.forEach((section) => {
    sectionId = section.id;
    sectionPosition = section.getBoundingClientRect();
    document.documentElement.style.setProperty('--' + sectionId + '-line', Math.max(0, sectionPosition.top + section.offsetHeight - 150)+'px');

    if (sectionPosition.top + scrollPosition <= scrollPosition + 200 && sectionPosition.top + scrollPosition + section.offsetHeight > scrollPosition + 200) {
      navsideA.forEach((link) => { link.classList.remove('active'); })
      document.getElementById('nav-' + sectionId).classList.add('active');
    }
  })
}

navsideA.forEach((link) => {
  link.addEventListener('click' , () => {
    document.querySelector('#' + link.id.split('-')[1]).scrollIntoView();
    body.classList.remove('mobile');
    changeMenu('menu');
  })
})



// mobile menu

let menu = document.getElementById('menu');

menu && body && menu.addEventListener('click', () => {
  if (!body.classList.contains('mobile')) {
    body.classList.add('mobile');
    changeMenu('close');
  }
  else {
    body.classList.remove('mobile');
    changeMenu('menu');
  }
})

const changeMenu = (text) => {
  menu.classList.add('change');
  setTimeout(() => {
    menu.innerHTML = text;
    menu.classList.remove('change');
  }, 300);
}



// custom cursor

const cursor = document.getElementById('cursor');
let isPC = !/Mobi/i.test(navigator.userAgent);

document.addEventListener('touchend', () => { cursor.style.display = 'none'; })

document.addEventListener('mousemove', (event) => {
  if (isPC) cursor.style.display = 'block';
  
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + 'px';

  storeCursorState(event);
})

const storeCursorState = (event) => {
  sessionStorage.setItem('cursorX', event.clientX);
  sessionStorage.setItem('cursorY', event.clientY);
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
})

const findLinks = () => {
  let links = document.querySelectorAll('a, input, textarea, .artwork div');
  links.forEach(link => {
    link.addEventListener('mouseover', () => { cursor.classList.add('hover'); })
    link.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); })
  })
}
findLinks();



//background parallax

window.addEventListener('scroll', () => {
  var scrolled = window.pageYOffset;
  var bodyHeight =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.documentElement.style.setProperty('--bg-position', -(scrolled*0.2)+'px');
  document.documentElement.style.setProperty('--border-position',  Math.round((scrolled / bodyHeight) * 10000) / 100 +'%');
})



// prevent images from being interactable

document.querySelectorAll('img').forEach((image) => { image.addEventListener('contextmenu', (e) => { e.preventDefault(); }) })
document.ondragstart = function() { return false; }



// image viewer, zoomed in fullscreen
// https://www.tutorjoes.in/JS_tutorial/image_gallery_in_javascript

let images = document.querySelectorAll('.artwork div');

const viewer = document.querySelector('.image-viewer');
const zoom = document.querySelector('.image-zoom img');
const zoomp = document.querySelector('.image-zoom p');
let imageIndex = 0;
let isViewerOpen = false;

const eachImage = () => {
  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      imageIndex = index;

      insertImage(image);

      isViewerOpen = true;
      viewerStatus();
    })
  })
}
if (images) eachImage ();

const insertImage = (image) => {
  zoom.setAttribute("src", image.querySelector('img').src);
  zoomp.innerHTML = image.querySelector('p').innerHTML;
  document.documentElement.style.setProperty('--zoom-paragraph-height', zoomp.offsetHeight + 'px');
  viewer.classList.remove('change');
  findLinks();
}


document.querySelectorAll('.nav-viewer a').forEach((link) => { link.addEventListener('click', () => { viewerBehavior(link.id); }) })
document.addEventListener('keyup', (event) => { if (isViewerOpen === true) viewerBehavior(event.code); })

const viewerBehavior = (event) => {
  if (event == 'previous' || event == 'ArrowLeft' || event == 'KeyA') {
    imageIndex = imageIndex - 1 < 0 ? images.length - 1 : imageIndex - 1;
    changeImage();
  }
  else if (event == 'next' || event == 'ArrowRight' || event == 'KeyD') {
    imageIndex = imageIndex + 1 >= images.length ? 0 : imageIndex + 1;
    changeImage();
  }
  else if (event == 'close' || event == 'Escape' || event == 'KeyX') {
    isViewerOpen = false;
    viewerStatus();
  }
}

const changeImage = () => {
  const image = images[imageIndex];
  viewer.classList.add('change');
  setTimeout(() => { insertImage(image); }, 300);
}

const viewerStatus = () => {
  if (isViewerOpen) body.classList.add('viewer-open');
  else body.classList.remove('viewer-open');
}



// generate tos on the page

let tos = document.getElementById('terms-of-service');
let data = `⸬ intro

∙ By commissioning, the client agrees to my terms of service. Please read carefully before ordering. Not agreeing to the terms stated below will lead to immediate order rejection.
∙ Violating any of these terms results in project termination and possibly blacklisting the client.
∙ Breaking any rule under the copyrights section will cause the client to owe me penalties and be stripped of all rights to use any of the commissioned products.



⸬ contact

∙ Initial contact preferably via email (glitchedmoons@gmail.com), Artistree (artistree.io/sonnelia) or VGen (vgen.co/sonnelia). Otherwise requests might not be taken into consideration.
∙ I reserve the right to decline any order without any explanation. I don't do gore, violence, offensive themes, explicit sexual content, fetishes.
∙ When ordering along with basic description, the client must include the purpose of the commission, price limit if on a budget, a deadline if existing and a confidentiality request if needed.
∙ In addition, when ordering, I require visual references from the client. It can be simple symbolic drawings and/or a collage of images. Additional fees may be charged if I have to collect them myself.
∙ If the provided references include premade art/assets, the client must have permission or rights from the original creator to use them in a project.



⸬ communication

∙ For the ease of communication, especially while working on bigger projects, I can offer messaging via my discord work server (not in private messages).
∙ If the client stops responding for more than two weeks without prior notice, commission work will be put on hold. I may also terminate the project and offer a refund based on progress.
∙ All personal information and logs of conversations related to the commission will be handled confidential by the artist and the same is expected from the client.



⸬ payment

∙ I accept payment only via Artistree or VGen. Artistree is preferable.
∙ Upfront payments only unless agreed otherwise. Depending on the size of the commission, payment plans can be considered. 
∙ All payments are due within 7 calendar days after an invoice has been received. Otherwise, the commission will be canceled and the client will not receive any files.



⸬ cancellation and refund policy

∙ I reserve the right to cancel a commission at any time. If I cancel a project after work has begun, the client receives a refund based on progress and can request to receive the product as is.
∙ The client can cancel and request a full refund on an order only when I have not started the commission yet. The client cannot cancel the commission after work has begun.
∙ I keep the rights to reuse or repurpose the product after cancellation, if the client does not want it.



⸬ updates and revisions

∙ The client will be able to regularly preview the state of the project and request changes, if necessary. Large or frequent revisions may require an additional fee.
∙ Commissions with coding include half-year support for bug fixing and small updates.
∙ All revisions, additions or upgrades to completed projects will be considered as a new project and will be priced accordingly.



⸬ deadlines and delivery

∙ Delivery date is dependant on the commission's complexity and my availability. I will inform the client if I require more time than expected.
∙ I will not work under pressure or a rushed deadline. When commissioning, the client agrees to my working pace and cannot enforce differently.
∙ Finished products will be sent via email as downloadable digital files.



⸬ copyright and usage

∙ I, as the artist, retain full and exclusive rights to the commissioned work. The client may not claim my work as their own or use it for any purpose outside of originally declared use intentions.
∙ Unless timed confidentiality has been requested by the client, I reserve the right to use the commissioned work in portfolio, social media and such to promote myself.
∙ The client is obliged to credit me when using the commissioned product by including a link to either my website or one of my social media.
∙ The client is not allowed to share works in progress without my consent or credit.
∙ The client is not allowed to alter the commissioned work in any way without my consent, please contact me to discuss it.
∙ I do not allow my work to be used for training AI or selling NFTs, as well as to be repurposed, heavily referenced, traced and/or copied.



⸬ commercial license

∙ Materials for content creators and businesses will be considered and priced as monetizable, meaning that the client may profit off of it indirectly.
∙ Commissioned work intended for digital or physical sales will be categorized under commercial and will be priced accordingly, depending on scale.
∙ All other requests will be presumed for personal usage unless stated otherwise by the client when ordering.



Last updated: September 18, 2025.`;

const generateTos = () => {
  let lines = data.split('\n').map(line => line.trim().replace(/\s+/g, ' '));

  let dl;

  for (let i = 0; i < lines.length; i++) {

    if (lines[i].includes('⸬')) {
      dl = document.createElement('dl');
      tos.append(dl);

      let dt = document.createElement('dt');
      dt.innerHTML = lines[i].substring(2);
      dl.append(dt);
    }
    else if (lines[i].includes('∙')) {
      let dd = document.createElement('dd');
      dd.innerHTML = lines[i].substring(2);
      dl.append(dd);
    }
    else if (lines[i]) {
      let p = document.createElement('p');
      p.innerHTML = lines[i];
      dl.append(p);
    }
  }
}
if (tos) generateTos();



// redirect tos

if (window.location.pathname.includes('terms-of-service')) window.location.replace('https://sonnelia.github.io/commissions#tos');



// custom alerts for required input fields

document.addEventListener("invalid", (event) => {
    event.preventDefault();

    let inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.classList.add('required'));
    setTimeout(() => { inputs.forEach(input => input.classList.remove('required')); }, 3000);
  },
  { capture: true },
)

// TextScramble https://codepen.io/soulwire/pen/mEMPrK