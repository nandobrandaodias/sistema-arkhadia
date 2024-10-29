import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AccountComponent } from './account/account.component';
import { FormCharacterComponent } from './form-character/form-character.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'personagens',
        component: ListCharactersComponent,
      },
      {
        path: 'personagens/criacao',
        component: FormCharacterComponent,
      },
      {
        path: 'conta',
        component: AccountComponent,
      },
    ],
  },
];
