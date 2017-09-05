import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMermoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { Appcomponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService  } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
