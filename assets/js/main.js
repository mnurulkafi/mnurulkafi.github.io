$(document).ready(function () {
    $('.bi-moon-fill').hide();
    particle_dark();
    load_skill();
    load_project();
    let body = "dark";
    var r = document.documentElement;
    $('#flexSwitchCheckDefault').click(function(){
        if(body === "dark"){
            $('#particles-js').attr('id', 'particles-js-white');
            particle_white();
            $('nav').attr('class', 'navbar navbar-expand-lg navbar-light');
            $('.bi-moon-fill').show();
            $('.bi-moon').hide();
            r.style.setProperty('--text-color-dark', '#2f3e49');
            r.style.setProperty('--card-color', '#f2f2f2');
            r.style.setProperty('--text-color-light', '#f2f2f2');
            body = "white";
        }else{
            $('#particles-js-white').attr('id', 'particles-js');
            particle_dark();
            $('nav').attr('class', 'navbar navbar-expand-lg navbar-dark');
            $('.bi-moon-fill').hide();
            $('.bi-moon').show();
            r.style.setProperty('--text-color-dark', '#f2f2f2');
            r.style.setProperty('--card-color', '#494c58');
            r.style.setProperty('--text-color-light', '#2f3e49');
            body = "dark";
        }
    });
})

let data_skill =[
    {
        nama : "HTML5",
        desk: "<b>2 Years</b> of experience.",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        nama: "CSS",
        desk: "<b>2 Years</b> of experience.",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        nama: "JavaScript",
        desk: "<b>6 Months</b> of experience.",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        nama: "Jquery",
        desk: "<b>6 Months</b> of experience.",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
    },
    {
        nama: "React JS",
        desk: "1 Months of experience.",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    },
    {
        nama: "PHP",
        desk: "<b>1 Years</b> of experience.",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
        nama: "Laravel",
        desk: "<b>1 Years</b> of experience.",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
    },
    {
        nama: "Github",
        desk: "6 months of experience.",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    }
];

const load_skill = () =>{
    let tag = "";
    for (const key in data_skill) {
        tag += `<div class="col-sm-3 mt-4">
                        <div class="card card-custom">
                            <img src="${data_skill[key].img}" class="card-img">
                            <div class="card-body">
                                <h5 class="card-title">${data_skill[key].nama}</h5>
                                <p class="card-text">${data_skill[key].desk}</p>
                            </div>
                        </div>
                    </div>`
    }
    document.getElementById("row-skills").innerHTML = tag;
}

let data_project = [
    {
        nama : "Sistem Informasi Mebel",
        img : "assets/img/project1.png",
        bahasa : ["PHP NATIVE","Team - Project"]
    },{
        nama: "Sistem Informasi Minimarket",
        img: "assets/img/project5.png",
        bahasa: ["JAVA" , "Team - Project"]    
    }, {
        nama: "Sistem Informasi Poliklinik",
        img: "assets/img/project6.png",
        bahasa: ["JAVA" , "Team - Project"]
    }, {
        nama: "Jelejah Negeri",
        img: "assets/img/project2.png",
        bahasa: ["JAVA" , "Action Script", "Team - Project"]
    }, {
        nama: "E-Vote Pemilihan Ketua Mahasiswa",
        img: "assets/img/project4.png",
        bahasa: ["PHP", "Laravel 7", "Jquery" , "Solo - Project"]
    }
]

const load_project = () => {
    let tag = "";
    for (const key in data_project) {
        tag += `<div class="work-card">
                    <a href="https://www.youtube.com/watch?v=xiyO9kOOfCw&t=1s" target="_blank">
                        <img src="${data_project[key].img}" alt="" class="work-img">
                    </a>
                    <h3 class="work-title">${data_project[key].nama}</h3>
                    <div class="bahasa">`
                    for(let i=0;i<data_project[key].bahasa.length;i++){
                        tag += `<span class="bahasa-item">${data_project[key].bahasa[i]}</span>`
                    }
        tag +=     `</div>
                    <a href="https://www.youtube.com/watch?v=xiyO9kOOfCw&t=1s" target="_blank"
                        class="work-button">
                        Demo <i data-feather="arrow-right" class="work-icon"></i>
                    </a>
                </div>` 
    }
    tag += `<div class="work-card">
                    <a href="https://www.youtube.com/watch?v=xiyO9kOOfCw&t=1s" target="_blank">
                        <iframe width="1348" height="654" class="work-img" src="https://www.youtube.com/embed/xiyO9kOOfCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </a>
                    <h3 class="work-title">Toko Online</h3>
                    <div class="bahasa">
                    <span class="bahasa-item">PHP</span>
                    <span class="bahasa-item">Laravel 8</span>
                    <span class="bahasa-item">Jquery</span>
                    <span class="bahasa-item">API</span>
                    <span class="bahasa-item">Solo - Project</span></div>
                    <a href="assets/img/project5.png" target="_blank" class="work-button">
                        Demo <i data-feather="arrow-right" class="work-icon"></i>
                    </a>
                </div>`
    document.getElementById("work-list").innerHTML = tag;
}
/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

const particle_dark = () =>{
    particlesJS("particles-js",
        {
            "particles":
            {
                "number":
                {
                    "value": 40, "density":
                        { "enable": true, "value_area": 800 }
                }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
            }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
        });
}
const particle_white = () =>{
    particlesJS("particles-js-white",
        { "particles": { "number": { "value":40, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#2f3e49" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#2f3e49", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });;
}