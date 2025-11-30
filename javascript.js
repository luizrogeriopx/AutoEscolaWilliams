document.addEventListener('DOMContentLoaded', function() {
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            menuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            mobileMenu.addEventListener('click', function(event) {
                if (event.target.tagName === 'A') {
                    mobileMenu.classList.add('hidden');
                }
            });

            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });