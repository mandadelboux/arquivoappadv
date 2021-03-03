import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder',
      icon: 'home'
    },
    {
      title: 'Processos',
      url: '/processos',
      icon: 'paper-plane'
    },
    {
      title: 'Clientes',
      url: '/clientes',
      icon: 'people'
    },

    {
      title: 'Movimentações',
      url: '/movimentacoes',
      icon: 'document-attach'
    },

    {
      title: 'Agenda',
      url: '/tarefas',
      icon: 'calculator'
    },


    
  ];
  
  url : string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        this.url = event.url; 
        
        console.log(this.url);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
   
  }
}
