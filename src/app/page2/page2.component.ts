
import { Component } from '@angular/core';
import { MaterialOptionsService } from '../material-options.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  newOption: string = '';

  constructor(private materialOptionsService: MaterialOptionsService) {}

  addOption(): void {
    if (this.newOption.trim() !== '') {
      this.materialOptionsService.addOption(this.newOption);
      this.newOption = '';
      alert('Material añadido exitosamente');
    }
    else {
      alert('por favor, ingrese nombre del material');
    }
  }
}
