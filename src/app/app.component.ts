
import { MenuComponent } from './views/menu/menu.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { FooterComponent } from './views/footer/footer.component';
import { ComponenteLocalComponent } from './views/componente-local/componente-local.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  imports:[
    RouterOutlet,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ComponenteLocalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mf-host-web';
}
