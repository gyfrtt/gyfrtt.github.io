function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("content").classList.toggle("content-shift");
}

function selectTab(sectionId) {
    const sections = document.querySelectorAll('.animated-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('selected');
        } else {
            section.classList.remove('selected');
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        sidebar.classList.add("active");
        content.classList.add("content-shift");
    }}
function myFunction() {
var x = document.getElementById("navDemo");
if (x.className.indexOf("w3-show") == -1) {
x.className += " w3-show";
} else { 
x.className = x.className.replace(" w3-show", "");
}
}
