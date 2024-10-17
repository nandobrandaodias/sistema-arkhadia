import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/services/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-character',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-character.component.html',
  styleUrl: './form-character.component.css'
})
export class FormCharacterComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required),
    xp: new FormControl(0, Validators.required),
    level: new FormControl(1, Validators.required),
    image: new FormControl(''),
  })


  returnPage(){
    window.location.href = '/personagens'
  }
}
