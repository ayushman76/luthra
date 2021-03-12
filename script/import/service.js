import Service from "../export/service.js";

var serv01 = new  Service('Cataract Treatment','2.2 mm Phaco Surgery','Multi Focal & Toric Lens','Lenstar Biometry');
var serv03 = new  Service('Glaucoma Service','HFA','Yag Laser','Applanation Tonometer');
var serv02 = new  Service('Ratina Service','FFA','Green Laser','Fundus Camera');
var serv04 = new  Service('Cornea Service','Epithelial Map OCT','Pachymetry','Dry Eye Work Up');

var serv_arr = [serv01,serv02,serv03,serv04];

document.querySelector('article').innerHTML+=`
     <div class="container">
	       <div class="row">
		    
			</div>
	 </div>
 
`;

for (var i in serv_arr){
	document.querySelector('article>.container>.row').innerHTML+=`
	     <div class="col-md-3">
		      <div class="service_list two">
			         <h1 ><i class="fa fa-stethoscope" style="font-size:24px"></i> ${serv_arr[i].service_name}</h1>
					 <ul class="nav">
							<li><a>${serv_arr[i].service_list01}</a></li>
							<li><a>${serv_arr[i].service_list02}</a></li>
							<li><a>${serv_arr[i].service_list03}</a></li>
					 </ul>
			  </div>
		 </div>
		 <!--//col-md-3-->
	`;
}
