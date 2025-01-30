import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'rich-text-evaluation-home',
  
  imports: [AnalogWelcomeComponent],
  template: `
     <rich-text-evaluation-analog-welcome/>
  `,
})
export default class HomeComponent {
}
