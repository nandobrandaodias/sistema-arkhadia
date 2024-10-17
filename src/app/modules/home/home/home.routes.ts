import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharactersComponent } from './characters/characters.component';
import { AccountComponent } from './account/account.component';
import { FormCharacterComponent } from './form-character/form-character.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'personagens',
        component: CharactersComponent,
      },
      {
        path: 'personagens/criacao',
        component: FormCharacterComponent,
      },
      {
        path: 'personagem/:id',
        component: CharactersComponent,
      },
      {
        path: 'conta',
        component: AccountComponent,
      },
    ],
  },
];
