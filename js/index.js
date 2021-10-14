const menu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.mobile-menu-list');
const introPage = document.querySelector('.intro-page');
const times = document.querySelector('.fa-times');
const listitem = document.querySelector('.mobile-menu-list');

const contactValues = {};
const form = document.querySelector('#contact-form');
const email = document.querySelector('#email');
const contactName = document.querySelector('#name');
const contactMessage = document.querySelector('#message');

menu.addEventListener('click', () => {
  introPage.style.display = 'none';
  menuList.style.display = 'flex';
});
times.addEventListener('click', () => {
  menuList.style.display = 'none';
  introPage.style.display = 'grid';
});
listitem.addEventListener('click', () => {
  menuList.style.display = 'none';
  introPage.style.display = 'grid';
});

const myRecentWorkNorm = document.querySelector('.section-body');
const myRecentWorkNormMain = document.querySelector('.main');

const myRecentWorkNormAbout = document.querySelector('.section-about');
const myRecentWorkNormContact = document.querySelector('.section-contact');
const myRecentWorkNormFooter = document.querySelector('footer');
const myRecentModalSection = document.querySelector('.recent-work-model');
const myRecentModalIntro = document.querySelector('.intro-page');

document.addEventListener('click', (event) => {
  if (event.target.matches('.modal2')) {
    myRecentWorkNorm.style.display = 'grid';
    myRecentModalSection.style.display = 'none';
    myRecentWorkNormMain.style.height = 'auto';

    myRecentWorkNormAbout.style.display = 'grid';
    myRecentWorkNormContact.style.display = 'flex';
    myRecentWorkNormFooter.style.display = 'block';
    myRecentModalIntro.style.display = 'grid';
  } else if (event.target.matches('.main')) {
    myRecentWorkNorm.style.display = 'grid';
    myRecentModalSection.style.display = 'none';
    myRecentWorkNormMain.style.height = 'auto';

    myRecentWorkNormAbout.style.display = 'grid';
    myRecentWorkNormContact.style.display = 'flex';
    myRecentWorkNormFooter.style.display = 'block';
    myRecentModalIntro.style.display = 'grid';
  }
}, false);

window.addEventListener('load', () => {
  // first recent
  const myRecentWorkFirstTitle = document.querySelector('#myRecentWorktitle1');
  const myRecentWorkFirstP = document.querySelector('#myRecentWorkP1');
  const myRecentWorkFirstImg = document.querySelector('.project-img img').src;
  const myRecentWorkFirstTags = document.querySelector('#myRecentWorkLi1');
  // first recent

  // second recent
  const myRecentWorkSecond = document.querySelector('.context-projects-2');
  const myRecentWorkSecondImg = getComputedStyle(myRecentWorkSecond);
  const myRecentWorkSecondSpan = document.querySelector('.context-projects-2 span');
  const myRecentWorkSecondP = document.querySelector('.context-projects-2 p');
  const myRecentWorkSecondLi = document.querySelector('.myRecentWorkSecondLi');

  // second recent

  // third recent

  const myRecentWorkThird = document.querySelector('.context-projects-3');
  const myRecentWorkThirdImg = getComputedStyle(myRecentWorkThird);
  const myRecentWorkThirdSpan = document.querySelector('.context-projects-3 span');
  const myRecentWorkThirdP = document.querySelector('.context-projects-3 p');
  const myRecentWorkThirdLi = document.querySelector('.myRecentWorkThirdLi');

  // third recent

  // recents modal
  const myRecentWorkNorm = document.querySelector('.section-body');
  const myRecentWorkNormAbout = document.querySelector('.section-about');
  const myRecentWorkNormContact = document.querySelector('.section-contact');
  const myRecentWorkNormFooter = document.querySelector('footer');
  const myRecentModalSection = document.querySelector('.recent-work-model');
  const myRecentWorkNormMain = document.querySelector('.main');

  const myRecentModalImg = document.getElementById('modal-img');
  const myRecentModalP = document.querySelector('#modal-p');
  const myRecentModalTitle = document.querySelector('#modal-title');
  const myRecentModalTags = document.querySelector('#modal-tag');

  const myRecentModalBtnLive = document.querySelector('#modal-see-btn');
  const myRecentModalBtnSrc = document.querySelector('#modal-source-btn');

  // modal-source-btn

  // recents modal

  // recent times

  // recent times
  const myRecentWork = {
    a: 'a',
    first: {
      img: myRecentWorkFirstImg,
      title: myRecentWorkFirstTitle.innerText,
      paragraph: myRecentWorkFirstP.innerText,
      tags: myRecentWorkFirstTags.innerHTML,
      btnlive: 'https://google.com',
      btnsrc: 'https://google.com',
    },
    second: {
      img: myRecentWorkSecondImg.backgroundImage.slice(4, -1).replace(/["']/g, ''),
      title: myRecentWorkSecondSpan.innerText,
      paragraph: myRecentWorkSecondP.innerText,
      tags: myRecentWorkSecondLi.innerHTML,
      btnlive: 'https://google.com',
      btnsrc: 'https://google.com',
    },
    third: {
      img: myRecentWorkThirdImg.backgroundImage.slice(4, -1).replace(/["']/g, ''),
      title: myRecentWorkThirdSpan.innerText,
      paragraph: myRecentWorkThirdP.innerText,
      tags: myRecentWorkThirdLi.innerHTML,
      btnlive: 'https://google.com',
      btnsrc: 'https://google.com',
    },

  };

  const myRecentWorkButton = document.querySelectorAll('.modal-button');

  myRecentWorkButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.getAttribute('data-model');

      if (modal === '1') {
        myRecentWorkNorm.style.display = 'none';
        myRecentModalSection.style.display = 'flex';
        myRecentWorkNormMain.style.height = '100vh';
        myRecentWorkNormAbout.style.display = 'none';
        myRecentWorkNormContact.style.display = 'none';
        myRecentWorkNormFooter.style.display = 'none';
        myRecentModalIntro.style.display = 'none';

        myRecentModalImg.src = myRecentWork.first.img;
        myRecentModalP.innerText = myRecentWork.first.paragraph;
        myRecentModalTags.innerHTML = myRecentWork.first.tags;
        myRecentModalBtnLive.href = myRecentWork.first.btnlive;
        myRecentModalBtnSrc.href = myRecentWork.first.btnsrc;
      } else if (modal === '2') {
        myRecentWorkNorm.style.display = 'none';
        myRecentModalSection.style.display = 'flex';
        myRecentWorkNormMain.style.height = '100vh';
        myRecentWorkNormAbout.style.display = 'none';
        myRecentWorkNormContact.style.display = 'none';
        myRecentWorkNormFooter.style.display = 'none';
        myRecentModalIntro.style.display = 'none';

        myRecentModalImg.src = myRecentWork.second.img;
        myRecentModalP.innerText = myRecentWork.second.paragraph;
        myRecentModalTags.innerHTML = myRecentWork.second.tags;
        myRecentModalBtnLive.href = myRecentWork.second.btnlive;
        myRecentModalBtnSrc.href = myRecentWork.second.btnsrc;

        myRecentModalTitle.innerText = myRecentWork.second.title;
      } else {
        myRecentWorkNorm.style.display = 'none';
        myRecentModalSection.style.display = 'flex';
        myRecentWorkNormMain.style.height = '100vh';
        myRecentWorkNormAbout.style.display = 'none';
        myRecentWorkNormContact.style.display = 'none';
        myRecentWorkNormFooter.style.display = 'none';
        myRecentModalIntro.style.display = 'none';

        myRecentModalImg.src = myRecentWork.third.img;
        myRecentModalP.innerText = myRecentWork.third.paragraph;
        myRecentModalTags.innerHTML = myRecentWork.third.tags;

        myRecentModalTitle.innerText = myRecentWork.third.title;
        myRecentModalBtnLive.href = myRecentWork.third.btnlive;
        myRecentModalBtnSrc.href = myRecentWork.third.btnsrc;
      }
    });
  });
  const registerList = JSON.parse(localStorage.getItem('register'));
  contactMessage.value = registerList.message;
  contactName.value = registerList.name;
  email.value = registerList.email;
});

// My Recent Works

// Form Valitation

const msg = document.querySelector('small');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const checkEmail = email.value.toLowerCase();
  if (checkEmail !== email.value) {
    event.preventDefault();
    msg.innerText = 'Email Field should be in Lowercase';
    msg.style.color = 'red';
    msg.focus();
  } else {
    contactValues.name = contactName.value;
    contactValues.email = email.value;
    contactValues.message = contactMessage.value;
    localStorage.clear();
    localStorage.setItem('register', JSON.stringify(contactValues));
  }
});