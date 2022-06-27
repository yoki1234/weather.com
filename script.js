let see_more = document.querySelector(".top_story_container button");
let parent = document.querySelector(".tp_swipe4");
see_more.addEventListener('click',()=>{
    parent.classList.toggle('see_more');
})