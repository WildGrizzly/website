import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AchievementsComponent } from './components/achievements/achievements.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    NavigationComponent,
    ProjectInfoComponent,
    ProjectListComponent,
    FooterComponent,
    AchievementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'Projects', component: ProjectsComponent },
      { path: 'Resumé', component: ResumeComponent },
      { path: 'Achievements', component: AchievementsComponent },
      { path: 'Projects/:projectList', component: ProjectListComponent},
      { path: 'Projects/:projectList/:projectInfo', component: ProjectInfoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
