import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Sorcerer } from 'src/app/Sorcerer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private mainService: MainService){
    this.getSorcerer()
  }

  sorcerers: Sorcerer[] = [

  ];


  getSorcerer(): void{
    this.mainService.getAll();
  }

  adicionarFeiticeiro(){}

  removeSorcerer(){
    console.log("Removendo Feiticeiro")
  }

}
