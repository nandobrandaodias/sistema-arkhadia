import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMessageModule } from 'ng-zorro-antd/message';



@NgModule({
    imports: [
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      NzLayoutModule,
      NzBreadCrumbModule,
      NzPageHeaderModule,
      NzMenuModule,
      NzTabsModule,
      NzMessageModule
    ],
    exports: [
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      NzLayoutModule,
      NzBreadCrumbModule,
      NzPageHeaderModule,
      NzMenuModule,
      NzTabsModule,
      NzMessageModule
    ]
  })
  export class SharedModule { }
