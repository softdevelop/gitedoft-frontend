import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let temp = Object.keys(value);
    return temp;
  }
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  woeid =[];
  weathers$ = {};
  constructor(private route: ActivatedRoute, private data: DataService) {
  	this.route.params.subscribe( params => {
     	this.woeid = params.woeid;
     	this.getData();
     } ); 
  }

  getData = () =>{
  	this.data.getWeather(this.woeid).subscribe(res=>{
  		try{
  			this.weathers$ = res;
  		}
		catch(err) {};
		
	});
  }

  ngOnInit() {
  	
  }

}
