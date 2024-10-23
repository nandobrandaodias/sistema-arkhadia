import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SharedModule } from '../../shared/services/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    NavbarComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
