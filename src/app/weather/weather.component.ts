import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../data.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() weather;

  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => {
     	console.log(params);
     	this.weather = params.key;
     	this.getSearch()
     } );
  }

  getSearch = () =>{
  	this.data.getId(this.weather).subscribe(
        data=>{
        	try {
			    this.data.getWeather(data[0].woeid).subscribe(res=>{
	        		this.weather=res
	        	});
			}
			catch(err) {
				let city = this.weather;
				this.weather = [];
			    this.weather.title="Not found "+city+" city"
        	}
        },
        error=>{
        	let city = this.weather;
				this.weather = [];
			    this.weather.title="Not found "+city+" city"
        }
        );
  }
  ngOnInit() {
  	
  }

}
