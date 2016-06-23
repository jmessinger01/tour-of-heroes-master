import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    template: `
               <h1>{{title}}</h1>
               <nav>
                <a [routerLink]="['Dashboard']">Dashboard</a>
                <a [routerLink]="['Heroes']">Heroes</a>
               </nav>
               <router-outlet></router-outlet>
               `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService,
        ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path:'/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },

    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

export class AppComponent {
    title = 'Tour of Heroes'
}


