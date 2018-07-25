import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable'
import {HttpClient} from '@angular/common/http'
import { FilmDetailsPage } from '../film-details/film-details';
import {ApiProvider} from './../../providers/api/api'


/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public apiProvider:ApiProvider

  ) {
    
    this.films=this.apiProvider.getFilms();
      this.films.subscribe( data => {console.log('my data', data);
      })
  }
  openDetails(film){
    this.navCtrl.push(FilmDetailsPage,{Film:film});
  }

}
