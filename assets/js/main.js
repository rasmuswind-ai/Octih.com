document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-list a').forEach(link => {
                    link.classList.remove('active');
                });
                const navLink = document.querySelector('.nav-list a[href="#' + sectionId + '"]');
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
    scrollActive(); 
});
