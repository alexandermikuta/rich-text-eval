import { Component } from '@angular/core';

import { EvalGridComponent } from '../components/eval-grid/eval-grid.component';

@Component({
  selector: 'rich-text-evaluation-home',
  
  imports: [EvalGridComponent],
  template: `
     <rich-text-evaluation-eval-grid/>
  `,
})
export default class HomeComponent {
}
