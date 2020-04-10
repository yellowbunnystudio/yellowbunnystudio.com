<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title></title>
	<meta name="description" content=" ">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="basicstylesheet.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css">
	
</head>

<body>
    <header class="header">
        <div class="navleft">
        <img class="logotype" src ="yellowbunny1.jpg"><a id="home" href="index.html" class="logo"> Yellow Bunny Studio </a>
        <div id="navright"class="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <a href="#news">About</a>
            <div class="dropdown">
                <button class="dropbtn">Portfolio
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Color</a>
                    <a href="#">Motion Graphics</a>
                    <a href="#">Editing</a>
                </div>
            </div>
            <a href="#about">Contact</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
        </div>
        </div>
    </header>
    
    
        <section class="section-title">
            <h2> Maura Kent</h2>
            <h5> Postproduction | Film Editor | Colorist | Motion Graphics</h5>
            <p> Maura Kent is trained in Video Editing, Digital Color Correction and Motion Graphics. Overtime she has developed knowledge of editing on professional softwares such as Premiere, Avid and DaVinci Resolve as well as the ability to work indpendently and in a collaborative setting. She is a professional resource who is patient and passionate both on set and in post production. Maura is seeking opportunities to work in a collaborative setting with aspirations of telling diverse and unique stories while learning professional workflows. She is ready to gain new experiences through her interest in new software, process, and workflows in post production. Maura would love to collaborate with creative people to tell innovative and impactful stories. 
            </p>
                
        </section>
        
        <section class="spacer"> 
            
        </section>
        
        
        <section class="section-title">
            <h2> Featured Projects</h2>  
        </section>
        
        <div class="row">
            <div class="column">
                <img src="filmreelheader.jpg">
               
            </div>
            
            
            <div class="column">
               <img src="tedxcccheader.jpg">
                
                
            </div>
            
            <div class="column">
                <img src="codeheader.jpg">
                
            </div>
        </div>
        
        <div class="row">
            <div class="column">
                <video controls> <source src="Khwaab.mp4" type="video/mp4"></video>
            </div>
            
            
            <div class="column">
               <video controls> <source src="theotherwoman.mp4" type="video/mp4"></video>
                
            </div>
            
            <div class="column">
                <video autoplay controls loop preload>
                    <source src="TEDxCCC.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    
        
         
        
    
        
    <section class="footer">
          <footer class="footer-distributed">
              <div class="footer-left">
                  <h3>Yellow Bunny Studio</h3>
                  <p class="footer-company-name">YellowBunnyStudio &copy; 2019</p>
              </div>
              <div class="footer-center">
                  <div>
                      <i class="fa fa-map-marker"></i>
                      <p><span>123 Easy St</span> Chicago, Illinois, 60605</p>
                  </div>
                  
                  <div>
                      <i class="fa fa-phone"></i>
                      <p>(712)-123-4567</p>
                  </div>
                  
                  <div>
                      <i class="fa fa-envelope"></i>
                      <p><a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
                  </div>
              </div>
              
              <div class="footer-right">
                  <p class="footer-company-about">
                      <span>About the company</span>
                      Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
                  </p>
                  
                  <div class="footer-icons">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                      <a href="#"><i class="fa fa-github"></i></a>
                  </div>
              </div>
        </footer>
    </section>
        
        
 

    </body>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   <script>
    
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
    </script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>


</html>
