document.addEventListener("DOMContentLoaded", function(){
    fetch(CART_INFO_URL).then(res => res.json())
    .then(response => {
        console.log(response)
    })
})