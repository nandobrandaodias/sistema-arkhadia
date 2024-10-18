import { AfterViewInit, Component } from '@angular/core';
import { SharedModule } from '../../../shared/services/shared.module';


@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.css'
})
export class SheetComponent implements AfterViewInit {
  menu: number = 1;
  quill: any

  switchMenu(menu: number){
    this.menu = menu;
  }

  ngOnInit(){

  }

  ngAfterViewInit(){

  }
}
