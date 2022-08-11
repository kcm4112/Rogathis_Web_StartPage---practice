//모든 이미지와 좌우 화살표 가져오기
var slides = document.querySelectorAll("#slides > img");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

//현재 이미지의 인덱스를 저장할 변수 cur 선언
var cur = 0;

//현재 이미지를 나타내는 함수, 이전 이미지와 다음 이미지를 나타내는 함수 선언.
function showSlides(n){
  // n번째 이미지를 제외하고 나머지는 다 화면에서 감춘다.
  for(var i = 0; i<slides.length; i++){
    slides[i].style.display="none";
  }
  slides[n].style.display="block";
}

function prevSlide() {
  if(cur > 0){ //현재 사진의 인덱스가 0보다 크면 이전 이미지
    cur = cur - 1;
  }
  else{ //만약 현재 사진의 인덱스가 0번째라면 이전 사진은 제일 마지막 사진으로!
    cur = slides.length-1;
  }
  showSlides(cur); 
}


function nextSlide(){
  if(cur<slides.length-1){
    cur = cur + 1;
  }
  else{
    cur = 0;
  }
  showSlides(cur);
}

showSlides(cur);
prev.onclick = prevSlide;
next.onclick = nextSlide;
