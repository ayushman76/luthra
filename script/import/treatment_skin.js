import Treatment_skin from '../export/treatment.js';

var treat01 = new Treatment_skin('images/dr_kalpana/acne-scar-treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.png','Acne Scar Removal','acne-scar-treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra');

var treat02 = new Treatment_skin('images/dr_kalpana/viltigo_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Viltigo Treatment','viltigo_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra');

var treat03= new Treatment_skin('images/dr_kalpana/psoriasis_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Psoriasis Treatment','psoriasis_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra');

var treat04= new Treatment_skin('images/dr_kalpana/hair_redustion_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Hair Redustion','hair_redustion_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra');

var treatment_arr = [treat01,treat02,treat03,treat04];

document.querySelector('.treatment_skin').innerHTML+=`
      <div class="container">
	       <div class="row">
		         <h4><strong>Treatments</strong></h4>
		         <h5>Skin Solution <br>(Dr. kalpana Luthra)</h5> 
		   </div>
		     <br><br>
			<div class="more text-center pad-10">
			      <a href="dr_kalpana.html">More Treatments</a>
			</div>
	  </div>
`;
for(var i in treatment_arr){
	document.querySelector('.treatment_skin>.container>.row').innerHTML+=`
	     <div class="col-md-3">
		      <div class="treatment_item">
			        <img src="${treatment_arr[i].img}" alt="treatment_arr[i].alt" class="img-thumbnail">
					<p>${treatment_arr[i].name}</p>
			  </div>
		 </div>
	`;
}