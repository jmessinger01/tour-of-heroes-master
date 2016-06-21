import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    template: `
               <h1>{{title}}</h1>
               <my-heroes></my-heroes>
               `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService,
        ROUTER_PROVIDERS]
})

export class AppComponent {
    title = 'Tour of Heroes'
}

@RouteConfig([
    {
        path:'/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])