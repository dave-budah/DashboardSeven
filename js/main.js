const trigger = document.querySelector(".trigger a");
const classAdd = document.querySelector('.site');
trigger.addEventListener('click', function() {
    classAdd.classList.toggle('mininav')
})


const submenu = document.querySelectorAll('.has-child > a');
submenu.forEach((menu) => menu.addEventListener('click', toggle));
function toggle() {
    submenu.forEach((item) => item !== this ? item.classList.remove('collapse') : null);
    if (this.parentNode.classList !== 'collapse') {
        this.parentNode.classList.toggle('collapse');
    }
}
// Add class on active link
const activeLink = document.querySelectorAll('.sidenav a');
function activeLinkBg() {
    activeLink.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');
}
activeLink.forEach(link => link.addEventListener('click', activeLinkBg));


// Profile toggle
function profileSwitcher() {
    const profileQuickView = document.querySelector('.profile-sidebar'),
        profileSidebar = document.querySelector('.profile-sidebar-toggle');
        profileSidebar.addEventListener('click', function (){
            profileQuickView.classList.add('open');
        });
}
profileSwitcher();
function closeProfileSwitcher() {
    const profileQuickView = document.querySelector('.profile-sidebar'),
        closeProfileSwitcher = document.querySelector('.profile-sidebar-toggler');
    closeProfileSwitcher.addEventListener('click', function (){
        profileQuickView.classList.remove('open');
    });
}
closeProfileSwitcher();


