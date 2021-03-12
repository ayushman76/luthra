import Doctor from '../export/doctor.js';


var dr_01 = new Doctor ('images/dr_saurabh_luthra.jpg','Dr. Saurabh Luthra','M.B.B.S., D.O., D.N.B.','Phaco Surgeon','dr_saurabh.html');
var dr_02 = new Doctor ('images/dr_kalpana_luthra.jpg','Dr. Kalapana Luthra','M.D (DERMOLOGIST)','Cosmetologist','dr_kalpana.html');
var dr_03 = new Doctor ('images/dr_sk_luthra.jpg','Dr. S.K. Luthra','M.B.B.S., D.O.M.S., ','Eye Specialist','dr_sk.html');

var doctor_arr = [dr_01,dr_02,dr_03];

 document.querySelector('.doctor').innerHTML+=`
    <div class="container">
	     <div class="row">
		      <h2>Meet Our Doctors</h2>
		 </div>
	</div>
`;

for(var i in doctor_arr){
	document.querySelector('.doctor>.container>.row').innerHTML+=`
	    <div class="col-md-4">
		     <div class="dr_item">
			      <div class="dr_img">
			            <img src="${doctor_arr[i].dr_img}" >
				   </div>
				   <div class="my_slider">
						<h3 class="name"><i class="fa fa-user-md" style="font-size:30px"></i> ${doctor_arr[i].dr_name}</h3>
						<p class="dr_qualification"><i class="fa fa-check" style="font-size:30px"></i> <strong>${doctor_arr[i].dr_qualification}</strong></p>
						<p class="specialist"><strong><i class="fa fa-heart-o" style="font-size:30px"></i> ${doctor_arr[i].specialist}</strong></p>
						<span class="plus"><a href="${doctor_arr[i].link}"><i class="fa fa-plus" style="font-size:24px"></i></a></span>
				   </div>
             </div>
		</div>
		<!--//col-md-4-->
	`;
}