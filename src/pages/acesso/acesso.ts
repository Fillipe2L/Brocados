import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-acesso',
  templateUrl: 'acesso.html'
})
export class AcessoPage {
  loginForm: Array<{ numero: number, senha: any }>;
  nomeTeste: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessoPage');
  }

}
