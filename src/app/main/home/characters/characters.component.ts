import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzListModule } from 'ng-zorro-antd/list';
import { SharedModule } from '../../../shared/services/shared.module';
import { SheetsService } from '../../../shared/services/sheets.service';



@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NzPageHeaderModule, SharedModule, NzListModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  constructor(
    private sheetsService: SheetsService
  ) {}
  loading = false;
  data: any = [];


  ngOnInit(){
    this.getCharactersList()
  }


  getCharactersList(){
    this.sheetsService.getAllSheets().subscribe({
      next: (res) =>{
        this.data = res
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

  editCharacter(){}
  deleteCharacter(){}
}
