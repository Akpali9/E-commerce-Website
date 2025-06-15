
        // Smooth scrolling for navigation links

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {

            anchor.addEventListener('click', function (e) {

                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));

                if (target) {

                    target.scrollIntoView({

                        behavior: 'smooth',

                        block: 'start'

                    });

                }

            });

        });





        // Animate stats on scroll

        function animateStats() {

            const stats = document.querySelectorAll('.stat-number');

            const observer = new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const target = entry.target;

                        const finalValue = target.textContent;

                        let currentValue = 0;

                        const increment = finalValue.includes('K') ? 500 : 

                                        finalValue.includes('%') ? 1 : 10;

                        const duration = 2000;

                        const stepTime = duration / (parseInt(finalValue) / increment);



                        const counter = setInterval(() => {

                            currentValue += increment;

                            if (finalValue.includes('K')) {

                                target.textContent = Math.min(currentValue, parseInt(finalValue) * 1000) / 1000 + 'K+';

                            } else if (finalValue.includes('%')) {

                                target.textContent = Math.min(currentValue, parseInt(finalValue)) + '%';

                            } else if (finalValue.includes('/')) {

                                target.textContent = '24/7';

                            } else {

                                target.textContent = Math.min(currentValue, parseInt(finalValue)) + '+';

                            }



                            if (currentValue >= parseInt(finalValue)) {

                                clearInterval(counter);

                                target.textContent = finalValue;

                            }

                        }, stepTime);



                        observer.unobserve(target);

                    }

                });

            });



            stats.forEach(stat => observer.observe(stat));

        }



        // Initialize animations

        document.addEventListener('DOMContentLoaded', function() {

            animateStats();

        });



        // Search functionality (redirects to main page)

        document.querySelector('.search-box').addEventListener('keypress', function(e) {

            if (e.key === 'Enter') {

                const searchTerm = this.value;

                if (searchTerm.trim()) {

                    window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;

                }

            }

        });

        // Smooth scrolling for navigation links

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {

            anchor.addEventListener('click', function (e) {

                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));

                if (target) {

                    target.scrollIntoView({

                        behavior: 'smooth',

                        block: 'start'

                    });

                }

            });

        });



        // Initialize the website

        document.addEventListener('DOMContentLoaded', function() {

            loadProducts();

            updateCartCount();

        });

        // Contact Form Submission

        document.getElementById('contactForm').addEventListener('submit', function(e) {

            e.preventDefault();

            

            // Simulate form submission

            const successMessage = document.getElementById('successMessage');

            successMessage.classList.add('show');

            

            // Reset form

            this.reset();

            

            // Hide success message after 5 seconds

            setTimeout(() => {

                successMessage.classList.remove('show');

            }, 5000);

            

            // Scroll to success message

            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        });



        // FAQ Toggle Functionality

        document.querySelectorAll('.faq-question').forEach(question => {

            question.addEventListener('click', () => {

                const answer = question.nextElementSibling;

                const isActive = question.classList.contains('active');

                

                // Close
