import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { MdPaginatorModule } from '@angular/material';
import { MdSortModule } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule, MdSidenavModule,
    MdButtonModule, MdIconModule,
    MdTabsModule, MdTableModule,
    CdkTableModule, MdPaginatorModule,
    MdSortModule
  ],
  exports: [
    MdToolbarModule, MdSidenavModule,
    MdButtonModule, MdIconModule,
    MdTabsModule, MdTableModule,
    CdkTableModule, MdPaginatorModule,
    MdSortModule
  ]
})
export class CustomMaterialModule {}
