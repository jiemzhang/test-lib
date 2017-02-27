import {NgModule, ModuleWithProviders} from '@angular/core';

import {CommonModule} from '@angular/common';

import { AppModule } from './src/app/app.module';
import { ChartComponent } from './src/app/chart/chart.component';

export * from './src/app/chart/chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChartComponent
  ],
  exports: [
    ChartComponent
  ],
  providers: [ ],
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [ {provide: 'ChartService', useClass: ChartService} ]
    };
  }
}
