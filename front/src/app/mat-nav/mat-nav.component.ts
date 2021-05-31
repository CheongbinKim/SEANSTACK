import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, filter } from 'rxjs/operators';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-mat-nav',
  templateUrl: './mat-nav.component.html',
  styleUrls: ['./mat-nav.component.css']
})
export class MatNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  title="대시보드";
  currentUrl = '/dashboard';

  lists = [
    {name:'대시보드',href:'/dashboard'},
    {name:'샘플',href:'/sample'},
  ]
  

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {
      this.currentUrl= this.router.url;
        this.router.events.subscribe((e: RouterEvent) => {
          if(e.constructor.name === 'NavigationStart'){
            this.currentUrl = e.url;
            console.log(this.currentUrl);
            for(let item of this.lists){
              if(item.href === this.currentUrl){
                this.title = item.name;
                break;
              }
            }
          }
        });
    }

  ngOnInit(): void {
    
  }

  changeNav(name){
    for(let item of this.lists){
      if(item.name == name){
        this.title = name;
        break;
      }
    }
  }
}
