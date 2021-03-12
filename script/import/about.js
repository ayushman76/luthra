import About from '../export/about.js';


document.querySelector('.about').innerHTML+=`
   <div class="container">
       <div class="row">
	         <div class="col-md-6">
			      <div class="my_about">
				         <h1>${About[0].heading}</h1>
						 <p>${About[0].para}</p>
				  </div>
			 </div>
			 <!--//col-md-6-->
			 <div class="col-md-6">
			      <div class="my_about_img">
				        <img src="${About[1].img}" class="img-responsive">
				  </div>
			  </div>
			 <!--//col-md-6-->
	   </div>
   </div>
`;

