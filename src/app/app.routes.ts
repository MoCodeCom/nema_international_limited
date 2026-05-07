import { Routes } from '@angular/router';
import { MainComponent } from './components/main.component/main.component';
import { HomeComponent } from './components/home.component/home.component';
import { OurservicesComponent } from './components/ourservices.component/ourservices.component';
import { GetintouchComponent } from './components/getintouch.component/getintouch.component';
import { About } from './about/about/about';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'ourservices', component: OurservicesComponent },
      { path: 'about', component: About },
      { path: 'getintouch', component: GetintouchComponent },
    ]
  }
];
