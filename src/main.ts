import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home'; // Ensure this component exists
import { ContactComponent } from './app//contact/contact'; // Ensure this component exists

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: HomeComponent }
    ])
  ]
}).catch(err => console.error(err));