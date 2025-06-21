document.addEventListener("DOMContentLoaded", function () {
    const NAV = document.getElementById("nav");
    const SECTIONS = document.querySelectorAll(".section");
    const NAV_HOME_LINK = document.getElementById("nav-home-link");
    const NAV_PROJECT_LINK = document.getElementById("nav-project-link");
    const NAV_CONTACT_LINK = document.getElementById("nav-contact-link");

    function updateHeader(){
        SECTIONS.forEach(section => {
            const SECTION_TOP = section.getBoundingClientRect().top;
            const SECTION_HEIGHT = section.offsetHeight;

            if(SECTION_TOP <= NAV.offsetHeight && SECTION_TOP + SECTION_HEIGHT >= NAV.offsetHeight){ //MAKE INBETWEEN NAV.offsetHeight AND 0 fade ###############
                if(section.id != "home"){
                    NAV.style.backgroundColor = "var(--transparentWhite)";
                    NAV.style.color = "var(--black)";
                    NAV.style.borderBottom = "1px dashed var(--black)";
                    Array.from(NAV.children).forEach(child => {
                        child.style.backgroundColor = "transparent";
                    });
                    if(section.id == "project"){
                        NAV_HOME_LINK.style.border = "none";
                        NAV_PROJECT_LINK.style.border = "1px solid var(--black)";
                        NAV_CONTACT_LINK.style.border = "none";
                    }
                    if(section.id == "contact"){
                        NAV_HOME_LINK.style.border = "none";
                        NAV_PROJECT_LINK.style.border = "none";
                        NAV_CONTACT_LINK.style.border = "1px solid var(--black)";
                    }
                }else{
                    NAV_HOME_LINK.style.border = "1px solid var(--white)";
                    NAV_PROJECT_LINK.style.border = "none";
                    NAV_CONTACT_LINK.style.border = "none";
                    NAV.style.backgroundColor = "transparent";
                    NAV.style.color = "var(--white)";
                    NAV.style.borderBottom = "none";
                }
            }
        });
    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();
});