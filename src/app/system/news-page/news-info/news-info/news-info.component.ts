import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'tip-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.css']
})
export class NewsInfoComponent implements OnInit {


  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.navigate(['/system', 'news']);
  }

}
