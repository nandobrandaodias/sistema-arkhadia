import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
    imports: [
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      NzLayoutModule,
      NzBreadCrumbModule,
      NzPageHeaderModule  
    ],
    exports: [
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      NzLayoutModule,
      NzBreadCrumbModule,
      NzPageHeaderModule
    ]
  })
  export class SharedModule { }
  