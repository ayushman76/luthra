import Nav from '../export/nav.js';

var nav01 = new Nav ('Home','ndex.html');
var nav02 = new Nav ('About','about.html');
var nav03 = new Nav ('Treatments','treatment.html');
var nav04 = new Nav ('Gallery','gallery.html');
var nav05 = new Nav ('Doctor','doctor.html');
var nav06 = new Nav ('Contact','contact.html');

var nav_arr = [nav01,nav02,nav03,nav04,nav05,nav06];

document.querySelector('nav').innerHTML+=`
   <div class="container">
       <div class="row">
	        <div class="col-md-12">
			     <div class="nav_item">
				      <ul class="navbar-nav nav"></ul>
				 </div>
			</div>
	   </div>
   </div>
`;
for(var i in nav_arr){
	document.querySelector('.nav_item>ul').innerHTML +=`
	 <li><a href="${nav_arr[i].tab_Link}">${nav_arr[i].tab_Name}</a></li>
	`;
}