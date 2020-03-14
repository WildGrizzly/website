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


const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Resumé', component: ResumeComponent },
  { path: 'Achievements', component: AchievementsComponent },
  { path: 'Projects/:projectList', component: ProjectListComponent},
  { path: 'Projects/:projectList/:projectInfo', component: ProjectInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProjectsComponent, ResumeComponent, AchievementsComponent, ProjectListComponent, ProjectInfoComponent, NavigationComponent, FooterComponent]