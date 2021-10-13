const menu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.mobile-menu-list');
const introPage = document.querySelector('.intro-page');
const times = document.querySelector('.fa-times');
const listitem = document.querySelector('.mobile-menu-list');

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
const myRecentWorkNormAbout = document.querySelector('.section-about');
const myRecentWorkNormContact = document.querySelector('.section-contact');
const myRecentWorkNormFooter = document.querySelector('footer');
const myRecentModalSection = document.querySelector('.recent-work-model');

document.addEventListener('click', (event) => {
  if (event.target.matches('.modal2')) {
    myRecentWorkNorm.style.display = 'grid';
    myRecentModalSection.style.display = 'none';
    myRecentWorkNormAbout.style.display = 'grid';
    myRecentWorkNormContact.style.display = 'flex';
    myRecentWorkNormFooter.style.display = 'block';
  } else if (event.target.matches('.main')) {
    myRecentWorkNorm.style.display = 'grid';
    myRecentModalSection.style.display = 'none';
    myRecentWorkNormAbout.style.display = 'grid';
    myRecentWorkNormContact.style.display = 'flex';
    myRecentWorkNormFooter.style.display = 'block';
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

  const myRecentModalImg = document.getElementById('modal-img');
  const myRecentModalP = document.querySelector('#modal-p');
  const myRecentModalTitle = document.querySelector('#modal-title');
  const myRecentModalTags = document.querySelector('#modal-tag');

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
    },
    second: {
      img: myRecentWorkSecondImg.backgroundImage.slice(4, -1).replace(/["']/g, ''),
      title: myRecentWorkSecondSpan.innerText,
      paragraph: myRecentWorkSecondP.innerText,
      tags: myRecentWorkSecondLi.innerHTML,
    },
    third: {
      img: myRecentWorkThirdImg.backgroundImage.slice(4, -1).replace(/["']/g, ''),
      title: myRecentWorkThirdSpan.innerText,
      paragraph: myRecentWorkThirdP.innerText,
      tags: myRecentWorkThirdLi.innerHTML,
    },

  };

  const myRecentWorkButton = document.querySelectorAll('.modal-button');

  myRecentWorkButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.getAttribute('data-model');

      if (modal === '1') {
        myRecentWorkNorm.style.display = 'none';
        myRecentModalSection.style.display = 'flex';
        myRecentWorkNormAbout.style.display = 'none';
        myRecentWorkNormContact.style.display = 'none';
        myRecentWorkNormFooter.style.display = 'none';
        myRecentModalImg.src = myRecentWork.first.img;
        myRecentModalP.innerText = myRecentWork.first.paragraph;
        myRecentModalTags.innerHTML = myRecentWork.first.tags;
      } else if (modal === '2') {
        myRecentWorkNorm.style.display = 'none';
        myRecentModalSection.style.display = 'flex';
        myRecentWorkNormAbout.style.display = 'none';
        myRecentWorkNormContact.style.display = 'none';
        myRecentWorkNormFooter.style.display = 'none';

        myRecentModalImg.src = myRecentWork.second.img;
        myRecentModalP.innerText = myRecentWork.second.paragraph;
        myRecentModalTags.innerHTML = myRecentWork.second.tags;

        myRecentModalTitle.innerText = myRecentWork.second.title;
      } else {
        myRecentWorkNorm.style.display = 'none';
        myRecentModalSection.style.display = 'flex';
        myRecentWorkNormAbout.style.display = 'none';
        myRecentWorkNormContact.style.display = 'none';
        myRecentWorkNormFooter.style.display = 'none';

        myRecentModalImg.src = myRecentWork.third.img;
        myRecentModalP.innerText = myRecentWork.third.paragraph;
        myRecentModalTags.innerHTML = myRecentWork.third.tags;

        myRecentModalTitle.innerText = myRecentWork.third.title;
      }
    });
  });
});

// My Recent Works

