// ...................................................................Start one script
let Contaner = document.getElementById("Contaner");
let loding = document.getElementById("loding");
let num = document.getElementById("num"); // let
ward.addEventListener("click", function () {
  console.log(num.value);
  span.innerHTML = num.value;
  num.value = "";
  setTimeout(function () {
    loding.style.display = "none";
    5000;
  });
  setTimeout(function () {
    Contaner.style.display = "grid";
    5000;
  });
});

// ...................................................................End One Script
document.addEventListener('DOMContentLoaded', (event) => {

  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.1';
    this.style.border = '3px dashed #c4cad3';
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('task-hover');
  }

  function handleDragLeave(e) {
    this.classList.remove('task-hover');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    this.style.border = 0;
    
    items.forEach(function (item) {
      item.classList.remove('task-hover');
    });
  }
  
  
  let items = document.querySelectorAll('.task'); 
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});
// ................................................................... Start Tow Script

let counter = document.querySelectorAll(".counter");
console.log(counter);

setInterval(() => {
  for (let con of counter) {
    con.innerHTML = +con.innerHTML + 1;
  }
}, 1000);

// ................................................................... End Tow Script
const myTags = [
  'HTML', 'CSS', 'JavaScript',
  'Bootstrap', 'Responsive', 'SVG',
  'Git', 'Github', 'Linkedin',
  'Animation', 'Canvas', 'Ps',
  'Dom.js', 'Icons', 'Bom.js',
];

var tagCloud = TagCloud('.content', myTags,{

// radius in px
radius: 250,

// animation speed
// slow, normal, fast
maxSpeed: 'fast',
initSpeed: 'fast',

// 0 = top
// 90 = left
// 135 = right-bottom
direction: 135,

// interact with cursor move on mouse out
keep: true

});

//To change the color of text randomly
var colors = ['#ffffff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;


// .........................

//DOM STRINGS OBJECT
const DOM = {
  timelineDate: document.querySelectorAll('.timeline__date'),
  timelineElem: document.querySelectorAll('.timeline__elem'),
  timelineBar: document.querySelector('.timeline__bar') };


//TIMELINE ELEM SET DIRECTION TO EVENT ITEMS (left or right oriented)

//getting direction from .timeline-elem
const __getDir = timelineElem => {

  if (timelineElem.classList.contains('timeline__elem--left')) {
    return 'left';
  } else if (timelineElem.classList.contains('timeline__elem--right')) {
    return 'right';
  }

};

const setDirEvent = () => {

  DOM.timelineElem.forEach(elem => {

    const direction = __getDir(elem);

    const timelineEvent = elem.querySelector('.timeline__event');

    timelineEvent.classList.add(`timeline__event--${direction}`);

  });

};

//TIMELINE ELEM DATE STYLES (background)
const __getBGImage = () => {

  const compStyle = getComputedStyle(DOM.timelineBar);

  return compStyle.backgroundImage;

};

const __getBGSize_height = () => {

  const timebarHeight = DOM.timelineBar.offsetHeight;

  return timebarHeight;

};

const __getBGPos_y = dateElem => {

  const timelinebarBox = DOM.timelineBar.getBoundingClientRect();

  const dateBox = dateElem.getBoundingClientRect();

  const pos_y = dateBox.top - timelinebarBox.top;

  return pos_y;

};

const setDateBG = () => {

  const bgImg = __getBGImage();

  const bgHeight = __getBGSize_height();

  DOM.timelineDate.forEach(elem => {

    //setting bgImage
    elem.style.backgroundImage = bgImg;

    //setting bgSize
    elem.style.backgroundSize = `100% ${bgHeight}px`;

    //setting bgPosition
    const dateOffset = __getBGPos_y(elem);

    elem.style.backgroundPosition = `0 -${dateOffset}px`;

  });

};

//ONLOAD FUNCTION
window.addEventListener('load', () => {

  //setting direction class to the timeline event block
  setDirEvent();

  //set date background styles
  setDateBG();

});


// ...................