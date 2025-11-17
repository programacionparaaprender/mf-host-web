import { Component, OnInit, ViewChild, AfterViewInit, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from "@angular/common";
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-menu',
  imports:[RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(location: Location, private router: Router,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }



  ngOnInit() {
  }

  logout(): void {
    //this.auth.logout({ returnTo: this.doc.location.origin });
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

}
