
const btn = document.getElementById("Change-Theme");
const profile = document.getElementById("portfolio");

btn.addEventListener("click", function(){

    profile.classList.toggle("dark-mode");
    profile.classList.toggle("light-mode");

    if(profile.classList.contains("dark-mode")){
        btn.innerHTML = "Light Mode";
    }
    else{
        btn.innerHTML = "Dark Mode";
    }

});

