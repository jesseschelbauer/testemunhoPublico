import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, DateTime } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the PlainningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-plainning',
  templateUrl: 'plainning.html',
})
export class PlainningPage implements OnInit {

  ngOnInit(): void {

    this.days.push({ date: moment("01-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("02-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("06-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("08-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("09-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("13-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("15-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("16-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("20-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("22-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("23-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("27-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("29-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
    this.days.push({ date: moment("30-06-2018", "DD-MM-YYYY"), times: [{ start: moment({ hour: 14 }), end: moment({ hour: 16 }) }, { start: moment({ hour: 16 }), end: moment({ hour: 18 }) }] });
  }
  public days: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.days = new Array<any>();
  }

  ionViewDidLoad() {
  }

}


class Day {
  constructor() {
    this.Times = new Array<Time>();
  }

  public Date: DateTime;
  public Times: Array<Time>;

}

class Time {
  constructor() {
  }

  public start: number;
  public end: number;
}