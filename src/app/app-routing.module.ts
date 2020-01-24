import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavSelectorComponent} from './components/nav-selector/nav-selector.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resumé', component: ResumeComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'projects/:projectList', component: ProjectListComponent},
  { path: 'projects/:projectList/:projectInfo', component: ProjectInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, NavSelectorComponent, ProjectsComponent, ResumeComponent, AchievementsComponent, ProjectListComponent, ProjectInfoComponent, NavigationComponent, FooterComponent]