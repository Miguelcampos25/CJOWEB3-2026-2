import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './security/auth.service';
import { LoginFormComponent } from './security/login-form/login-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [
    RouterOutlet,
    ActivitiesListComponent,
    LoginFormComponent
  ],
  providers: [
    AuthService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ifitness-ui';
}