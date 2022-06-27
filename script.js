let see_more = document.querySelector("#smbutton");
let parent = document.querySelector("#formore");
see_more.addEventListener('click',()=>{
    
    parent.classList.toggle('see_more');
    if(see_more.innerText==='See More'){
        see_more.innerText='See Less';
    }
    else{
        see_more.innerText='See More';
    }
})
let read_more = document.querySelector("#rmbutton");
let vparent = document.querySelector("#vtd_c");
read_more.addEventListener('click',()=>{
    vparent.classList.toggle('read_more');
    if(read_more.innerText==='Read More'){
        read_more.innerText='Read Less';
    }
    else{
        read_more.innerText='Read More';
    }
})
let read_morep= document.querySelector("#remord");
let pp = document.querySelector('#topstremore');
read_morep.addEventListener('click',()=>{
    pp.classList.toggle('read_morep');
    if(read_morep.innerText==='Read More >'){
        read_morep.innerText='< Read Less';
    }
    else{
        read_morep.innerText='Read More >'
    }
    
})