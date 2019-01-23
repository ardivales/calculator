import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  result = '';

  btnClicked(btn) {
    if (btn == 'C') {
      this.result = '';
    }
    else if (btn == '=') {
      this.result = eval(this.result);
    }
    else {
      this.result += btn;
    }
  }

}
