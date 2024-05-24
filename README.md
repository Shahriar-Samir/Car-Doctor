Web Project name : Car Doctor
Website Link : https://my-web-projects-d89ff.web.app/
About : This project is based on car servicing shop where anyone can order a car service.
Technologies used in this project: React JS, Tailwind CSS, Express Js, MongoDB, Node JS

Key Features:
1. This website is a responsive website where users can visit with or with out being logged in.
2. On the homepage there is a banner section, about section, car services section, address section. Navbar and footer is visible to all the routes of this website.
3. On the car services section, clicking on a specific service card's arrow button will navigate to that specific service's checkout page where only logged in users can visit.
4. Only logged in users can visit private. If any unlogged user tries to visit any private route he or she will be navigated to login page.
5. Checkout page or route is a private route where users can fill up his name and the date where he want to book that specific service. After submitting the from, his order will be stored to database.
6. There is a my orders section where only logged in users can visit and see his ordered services list.
7. On the login page, unlogged users can sing in by giving his email and password. If he or she don't have an user id then he/she can visit sign up page by clicking Register button on the sign up/ login page.
8. On the register page, anyone create a new account and sign in.
9. Server side is protected with JWT token. If anyone logs in, a token will be stored in the browser's cookie. If he/she logs out, token will be removed.
10. JWT token verifies if he/she is the correct browser to access his/her private data. And it protects from unauthorized access and forbidden access.
