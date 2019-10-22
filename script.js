const model = document.querySelector('.model');
const burger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.sideBar');
const work = document.querySelector('.work_sec');
const closeBtn = document.getElementById('close');

burger.addEventListener('click', showSideBar);

model.addEventListener('click', hideSideBar);

work.addEventListener('click', e => togglePhotoFrame(e, 'show'));

closeBtn.addEventListener('click', e => togglePhotoFrame(e, 'hide'));

function showSideBar() {
  model.classList.add('fadeIn');
  sideBar.classList.add('slideIn');
}
function hideSideBar() {
  sideBar.classList.remove('slideIn');
  model.classList.remove('fadeIn');
}

function togglePhotoFrame(e, action) {
  let id = e.target.getAttribute('id');
  const frame = document.querySelector('.photo_frame');
  const imgCon = document.querySelector('.main_img_con');
  if (action === 'hide') {
    model.classList.remove('fadeIn');
    frame.classList.remove('showFrame');
    imgCon.style.backgroundImage = `url("./imgs/spinner.gif")`;
    imgCon.style.backgroundSize = 'auto';
  } else if (id && action === 'show') {
    model.classList.add('fadeIn');
    frame.classList.add('showFrame');
    imgCon.style.backgroundImage = `url("./imgs/gallery/${id}.jpg")`;
    imgCon.style.backgroundSize = 'cover';

    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    next.addEventListener('click', () => nextPhoto('next'));
    prev.addEventListener('click', () => nextPhoto('prev'));
    hideNavBtn();
  }
  function nextPhoto(action) {
    if (action === 'next' && id < 12)
      imgCon.style.backgroundImage = `url("./imgs/gallery/${++id}.jpg")`;
    else if (action === 'prev' && id > 1)
      imgCon.style.backgroundImage = `url("./imgs/gallery/${--id}.jpg")`;

    hideNavBtn();
  }
  function hideNavBtn() {
    if (id == 1) prev.style.display = 'none';
    else if (id == 12) next.style.display = 'none';
    else {
      next.style.display = 'inline-block';
      prev.style.display = 'inline-block';
    }
  }
}
