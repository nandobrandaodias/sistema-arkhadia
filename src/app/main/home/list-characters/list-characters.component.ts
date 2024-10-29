import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzListModule } from 'ng-zorro-antd/list';
import { SharedModule } from '../../../shared/services/shared.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CharactersService } from '../../../shared/services/character.service';



@Component({
  selector: 'app-list-characters',
  standalone: true,
  imports: [NzPageHeaderModule, SharedModule, NzListModule],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {
  constructor(
    private charactersService: CharactersService,
    private message: NzMessageService
  ) {}
  loading = false;
  data: any = [];


  ngOnInit(){
    this.getCharactersList()
  }


  async getCharactersList(){
    this.data = []
    this.loading = true

    await this.charactersService.getAllcharacters().subscribe({
      next: (res) =>{
        this.data = res
      },
      error: (error)=>{
        console.log(error)
      },
      complete: () => this.loading = false
    })
  }
  
  deleteCharacter(id: string){
    this.loading = true
    this.charactersService.deleteCharacter(id).subscribe({
      next: () =>{
        this.message.success('Exclusão realizada com sucesso!');
        this.loading = false
      },
      error: (error)=>{
        console.log(error)
        this.loading = false
      },
      complete: ()=>{
        this.getCharactersList()
      }
    })
  }
}
