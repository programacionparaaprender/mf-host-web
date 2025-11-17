import { Component, OnInit } from "@angular/core";
//import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  standalone:true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  constructor(private router: Router) { 
    
  }
  
  ngOnInit(): void {
  }

  clickMenuPadre(nombre:string, link:string){
    this.onClick(nombre);
    this.seleccion(link);
    this.toggleSidebar();
  }

  seleccion(link:string){
    this.router.navigate([link]);
  }

  onClick(nombre:string): void {
    const item:any = document.getElementById(nombre);
    console.log("item");
    console.log(item);
    const subMenus = document.querySelectorAll(".sub-menu"),
    buttons = document.querySelectorAll(".sidebar ul button");
    subMenus.forEach((menu:any) => (menu.style.height = "0px"));
    buttons.forEach((button) => button.classList.remove("active"));
  
    if (!item.nextElementSibling) {
      item.classList.add("active");
      return;
    }
  
    const subMenu = item.nextElementSibling,
      ul = subMenu.querySelector("ul");
  
    if (!subMenu.clientHeight) {
      subMenu.style.height = `${ul.clientHeight}px`;
      item.classList.add("active");
    } else {
      subMenu.style.height = "0px";
      item.classList.remove("active");
    }
  }

  toggleSidebar():void{
    var aside1 = document.getElementById("aside1");
    var elementos:any = document.getElementsByClassName("etexto");
    if(aside1 != null){
      var lista = aside1.classList;
      if(lista.contains("aside1")){
        aside1.classList.remove("aside1");
        for(let e of elementos){
          e.classList.remove("quitar");
        }
      } else {
        aside1.classList.add("aside1");
        for(let e of elementos){
          e.classList.add("quitar");
        }
      }
    }
    
    
  }
  
}
