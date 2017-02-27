import { Injectable } from '@angular/core';

@Injectable()
export class ChartService {

  private options: any;

  constructor() { }

  setOptions( options: any ) : void {
    this.options = options;
  }

  getOptions() : any {
    return this.options;
  }

}
