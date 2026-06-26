
const btn = document.getElementById("Change-Theme");
const portfolio = document.getElementById("portfolio");

btn.addEventListener("click", function(){

    portfolio.classList.toggle("dark-mode");
    portfolio.classList.toggle("light-mode");

    if(portfolio.classList.contains("dark-mode")){
        btn.innerHTML = "Light Mode";
        localStorage.setItem("theme", "dark");
    }
    else{
        btn.innerHTML = "Dark Mode";
        localStorage.setItem("theme", "light");
    }

});

window.onload = () => {

    const Current_Theme = localStorage.getItem("theme");

    if (Current_Theme === "dark") {

        portfolio.classList.remove("light-mode");
        portfolio.classList.add("dark-mode");

        btn.textContent = "Light Mode";
    }
    else {

        portfolio.classList.remove("dark-mode");
        portfolio.classList.add("light-mode");

        btn.textContent = "Dark Mode";
    }

};

const profile = {

    name: "Devesh",
    college: "CCET",
    cgpa: 8.77,
    age: 20

};

localStorage.setItem(
    "profile",
    JSON.stringify(profile)
);

const data = JSON.parse(
    localStorage.getItem("profile")
);
alert(" My name is " + data.name);

const jsonBtn = document.getElementById("day3");

jsonBtn.addEventListener("click",()=>{

    const profile={

        name:"Devesh",
        branch:"CSE",
        CGPA:8.77,
        Age:20
    };

    const jsonString=JSON.stringify(profile,null,4);

    console.log(jsonString);

    alert(jsonString);

});