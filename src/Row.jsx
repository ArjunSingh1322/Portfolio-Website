// /* Simple Reset */
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: 'Arial', sans-serif;
//   background-color: #000000;
//   color: #ffffff;
// }

// /* Smooth Scrolling */
// html {
//   scroll-behavior: smooth;
// }
// .hero p{
//   font-family: serif;
// }

// /* Navigation */
// .navbar {
//   background-color: #000000;
//   padding: 20px 0;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 100;
// }

// .nav-container {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .nav-logo {
//   font-size: 38px;
//   font-weight: bold;
//   color: #04aac7;
//   margin-left: -250px;
//   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
// }

// .nav-items {
//   display: flex;
//   gap: 30px;
// }

// .nav-item {
//   background: none;
//   border: none;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   padding: 10px;
//   transition: color 0.3s ease;
// }

// .nav-item:hover {
//   color: #00ff88;
// }

// .nav-item.active {
//   color: #00ff88;
//   border-bottom: 2px solid #00ff88;
// }

// /* App Container */
// .app {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding-top: 80px;
// }

// /* Hero Section with Background Image */
// .hero {
//   text-align: center;
//   padding: 150px 20px;
//   margin-bottom: 50px;
//   border-radius: 10px;
//   position: relative;
//   overflow: hidden;
  
//   /* Add your background image here */
//   background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// }

// /* Dark overlay for better text readability */
// .hero::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.7);
// }

// .hero h1 {
//   font-size: 48px;
//   margin-bottom: 20px;
//   position: relative;
//   z-index: 1;
// }

// .hero h1 span {
//   color: #00ff88;
// }

// .hero p {
//   font-size: 20px;
//   color: #cccccc;
//   max-width: 600px;
//   margin: 0 auto 30px;
//   position: relative;
//   z-index: 1;
// }

// .hero-buttons {
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
// }

// .primary-btn, .secondary-btn {
//   padding: 12px 30px;
//   font-size: 16px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-weight: bold;
//   transition: all 0.3s ease;
// }

// .primary-btn {
//   background-color: #00ff88;
//   color: #000000;
// }

// .primary-btn:hover {
//   background-color: #00cc6a;
//   transform: scale(1.05);
// }

// .secondary-btn {
//   background-color: transparent;
//   color: #00ff88;
//   border: 2px solid #00ff88;
// }

// .secondary-btn:hover {
//   background-color: #00ff88;
//   color: #000000;
//   transform: scale(1.05);
// }

// /* Sections Common */
// section {
//   padding: 60px 20px;
//   margin-bottom: 20px;
//   border-radius: 10px;
//   background-color: #111111;
//   transition: transform 0.3s ease;
// }

// section:hover {
//   transform: translateY(-5px);
// }

// /* About Component */
// .about h2 {
//   color: #00ff88;
//   font-size: 32px;
//   margin-bottom: 30px;
// }

// .about-content {
//   display: flex;
//   gap: 50px;
//   align-items: center;
// }

// .about-text {
//   flex: 1;
// }

// .about-text p:first-child {
//   font-size: 18px;
//   color: #eee7e7;
//   margin-bottom: 20px;
//   line-height: 1.6;
//   font-family:cursive;
//   font-style: italic;
// }
// .about-text p:nth-child(2) {
//   font-size: 22px;
//   color: #108db3;
//   margin-bottom: 20px;
//   line-height: 1.6;
//   font-family:cursive;
//   font-style: italic;
// }
// .about-text p:nth-child(3) {
//   font-size: 18px;
//   color: #eee7e7;
//   margin-bottom: 20px;
//   line-height: 1.6;
//   font-family:cursive;
//   font-style: italic;
// }
// .about h2{
//    color: #00ff88;
//   margin-bottom: 20px;
//   line-height: 1.6;
//   font-family:cursive;
//   font-style: italic;
//   font-size: 40px;
// }

// /* Project Buttons in About Section */
// .project-buttons {
//   margin-top: 30px;
// }

// .project-buttons h3 {
//   color: #00ff88;
//   font-size: 24px;
//   margin-bottom: 15px;
// }

// .buttons-container {
//   display: flex;
//   gap: 15px;
//   flex-wrap: wrap;
// }

// .project-btn {
//   padding: 12px 25px;
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   text-decoration: none;
//   display: inline-block;
//   text-align: center;
//   transition: all 0.3s ease;
// }

// .instagram-btn {
//   background-color: #32ee90;
//   color: white;
// }

// .notes-btn {
// background-color: #32ee90; color: white;
// }

// .ecommerce-btn {
// background-color: #32ee90;  color: white;
// }

// .project-btn:hover {
//   transform: translateY(-3px);
//   box-shadow: 0 5px 15px rgba(29, 172, 13, 0.3);
//   opacity: 0.9;
// }

// /* Image styling in About section */
// .about-image img {
//   width: 100%;
//   height: 300px;
//   object-fit: cover;
//   border-radius: 10px;
//   /* border: 3px solid #00ff88; */
//   transition: all 0.3s ease;
// }

// .about-image img:hover {
//   transform: scale(1.02);
//   box-shadow: 0 5px 20px rgba(0, 255, 136, 0.3);
// }

// /* Training text styling */
// .training {
//   background-color: rgba(0, 255, 136, 0.1);
//   padding: 15px;
//   border-radius: 8px;
//   border-left: 4px solid #00ff88;
//   margin: 15px 0;
// }

// /* Responsive for project buttons */
// @media (max-width: 768px) {
//   .buttons-container {
//     flex-direction: column;
//   }
  
//   .project-btn {
//     width: 100%;
//     margin-bottom: 10px;
//   }
// }

// .about-image {
//   flex: 0.4;
//   height: 300px;
//   background-color: #7a1414;
//   border-radius: 10px;
//   /* display: flex; */
//   /* align-items: center; */
//   /* justify-content: center; */
//   /* color: #00ff88;
//   font-size: 20px;
//   transition: transform 0.3s ease; */
//   /* margin-left: 80px; */
//   /* padding-left: 50px; */
//   margin-right: 50px;
  
// }

// .about-image img {
//   width: 100%;
//   height: 100%;
//   /* object-fit: cover; */
//   object-position: top center; /* or center center */
//   border-radius: 10px;
// }


// .about-image:hover {
//   transform: scale(1.02);
// }

// /* Skills Component */
// .skills h2 {
//   color: #0088ff;
//   font-size: 32px;
//   margin-bottom: 30px;
// }

// .skills-container {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// }

// .skill-item {
//   background-color: #222222;
//   padding: 30px;
//   border-radius: 10px;
//   text-align: center;
//   transition: all 0.3s ease;
// }

// .skill-item:hover {
//   transform: translateY(-5px);
//   box-shadow: 0 5px 15px rgba(0, 136, 255, 0.2);
// }

// .skill-item h3 {
//   color: #0088ff;
//   font-size: 20px;
//   margin-bottom: 10px;
// }

// .skill-item p {
//   color: #cccccc;
// }

// /* Education Component */
// .education h2 {
//   color: #ff0088;
//   font-size: 32px;
//   margin-bottom: 30px;
// }

// .education-container {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// }

// .education-item {
//   background-color: #222222;
//   padding: 30px;
//   border-radius: 10px;
//   transition: all 0.3s ease;
// }

// .education-item:hover {
//   transform: translateY(-5px);
//   box-shadow: 0 5px 15px rgba(255, 0, 136, 0.2);
// }

// .education-item h3 {
//   color: #ff0088;
//   font-size: 22px;
//   margin-bottom: 10px;
// }

// .education-item p {
//   color: #cccccc;
//   margin-bottom: 5px;
// }

// /* Contact */
// .contact h2 {
//   color: #00ff88;
//   font-size: 32px;
//   margin-bottom: 30px;
// }

// .contact-info {
//   font-size: 18px;
// }

// .contact-info p {
//   color: #cccccc;
//   margin-bottom: 15px;
// }

// /* Footer */
// .footer {
//   text-align: center;
//   padding: 30px 20px;
//   background-color: #111111;
//   margin-top: 50px;
//   border-radius: 10px;
// }

// .footer p {
//   color: #cccccc;
//   font-size: 16px;
// }

// /* Responsive Design */
// @media (max-width: 768px) {
//   .nav-items {
//     gap: 15px;
//   }
  
//   .nav-item {
//     font-size: 14px;
//   }
  
//   .hero h1 {
//     font-size: 36px;
//   }
  
//   .hero p {
//     font-size: 18px;
//   }
  
//   .hero-buttons {
//     flex-direction: column;
//     align-items: center;
//   }
  
//   .about-content {
//     flex-direction: column;
//   }
  
//   .skills-container {
//     grid-template-columns: repeat(2, 1fr);
//   }
// }

// @media (max-width: 480px) {
//   .skills-container {
//     grid-template-columns: 1fr;
//   }
  
//   .hero h1 {
//     font-size: 28px;
//   }
  
//   .hero p {
//     font-size: 16px;
//   }
  
//   .hero {
//     padding: 100px 20px;
//   }
// }