import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  title: any;
  icon: string;
  address: string;
  geolocation: any;
  phone: number;
  image: string;

  foodTruckNames: string[];

  list: Array<{ title: string, icon: string, address: string, geolocation: string, phone: string, image: string }>;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.foodTruckNames = ['FoodTrap', 'JowFoods', 'GoogleEat', 'CameronFDS'];

    this.list = [];

    for (let i = 0; i < 5; i++) {
      this.list.push({
        title: this.foodTruckNames[i],
        icon: '',
        address: '',
        geolocation: '',
        phone: '',
        image: ''
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

}
