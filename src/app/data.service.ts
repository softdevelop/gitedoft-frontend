import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeather(id){
      // get weather for 6 cities
      return this.http.get('http://localhost:8000/weather.php?command=location&woeid='+id)
  }

  getId(key){
  	// get weather for 6 cities
  	return this.http.get('http://localhost:8000/weather.php?command=search&keyword='+key)
  }
}
