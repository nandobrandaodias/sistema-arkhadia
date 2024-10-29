import { AfterViewInit, Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/services/shared.module';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../shared/services/character.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) {}
  characterId!: string;
  loading: boolean = false;
  data: any;
  tabs: any = [];
  selectedIndex = 0;
  menu: number = 1;
  sheetForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    classname: new FormControl(''),
    xp: new FormControl(''),
    level: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
    tabs: new FormControl(''),
  });

  switchMenu(menu: number) {
    this.menu = menu;
  }

  ngOnInit() {
    this.characterId = this.route.snapshot.paramMap.get('id') || '';
    if (this.characterId) {
      this.characterService.getCharacter(this.characterId).subscribe({
        next: (res) => {
          this.data = res;
          console.log(this.data);
        },
        complete: () => {
          this.fillForm()
        },
      });
    }
  }

  ngAfterViewInit() {}

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push({ name: 'New Tab', content: 'Novo conteúdo!' });
    this.selectedIndex = this.tabs.length;
  }

  updateCharacter() {
    this.loading = true
    this.sheetForm.value.tabs = this.tabs;
    this.characterService.updateCharacter(this.characterId, this.sheetForm.value).subscribe({
      next: (res) =>{
        this.data = res
        this.loading = false
        this.fillForm()
      } 
    })
    console.log('update');
    console.log(this.sheetForm.value);
  }

  getCharacterCharacter() {
    this.loading = true
    this.characterService.getCharacter(this.characterId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.data = res;
        this.loading = false
      },
      error: (error: any) => console.log(error),
    });
  }
  
  updateTabValue(e: any, tab: any){
    tab.content = e.target.value
  }

  fillForm(){
    this.sheetForm = new FormGroup({
      name: new FormControl(this.data.name ?? '', Validators.required),
      classname: new FormControl(
        this.data.classname ?? '',
        Validators.required
      ),
      xp: new FormControl(this.data.xp ?? '', Validators.required),
      level: new FormControl(this.data.level ?? '', Validators.required),
      imageUrl: new FormControl(this.data.imageUrl ?? ''),
      description: new FormControl(this.data.description ?? ''),
      tabs: new FormControl(this.data.Tab ?? []),
    });

    if (this.sheetForm.value.tabs) {
      this.tabs = this.sheetForm.value.tabs;
    }

    this.sheetForm.controls['name'].disable();
  }
}
