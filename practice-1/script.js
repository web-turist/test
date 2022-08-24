/*jshint esversion:6 */
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.wrapper'),
          open = document.querySelector('.open__modal');

    container.addEventListener('click', function(event){
        if(event.target == container) {
            container.style.display = 'none';
            }
        });

    open.addEventListener('click', function(event) {
        if(event.target == open) {
            container.style.display = 'flex';
            }
        });
});
