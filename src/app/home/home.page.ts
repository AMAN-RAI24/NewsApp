import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(
    public service: GlobalService
  ) {}

  goToArticle(url) {
    window.open(url);
  }

  ngOnInit() {
    this.service.getNewsTopHeadlines().then(() => {
      console.log('data loaded');
    }, (err )=> {
      alert(err);
    });
    // this.service.getTodos().subscribe((data: any) => {
    //   console.log(data);
    //   this.todos = data;
    // })
  }

}
