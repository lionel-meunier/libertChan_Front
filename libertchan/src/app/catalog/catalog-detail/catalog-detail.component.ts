import { Component, OnInit } from '@angular/core';
import { AuthService } from '@my/auth';


@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent implements OnInit {
  constructor(
    public authService: AuthService,
  ) {
  }

  ngOnInit() {
  }

}
