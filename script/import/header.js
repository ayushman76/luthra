import Header from "../export/header.js";


var myPhone01 = new Header ('07752271297');
var myPhone02 = new Header ('7024021186');


var header_arr = [myPhone01,myPhone02];

document.querySelector('header').innerHTML+=`
    <div class="container">
	     <div class="container">
		      <div class="row">
			       <div class="col-md-4">
				        <div class="my_logo">
						      <h1>${myPhone01.Logo('<img src="images/logo.png" class="logo">')}</h1>
						</div>
				   </div>
				   <!--//col-md-4-->
				    <div class="col-md-8">
				        <div class="headerWidget">
						      <ul  class="navbar-nav nav">
							       <li><a href="mailto:${myPhone02.Email("luthrahospital@gmail.com")}"><i class="fa fa-envelope" style="font-size:24px"></i> ${myPhone02.Email("luthrahospital@gmail.com")}</a></li>
							 </ul>
						</div>
				   </div>
				   <!--//col-md-8-->
			  </div>
		 </div>
	</div>

`;

	for(var i in header_arr){
	 document.querySelector('.headerWidget>ul').innerHTML+=`<li><a href="tel:${header_arr[i].tabName}"><i class="fa fa-phone" style="font-size:24px"></i> ${header_arr[i].tabName}</a></li>`;
}