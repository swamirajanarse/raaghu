import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPropertiesComponent } from './rds-comp-properties.component';
import { FormsModule } from '@angular/forms';
import { RdsAlertModule, RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsModalModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompPropertiesShimmerComponent } from './rds-comp-properties-shimmer/rds-comp-properties-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsCompTableShimmerComponent } from '../rds-comp-data-table/rds-comp-table-shimmer/rds-comp-table-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompAlertPopupComponent } from '../rds-comp-alert-popup/rds-comp-alert-popup.component';



@NgModule({
  declarations: [
    RdsCompPropertiesComponent,
    RdsDataTableComponent,
    RdsCompTableShimmerComponent,
    RdsCompPropertiesShimmerComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsPaginationModule,
    RdsInputModule,
    RdsIconModule,
    RdsLabelModule,
    RdsCheckboxModule,
    NgxTranslateModule.forRoot(),
    RdsModalModule,
    NgxShimmerLoadingModule,   
  ],
  exports:[
    RdsCompPropertiesComponent
  ]
})
export class RdsCompPropertiesModule { }