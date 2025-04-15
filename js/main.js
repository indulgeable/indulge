// 검색창 요소(.search) 찾기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");


//검색할 요소를 클릭하면 실행
searchEl.addEventListener("click", function () {
    searchInputEl.focus();
});
//검색창 요소 내부의 실제 input 요소에 포커스 되면 실행 
searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
});

//검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)
searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
});

/*
    badges
    :페이지 스크롤에 따른 요소 제어

    toTOP 버튼
    :페이지 스크롤에 따른 요소 제어
*/

//페이지 스크롤에 영향을 받는 요소들 검색
const badgesEl = document.querySelector("header .badges");

// toTOP 버튼
const toTopEl = document.querySelector("#to-top");



/*
    구글 검색 : lodash cdn
    cdnjs.com -> 실행
    lodash -> 클릭
*/

// _.throttle(함수,시간)

/*
    애니메이션
    구글검색 : gsap cdn
    cdnjs.com
    gsap->클릭
*/
//gsap.to(요소,지속시간,옵션)

window.addEventListener("scroll", _.throttle(function () {
    console.log(window.scrollY);

    if (window.scrollY > 500) {
        //배지숨기기
        //bageEl.style.display="none";
        //gsap.to(요소,지속시간,옵션)
        gsap.to(badgesEl, 0.6, {
            opacity: 0,
            display: "none",
        });

            //totOP 버튼 보이기
        gsap.to(toTopEl,0.2,{
            x:0
        });
    } else {
        //배지 보이기
        //bageEl.style.display="block";
        gsap.to(badgesEl, 0.6, {
            opacity: 1,
            display: "block",
        });

        //toTop 버튼 숨기기
        gsap.to(toTopEl,0.2,{
            x:100
        });
    }


}, 300));

//visual
/*
    순서대로 나타나는 기ㅡㄴㅇ

    gsap.to(요소,지속시간,옵션)
*/
// 나타날 요소들(.fade-in ) 찾기
const fadeEls = document.querySelectorAll(".visual .fade-in");
// console.log(fadeEls);

//나타날 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
    //fadeEl -> 요소명 , index -> 색인번호
    // console.log(fadeEl);
    // console.log(index);

    //각요소들을 순서대로 (delay:지연) 보여지게함
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, // 0.1,1.4,2.1,2.8초 후에 
        opacity: 1
    });
})


// notice
/*
    swiper
    구글검색 :swiper cdn
    swiperjs.com
*/

/*
    new Swiper(요소, 옵션);

    new SWiper(".swiper",{
    direction : 'vertical, //수직슬라이드
    autoplay:true, //자동재생여부
    loop:true, // 반복재생여부
    });
*/

//슬라이드 요소 관리
new Swiper(".notice-line .swiper", {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

//pormotion 슬라이드 토글 기능

//슬라이드 영역 요소 검색
const pormotionEl = document.querySelector(".promotion");
//슬라이드 영역을 토글하는 버튼 검색
const pormotionToggleBtn = document.querySelector(".toggle-promotion")

//슬라이드 영역 숨김 여부 기본값
let isHidePromotion = false;


// 토글버튼을 클릭하면
pormotionToggleBtn.addEventListener("click", function () {
    //슬라이드 영역 숨김 여부 를 반대값으로 할당
    isHidePromotion = !isHidePromotion;

    // 요소를 숨겨야하면
    if (isHidePromotion) {
        pormotionEl.classList.add("hide");
    } else {
        pormotionEl.classList.remove("hide");
    }

});

//promotion
new Swiper(".promotion .swiper",{
    // direction:'horizontal', // 수평슬라이드(기본값)

    autoplay:{
        delay:5000 //5초마다 변경
    },
    loop:true, 
    slidesPerView:3, //한번에 보여줄 슬라이드 개수
    sapceBetween:10, // 슬라이드 사이 여백
    centeredSlides:true, // 1번 슬라이드가 중앙으로
    pagination:{ //페이지번호 사용여부
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable:true //사용자의 ㅍ이지 번호 요소 제어 가능 여부    
    },
    navigation : { // 슬라이드 이전.다음버튼 사용 여부
        prevEl:'.promotion .swiper-prev', // 이전버튼 선택자
        nextEl:'.promotion .swiper-next'     
    }
});

//부유요소

//범위 랜덤 함수(소수점 2자리까지)
function random(min,max){
    //.toFixed()을 통해 반환된 문자 데이터를 
    //parseFloat()함수를 통해소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min)+min).toFixed(2));
}

// gsap.to(요소,지속시간)

//부유요소
function floatingObject(selector,delay,size){
    gsap.to(
        selector, //선택자(요소)
        random(1.5,2.5), //애니메이션 동작 시간
        {
            delay:random(0,delay), //얼마만큼의 지연시간을 가지고 애니메이션을 시작할 것인지설정
            y:size, //transform:translateY(수치) : 와 같음 수직움직임 결정
            repeat:-1, // 몇번 반복하는 지 설정(-1 : 무한반복)
            yoyo:true, // 한번 재생된 애니매이션을 다시 뒤로 재생
            ease:Power1.easeInput // easing (가속도)함수 적용
        }
    )
}

//호출
floatingObject('.floating1',1,12);
floatingObject('.floating2',0.5,15);
floatingObject('.floating3',1.5,20);


/*
    scrollMagic
    :요소가 화면에 보여지는 여부에 따른 요소 관리

    구글 검색 : scrollMagic cdn
*/

//관리할 요소들 검색:
const spyEls=document.querySelectorAll("section.scroll-spy");

console.log(spyEls);

//요소들 반복처리

spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({ //감시할 장면을 추가
        triggerElement: spyEl,//보여짐 여부를 감시할 요소 지정
        triggerHook: .8 // 화면의 80%지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl,'show') //요소가 화면에 보이면 show 클래스추가
    .addTo(new ScrollMagic.Controller())//컨트롤러에 장면을 할당 (필수)
});

//awards
new Swiper('.awards .swiper',{
    //direction:'horizontal', 수평 슬라이드
    autoplay:true,
    loop:true,
    sapceBetween:30,
    slidesPerView:5,
    navigation:{// 버튼 사용 여부
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'

    }
});
 

//footer
// 올해가 몇년도인지 계산
const thisYear=document.querySelector(".this-year");
thisYear.textContent=new Date().getFullYear();

//to-top button 클릭했을 때 스크롤이 0으로 이동
/*
    구글 검색 : scrollToPulgin cdn
    외부라이브러리 연결
    :html->head에 연결
 */

    toTopEl.addEventListener("click",function(){
        gsap.to(window,0.7,{
            scrollTo:0
        });
    });