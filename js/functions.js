// menu navigation

document.querySelector('#home') && document.querySelector('#home').addEventListener('click', () => {
    window.scrollTo(0, 0);
    return false;
});

document.querySelector('#work') && document.querySelector('#work').addEventListener('click', () => {
  document.querySelector('#work-divider').scrollIntoView();
  return false;
});

document.querySelector('#about') && document.querySelector('#about').addEventListener('click', () => {
  document.querySelector('#about-divider').scrollIntoView();
  return false;
});

document.querySelector('#start') && document.querySelector('#start').addEventListener('click', () => {
  window.scrollTo(0, 0);
  return false;
});

document.querySelector('#prices') && document.querySelector('#prices').addEventListener('click', () => {
  document.querySelector('#prices-divider').scrollIntoView();
  return false;
});

document.querySelector('#tos') && document.querySelector('#tos').addEventListener('click', () => {
  document.querySelector('#tos-divider').scrollIntoView();
  return false;
});

//art menu mini navigation

let menu = document.getElementById('art-menu');

document.querySelector('.menu-main a') && document.querySelector('.menu-main a').addEventListener('click', () => {
  if (menu.className == 'menu') {
    menu.className = 'menu open';
  } else {
    menu.className = 'menu';
  }
});

let illustration = document.getElementById('illustration');
let design = document.getElementById('design');
menu.innerHTML = window.location.pathname;
if (window.location.pathname.endsWith('/index.html') || window.location.href == 'https://sonnelia.github.io') {
  var images = document.querySelectorAll('#illustration .image-preview');

  document.querySelector('#menu-illustration') && document.querySelector('#menu-illustration').addEventListener('click', () => {
    if (illustration.className == 'artwork') {
      illustration.className = 'artwork active';
      design.className = 'artwork';
      images = document.querySelectorAll('#illustration .image-preview');
      eachImage();
    }
  });
  
  document.querySelector('#menu-design') && document.querySelector('#menu-design').addEventListener('click', () => {
    if (design.className == 'artwork') {
      design.className = 'artwork active';
      illustration.className = 'artwork';
      images = document.querySelectorAll('#design .image-preview');
      eachImage();
    }
  });
}

if (window.location.pathname.endsWith('/commissions.html')) {
  var images = document.querySelectorAll('#commissions .image-preview');
}

// image viewer, zoomed in fullscreen
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
}});

document.querySelector('.viewer-close') && document.querySelector('.viewer-close').addEventListener('click', () => {
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

document.querySelector('.viewer-previous a') && document.querySelector('.viewer-previous a').addEventListener('click', () => {
  currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  changeImage();
});

document.querySelector('.viewer-next a') && document.querySelector('.viewer-next a').addEventListener('click', () => {
  currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
  changeImage();
});

// custom cursor

const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const imgs = document.querySelectorAll('.image-preview');

document.addEventListener('touchend', (e) => {
  cursor.style.display = 'none';
});

document.addEventListener('mousemove', (e) => {
  let cursorX = e.clientX;
  let cursorY = e.clientY;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  handleMouseMove(e);
});

function handleMouseMove(event) {
  sessionStorage.setItem('cursorX', event.pageX);
  sessionStorage.setItem('cursorY', event.pageY);
}

document.addEventListener('DOMContentLoaded', () => {
  let cursorX = sessionStorage.getItem('cursorX');
  let cursorY = sessionStorage.getItem('cursorY');

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


window.addEventListener('scroll', () => {
  var scrolled = window.pageYOffset;
  document.documentElement.style.setProperty('--bg-position', -(scrolled*0.2)+'px');
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

const invite = [
  'thank you for your interest',
  'scroll to see prices'
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

const el2 = document.querySelector('#invite')
const fx2 = new TextScramble(el2)

let counter2 = 0
const next2 = () => {
  fx2.setText(invite[counter2]).then(() => {
    setTimeout(next2, 5000)
  })
  counter2 = (counter2 + 1) % invite.length
}

if (el2 && fx2) {
  next2();
}

// language change

let english = document.getElementById('english');
let polish = document.getElementById('polish');

let currentLanguage = 0;

english && english.addEventListener('click', () => {
  if (english.className == 'lan') {
    english.className = 'lan active';
    polish.className = 'lan'
    currentLanguage = 0;
    changeLanguage();
  }
});

polish && polish.addEventListener('click', () => {
  if (polish.className == 'lan') {
    polish.className = 'lan active';
    english.className = 'lan'
    currentLanguage = 1;
    changeLanguage();
  }
});

let choose = document.querySelector('.language th'),
    rulesp = document.querySelector('.rules p'),
    rules = document.querySelectorAll('.rules dd'),
    processp = document.querySelector('.process p'),
    process = document.querySelectorAll('.process li'),
    prices = document.querySelectorAll('.price-list td:not(:has(img))'),
    extra = document.querySelector('.extra th'),
    tosp = document.querySelectorAll('.terms-of-service p'),
    tosd = document.querySelectorAll('.terms-of-service dt'),
    tos = document.querySelectorAll('.terms-of-service dd');

function changeLanguage() {
  let currentTranslations = translations[currentLanguage].choose;
  choose.innerHTML = currentTranslations;

  
  currentTranslations = translations[currentLanguage].rules;
  rulesp.innerHTML = currentTranslations[0];
  rules.forEach((item, index) => {
    item.innerHTML = currentTranslations[index + 1];
  });

  currentTranslations = translations[currentLanguage].process;
  processp.innerHTML = currentTranslations[0];
  process.forEach((item, index) => {
    item.innerHTML = currentTranslations[index + 1];
  });
  
  currentTranslations = translations[currentLanguage].prices;
  prices.forEach((item, index) => {
    item.innerHTML = currentTranslations[index];
  });
  
  currentTranslations = translations[currentLanguage].extra;
  extra.innerHTML = currentTranslations;
  
  currentTranslations = translations[currentLanguage].tos;
  tosp.forEach((item, index) => {
    item.innerHTML = currentTranslations[index];
  });
  tosd.forEach((item, index) => {
    item.innerHTML = currentTranslations[index + 2];
  });
  tos.forEach((item, index) => {
    item.innerHTML = currentTranslations[index + 8];
  });
}

// language objects

let translations = [
  {
    language: 'english',
    choose: 'Choose language:',
    rules: [
      'General rules',
      'By commissioning, the client agrees to my terms of service. Please read carefully before ordering.',
      'Listed prices are subject to possible change in the future and are for personal use commissions. Commercial pieces will cost more, depending on the scale of the project.',
      'The final price may increase depending on complexity.',
      'I have the right to reject any order for any reason. I will not draw gore, violence, explicit sexual content, fetishes.',
      'Usage of my art for anything NFT or AI related is strictly prohibited.',
      'When ordering written descriptions will not be enough, so please include references. They don&rsquo;t have to be pretty, even ms paint mouse drawing or collage of images can be helpful.',
      'Contact me if you want to order something that is not listed here, but presented in my portfolio (like interiors, stream assets, design, web development).',
    ],
    process: [
      'Order process',
      'Contact via <a href="mailto:glitchedmoons@gmail.com">email</a>, <a href="https://discord.com/app" target="_blank" rel="noopener noreferrer">discord</a> or <a href="https://artistree.io/sonnelia" target="_blank" rel="noopener noreferrer">artistree</a> with basic details.',
      'Discussion of commission contents, estimated time and quote.',
      'Invoice sent through email (due within 14 days).',
      'Start of commission after payment.',
      'Update and revision process.',
      'Finished pieces sent through email.',
    ],
    prices: [
      '$20',
      '$25',
      '$30',
      '$45',
      '$60',
      '$75',
      '$55',
      '$70',
      '$85',
      '$75',
      '$100',
      '$125',
      '$15 each',
      '75% additional characters',
      '25-50% animals/creatures',
      '10-50% props',
      '10-100% background',
      '0-25% complicated design',
    ],
    extra: [
      'additional costs',
    ],
    tos: [
      'terms of service',
      'Not agreeing to the terms stated below results in contract termination. Breaking any of the rules under the copyrights section will cause the client to owe me penalties.',
      'Payment',
      'Cancellation and refund policy',
      'Updates and revisions',
      'Deadlines and delivery',
      'Copyright and usage',
      'Commercial licence',
      'I accept payment only via artistree or tipo.',
      'Upfront payments only, due within 14 calendar days after an invoice had been received. Otherwise, the commission will be canceled.',
      'I can voluntarily cancel the commission at any stage. The client then receives a refund based on progress and can request to receive the work as is.',
      'The client can cancel and request a full refund on an order only when I have not started the commission yet.',
      'The client cannot cancel the commission after work has begun.',
      'The client will be able to regularly preview the piece during the process and request changes on each stage of the drawing (sketch, lineart and colors, final).',
      'To avoid complications with the finished piece, please request necessary corrections in early stages of the work.',
      'Bigger changes may require an additional fee.',
      'The commission will take between 1 week to 2 months depending on complexity and my availability. I will inform the client if I require more time.',
      'I will not work under pressure or a rushed deadline. When commissioning, the client agrees to my timings and cannot enforce differently.',
      'I, the artist, retain all copyrights over the commissioned artwork and reserve the right to use the commissioned artwork in portfolio, social media and such.',
      'I do not allow my artwork to be used for training AI or selling NFTs.',
      'The client is obliged to credit me when using the commissioned artwork.',
      'The client is allowed to use the commissioned artwork for personal use only unless a separate commercial use agreement has been made.',
      'The client is not allowed to alter the commissioned artwork in any way without my consent, please contact me to discuss it.',
      'Prints, merch, assets and anything for-profit will be categorized under commercial and will be priced accordingly, depending on scale. Please include the purpose of the commission when ordering.',
    ],
  },
  {
    language: 'polish',
    choose: 'Wybierz język:',
    rules: [
      'Zasady ogólne',
      'Zamawiając, klient wyraża zgodę na moje warunki świadczenia usług. Proszę uważnie je przeczytać przed złożeniem zamówienia.',
      'Podane ceny mogą ulec zmianie w przyszłości i dotyczą zleceń do użytku osobistego. Zamówienia komercyjne będą kosztować więcej, w zależności od skali projektu.',
      'Końcowa cena może wzrosnąć w zależności od złożoności.',
      'Zastrzegam sobie prawo odrzucić zamówienie bez podania przyczyny. Nie rysuję gore, przemocy, treści o charakterze seksualnym, fetyszy.',
      'Wykorzystywanie mojej twórczości do celów związanych z NFT albo AI jest surowo zabronione.',
      'Przy zamawianiu pisemne opisy nie wystarczą, dlatego proszę o dołączenie referencji. Nie muszą być ładne, nawet rysunek myszką w paincie albo kolaż obrazów jest przydatny.',
      'Proszę o kontakt, jeśli chcesz zamówić coś, co nie jest wypisane tutaj, a jest prezentowane w moim portfolio (jak wnętrza, assety do streamów, design, web development).',
    ],
    process: [
      'Przebieg zamówienia',
      'Kontakt poprzez <a href="mailto:glitchedmoons@gmail.com">email</a>, <a href="https://discord.com/app" target="_blank" rel="noopener noreferrer">discord</a> lub <a href="https://artistree.io/sonnelia" target="_blank" rel="noopener noreferrer">artistree</a> z podstawowymi szczegółami.',
      'Omówienie treści zlecenia, przewidywanego czasu i ceny.',
      'Faktura przesłana mailem (do zapłaty w ciągu 14 dni).',
      'Rozpoczęcie zlecenia po płatności.',
      'Informowanie o postępach i poprawy.',
      'Skończone rysunki wysłane mailem.',
    ],
    prices: [
      '80zł',
      '100zł',
      '120zł',
      '180zł',
      '240zł',
      '300zł',
      '220zł',
      '280zł',
      '340zł',
      '300zł',
      '400zł',
      '500zł',
      '60zł każda',
      '75% dodatkowe postaci',
      '25-50% zwierzęta/stworzenia',
      '10-50% dekoracje',
      '10-100% tło',
      '0-25% skomplikowany design',
    ],
    extra: [
      'dodatkowe koszta',
    ],
    tos: [
      'warunki świadczenia usług',
      'Brak zgody na warunki określone poniżej skutkuje rozwiązaniem umowy. Złamanie jakiejkolwiek zasady zawartej w sekcji dotyczącej praw autorskich spowoduje, że klient będzie winien mi grzywnę.',
      'Płatność',
      'Anulowanie i polityka zwrotów',
      'Postęp i poprawy',
      'Terminy i dostawa',
      'Prawa autorskie i użytkowanie',
      'Licencja komercyjna',
      'Akceptuję płatności tylko poprzez artistree lub tipo.',
      'Wyłącznie płatności z góry, do zapłaty w ciągu 14 dni kalendarzowych od otrzymania faktury. W przeciwnym wypadku zlecenie zostanie anulowane.',
      'Mogę dobrowolnie zrezygnować z zamówienia na każdym etapie. Klient wtedy otrzymuje zwrot pieniędzy bazowany na postępie i może zażądać otrzymania nieskończonej pracy.',
      'Klient może anulować zlecenie i zażądać całkowity zwrot pieniędzy tylko wtedy, gdy jeszcze nie zaczęłam zamówienia.',
      'Klient nie może anulować zlecenia po rozpoczęciu pracy nad nim przeze mnie.',
      'Klient będzie regularnie informowany o postępach w rysunku i może żądać zmian na każdym etapie (szkic, lineart i kolory, wersja ukończona).',
      'Aby uniknąć komplikacji ze skończonym rysunkiem, proszę o zgłaszanie niezbędnych poprawek na wczesnym etapie pracy.',
      'Większe zmiany mogą wymagać dodatkowej opłaty.',
      'Zlecenie zajmie pomiędzy 1 tygodniem, a 2 miesiącami, w zależności od złożoności i mojej dostępności. Poinformuję klienta, jeśli będę potrzebować więcej czasu.',
      'Nie będę pracować pod presją ani w pośpiechu. Zamawiając, klient zgadza się na moje terminy i nie może narzucać innych.',
      'Ja, artysta, zachowuję wszelkie prawa autorskie do zleconych rysunków i zastrzegam sobie prawo do wykorzystania ich w portfolio, mediach społecznościowych i tym podobnych.',
      'Nie zezwalam na wykorzystanie mojej twórczości do trenowania AI albo sprzedaży NFT.',
      'Klient jest zobowiązany do podania mnie jako twórcę zleconego rysunku, kiedy go używa.',
      'Klient może wykorzystywać zamówioną grafikę wyłącznie do użytku osobistego, chyba że została zawarta odrębna umowa dotycząca wykorzystania komercyjnego.',
      'Klient nie ma prawa w żaden sposób edytować zleconego rysunku bez mojej zgody, proszę o kontakt aby to omówić.',
      'Wydruki, merch, assety i cokolwiek nastawione na zysk zostanie sklasyfikowane jako komercyjne i będzie odpowiednio wycenione, w zależności od skali. Przy składaniu zamówienia proszę podać cel zlecenia.',
    ],
  }
];