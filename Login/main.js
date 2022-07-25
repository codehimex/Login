let user = document.getElementById("user");
let btn = document.getElementById("btn");

btn.onclick = function(){
    swal("OK " + user.value , "", "success");
}