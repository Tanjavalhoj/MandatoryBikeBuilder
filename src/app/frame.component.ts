import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { Bike } from './bike';

@Component({
    selector:'frame',
    templateUrl: 'frame.component.html'
})
export class FrameComponent {
    
accesory = "-frame.png"
/*function changeColor(newColor) {
		color = newColor;
		updateImage();
}
function changeaccessory(newAccessory) {
		accesory = newAccessory;
		updateImage();
}

function updateImage(bikeColor){
		var image = document.getElementById("imageToSwap");
		bikeColor = image.src = "./assets/images/Billeder til web/Cykel/" + color + accesory;
};

//Show / hide next step
function colours() {
	var x = document.getElementById("chooseColor");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
		}

}

function accessory() {
	var x = document.getElementById("chooseAccessory");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function receipt() {
	var x = document.getElementById("showReceipt");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

}

*/

}