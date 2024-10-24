import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/services/shared.module';


@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.css'
})
export class SheetComponent implements AfterViewInit {
  tabs = [{title:'Tab 1', content:"Conteúdo 1"}, {title:'Tab 2', content:"Conteúdo 2"}];
  selectedIndex = 0;
  menu: number = 1;
  sheetForm: FormGroup = new FormGroup({
    name: new FormControl('Personagem', Validators.required),
    class: new FormControl('Guerreiro', Validators.required),
    xp: new FormControl(400, Validators.required),
    level: new FormControl(3, Validators.required),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
    tabs: new FormControl([])
  });

  switchMenu(menu: number){
    this.menu = menu;
  }

  ngOnInit(){
    this.sheetForm.controls['name'].disable()
  }

  ngAfterViewInit(){

  }

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push({title:'New Tab', content:"Novo conteúdo!"});
    this.selectedIndex = this.tabs.length;
  }

  updateSheet(){
    this.sheetForm.value.tabs = this.tabs
    console.log('update')
    console.log(this.sheetForm.value)
  }
}
