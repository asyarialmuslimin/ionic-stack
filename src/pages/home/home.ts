import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  txtStack: String = "";
  public stack: String[] = [];
  public newStack: String[] = [];

  constructor(public navCtrl: NavController, private toast: Toast) {

  }

  ionViewDidLoad() {
    let panjang = this.stack.length;
    let j = panjang - 1;

    for (let i = 0; i < panjang; i++) {
      this.newStack[i] = this.stack[j];
      j--;
    }

  }

  onPush() {

    this.toast.show(this.txtStack + ' ditambahkan ke Stack', '5000', 'bottom').subscribe();
    this.stack.push(this.txtStack);
    this.txtStack = "";
    this.ionViewDidLoad();

  }

  onPop() {

    this.toast.show('Menghapus data Terakhir dari Stack', '5000', 'bottom').subscribe();
    this.stack.pop();
    this.newStack = [];
    this.ionViewDidLoad();

  }
}
