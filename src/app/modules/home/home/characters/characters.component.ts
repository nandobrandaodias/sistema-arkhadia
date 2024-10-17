import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SharedModule } from '../../../../shared/services/shared.module';
import { NzListModule } from 'ng-zorro-antd/list';



@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NzPageHeaderModule, SharedModule, NzListModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  loading = false;
  data:any = [{},{},{}];


  editCharacter(){}
  deleteCharacter(){}
}
