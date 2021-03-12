import Treatment_eye from '../export/treatment.js';

var treat01 = new Treatment_eye('images/dr_sourabh_and_dr_sk_luthra/cataract_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Cataract Treatment','acne scar treatment in luthra hospital bilapsur dr kalpana luthra');

var treat02 = new Treatment_eye('images/dr_sourabh_and_dr_sk_luthra/cornea-treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Cornea Treatment','cornea-treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra');

var treat03= new Treatment_eye('images/dr_sourabh_and_dr_sk_luthra/glaucoma_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Glaucoma Treatment','glaucoma treatment in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treat04= new Treatment_eye('images/dr_sourabh_and_dr_sk_luthra/retina_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Retina Treatment','retina treatment in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treatment_arr = [treat01,treat02,treat03,treat04];

document.querySelector('.treatment_eye').innerHTML+=`
      <div class="container">
	       <div class="row">
		        <h1>Eye Treatment <br>(Dr. Saurabh Luthra, Dr. S.K. Luthra)</h1> 
		   </div>
	  </div>
	  <br><br>
	  <div class="more text-center pad-10">
	       <a href="dr_saurabh.html">More Treatments</a>
	  </div>
`;
for(var i in treatment_arr){
	document.querySelector('.treatment_eye>.container>.row').innerHTML+=`
	     <div class="col-md-3">
		      <div class="treatment_item">
			        <img src="${treatment_arr[i].img}" alt="treatment_arr[i].alt" class="img-thumbnail">
					<p>${treatment_arr[i].name}</p>
			  </div>
		 </div>
	`;
}