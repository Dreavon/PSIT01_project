
//script.js
document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-link');
 
        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });


function myFunction() {
  var x = document.getElementById("myVideo").autoplay;
  document.getElementById("demo").innerHTML = x;
}
