import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
            { label: 'Autores', icon: 'pi pi-fw pi-user', routerLink: ['/autores']},
            { label: 'Libros', icon: 'pi pi-fw pi-pencil', routerLink: ['/libros']},
            /* { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' } */
        ];
    }

}
