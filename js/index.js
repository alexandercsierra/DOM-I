const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


let link1 = document.querySelectorAll("header nav a")[0];
let link2 = document.querySelectorAll("header nav a")[1];
let link3 = document.querySelectorAll("header nav a")[2];
let link4 = document.querySelectorAll("header nav a")[3];
let link5 = document.querySelectorAll("header nav a")[4];
let link6 = document.querySelectorAll("header nav a")[5];

link1.textContent = siteContent.nav["nav-item-1"];
link2.textContent = siteContent.nav["nav-item-2"];
link3.textContent = siteContent.nav["nav-item-3"];
link4.textContent = siteContent.nav["nav-item-4"];
link5.textContent = siteContent.nav["nav-item-5"];
link6.textContent = siteContent.nav["nav-item-6"];

let navLinks = document.querySelectorAll("nav a");

for (let item of navLinks){
  item.style.color = "green";
}

let nav = document.querySelector("nav");

let link = document.createElement("a");
link.textContent = "End";
link.style.color = "green";
nav.appendChild(link);

let link0 = document.createElement("a");
link0.textContent = "Start";
link0.style.color = "green";
nav.prepend(link0);








let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let cta = document.querySelector(".cta-text h1");
cta.innerHTML = "DOM<br> IS<br> AWESOME";


let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta.button;





//STRETCH
let topDiv = document.querySelector(".cta-text");
let discoBtn = document.createElement("button");
discoBtn.textContent="DISCO!";
topDiv.appendChild(discoBtn);

let body = document.querySelector("body");

discoBtn.addEventListener("click", e => {
  e.preventDefault();
  function randomColor(){
    let blue = "#0307fc";
    let green = "#0cc21e";
    let yellow = "#e5ff00";
    let red = "#ff0000";

    let colors = [blue, green, yellow, red];

    body.style.backgroundColor = colors[Math.floor(Math.random() * 4)];

  }
  setInterval(function() {
    // body.style.backgroundColor = random_rgba();
    body.style.backgroundColor = randomColor();
    
  }, 500 );
});

//END STRETCH


  







let ctaImg = document.querySelector(" #cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


let firstH4 = document.querySelector(".text-content h4");
firstH4.textContent = siteContent["main-content"]["features-h4"];

let firstpara = document.querySelectorAll(".text-content p")[0];
firstpara.textContent = siteContent["main-content"]["features-content"];

let secondH4 = document.querySelectorAll(".text-content h4")[1];
secondH4.textContent = siteContent["main-content"]["about-h4"];

let secondPara = document.querySelectorAll(".text-content p")[1];
secondPara.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let servicesTitle = document.querySelectorAll(".bottom-content .text-content h4")[0];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

let thirdPara = document.querySelectorAll(".text-content p")[2];
thirdPara.textContent = siteContent["main-content"]["services-content"];

let productTitle = document.querySelectorAll(".bottom-content .text-content h4")[1];
productTitle.textContent = siteContent["main-content"]["product-h4"];

let fourthPara = document.querySelectorAll(".text-content p")[3];
fourthPara.textContent = siteContent["main-content"]["product-content"];

let visionTitle = document.querySelectorAll(".bottom-content .text-content h4")[2];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

let fifthPara = document.querySelectorAll(".text-content p")[4];
fifthPara.textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact h4");
contact.textContent = siteContent.contact["contact-h4"];

let address = document.querySelectorAll(".contact p")[0];
// address.textContent = siteContent.contact.address;
address.innerHTML = "123 Way 456 Street<br> Somewhere, USA";

let phone = document.querySelectorAll(".contact p")[1];
phone.textContent = siteContent.contact.phone;

let email = document.querySelectorAll(".contact p")[2];
email.textContent = siteContent.contact.email;

let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;

