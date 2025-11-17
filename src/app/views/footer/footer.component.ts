import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  standalone:true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
 
  constructor(location: Location, private router: Router) {
  }


  ngOnInit() {
  }

}
