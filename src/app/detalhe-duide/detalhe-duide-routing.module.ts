import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheDuidePage } from './detalhe-duide.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheDuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheDuidePageRoutingModule {}
