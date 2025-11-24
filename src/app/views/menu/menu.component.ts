import { Component, OnInit, ViewChild, AfterViewInit, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location, UpperCasePipe } from "@angular/common";
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  standalone:true,
  selector: 'app-menu',
  imports:[
    RouterModule,
    TranslatePipe,
    UpperCasePipe
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  langs: string[] = [];
  
  constructor(location: Location, private router: Router,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    public translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(["es", "en"]);
    this.langs = [...this.translate.getLangs()];
    translate.get(this.langs).subscribe( res => {
      console.log(res);
    });
    
  }

  cambiarLang(lang: string) {
    this.translate.use(lang);
  }

  


  ngOnInit() {
  }

  logout(): void {
    //this.auth.logout({ returnTo: this.doc.location.origin });
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

}
