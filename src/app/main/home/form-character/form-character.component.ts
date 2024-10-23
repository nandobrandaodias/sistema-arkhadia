import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/services/shared.module';
import { SheetsService } from '../../../shared/services/sheets.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-form-character',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-character.component.html',
  styleUrl: './form-character.component.css',
})
export class FormCharacterComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    classname: new FormControl('', Validators.required),
    xp: new FormControl(0, Validators.required),
    level: new FormControl(1, Validators.required),
    image: new FormControl('aaaaa'),
  });

  constructor(
    private sheetsService: SheetsService,
    private router: Router,
    private message: NzMessageService
  ) {}

  returnPage() {
    window.location.href = '/personagens';
  }

  onSubmit() {
    try {
      this.sheetsService.createSheet(this.form.value).subscribe({
        next: () => {
          this.message.success('Cadastro realizado com sucesso!');
          this.router.navigate(['/personagens']);
        },
        error: (error) => {
          {
            console.log(error);
          }
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
