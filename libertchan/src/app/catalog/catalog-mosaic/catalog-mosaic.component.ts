import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalog-mosaic',
  templateUrl: './catalog-mosaic.component.html',
  styleUrls: ['./catalog-mosaic.component.scss']
})
export class CatalogMosaicComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    console.log('test');
    const options = {
      observe : 'response'
    };
    this.httpClient.get('http://localhost:8080/api',  { observe: 'response' }).subscribe((c) => console.log(c));
  }

}
