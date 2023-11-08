import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialOptionsService {
  private materialOptions: string[] = ['Caño 70x30', 'Perfiles C', 'Planchuela'];

  getOptions(): string[] {
    return this.materialOptions;
  }

  addOption(option: string): void {
    this.materialOptions.push(option);
  }
}
