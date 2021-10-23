let items = document .querySelectorAll('.nav-container .navbars a[role="button"]')
let contentss = document .querySelectorAll('.container .contents .text-contents')
console.log(contentss)

items.forEach(function(item){
    item.addEventListener("click" , function(){
        items.forEach(function(a){
           a.parentNode.classList.remove("selectedd")
        })

        item.parentNode.classList.toggle("selectedd")

        contentss.forEach(function(collapse){
            collapse.classList.remove("show")
        })

    })
})
