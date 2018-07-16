import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';	
import { DetailComponent } from './detail/detail.component';	
const routes: Routes = [
	{
		path :'',
		component: HomeComponent
	},
	{
		path :'search/:key',
		component : WeatherComponent
	},
	{
		path :'weather/:woeid',
		component : DetailComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
