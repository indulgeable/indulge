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