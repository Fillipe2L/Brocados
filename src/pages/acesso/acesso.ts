import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-acesso',
  templateUrl: 'acesso.html'
})
export class AcessoPage {
  loginForm: Array<{ numero: number, senha: any }>;
  nomeTeste: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessoPage');
  }

}
