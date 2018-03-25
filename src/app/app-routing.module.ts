import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { UpdateOnComponent } from './updateOn/updateOn.component';
import { ControlValueAccessorComponent } from './controlValueAccessor/controlValueAccessor.component';

const routes: Routes = [
  { path: '',  component: BasicFormComponent },
  { path: 'updateon', component: UpdateOnComponent },
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    BasicFormComponent,
    ControlValueAccessorComponent, UpdateOnComponent
  ];
}

