import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ret : {};
  weathers$ = []; 
  query = "";
  cities = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];	 	
  constructor(private data : DataService, private router : Router) {
  	
  }
  
  ngOnInit() {
  	for (let city of this.cities){
  	this.data.getId(city).subscribe(
        data=>{
        	this.data.getWeather(data[0].woeid).subscribe(res=>{
        		console.log(res);
        		this.weathers$.push(res);
        	});
        });
    }
  }

  onEnterSearch(){
  	console.log(this.query);
  	this.router.navigate(['/search/'+this.query]);
  }
  
}
