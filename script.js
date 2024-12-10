let selections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    selections.forEach( sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a [href*=' + id + ']').classList.add('active');
            });
        } ;
    } );
};