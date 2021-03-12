import Slider from '../export/slider.js';

var img01 = new Slider ('images/bshsh.jpg','second');
var img02 = new Slider ('images/green_slider.jpg','second');
var img03 = new Slider ('images/sk_luthra.jpg','second');

var slider_arr = [img01,img02,img03];

document.querySelector('section').innerHTML+=`
		  <div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!-- Indicators -->
				<ol class="carousel-indicators">
				  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				  <li data-target="#myCarousel" data-slide-to="1"></li>
				  <li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>

		<!-- Wrapper for slides -->
				<div class="carousel-inner">
					 
					   <div class="item active">
						<img src="images/front_view_psd.jpg" alt="Los Angeles" style="width:100%;">
				       </div>
                </div>

				<!-- Left and right controls -->
				<a class="left carousel-control" href="#myCarousel" data-slide="prev">
				  <span class="glyphicon glyphicon-chevron-left"></span>
				  <span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#myCarousel" data-slide="next">
				  <span class="glyphicon glyphicon-chevron-right"></span>
				  <span class="sr-only">Next</span>
				</a>
		</div>
`;


for(var i in slider_arr){
	document.querySelector('.carousel-inner').innerHTML+=`
	     <div class="item">
				<img src="${slider_arr[i].img_link}" alt="${slider_arr[i].img_alt}">
		</div>
	`;
}


