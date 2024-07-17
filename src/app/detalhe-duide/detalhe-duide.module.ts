import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheDuidePageRoutingModule } from './detalhe-duide-routing.module';

import { DetalheDuidePage } from './detalhe-duide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheDuidePageRoutingModule
  ],
  declarations: [DetalheDuidePage]
})
export class DetalheDuidePageModule {}
