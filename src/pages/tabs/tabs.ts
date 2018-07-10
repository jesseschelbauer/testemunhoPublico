import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import {PlainningPage} from '../plainning/plainning';
import {EscalaPage} from '../Escala/escala';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlainningPage;
  tab2Root = EscalaPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
