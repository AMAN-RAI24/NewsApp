import { Component, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private api: GlobalService,
    public menu: MenuController
  ) {}

  setCountryCode(code: string) {
    this.api.countryCode = code;
    this.api.getNewsTopHeadlines();
    this.menu.close();
  }
}
