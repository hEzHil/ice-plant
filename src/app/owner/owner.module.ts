import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerPageRoutingModule } from './owner-routing.module';

import { OwnerPage } from './owner.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    OwnerPageRoutingModule
  ],
  declarations: [OwnerPage]
})
export class OwnerPageModule {}
