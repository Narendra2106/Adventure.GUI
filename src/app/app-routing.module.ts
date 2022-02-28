import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstAdventureComponent } from './features/MyAdventure/first-Adventure/first-Adventure.component';
import { DecisionTreeComponent } from './features/MyAdventure/decision-tree/decision-tree/decision-tree.component';



const routes: Routes = [
  {path: '', component: FirstAdventureComponent, pathMatch: 'full'},
  {path: 'tree', component: DecisionTreeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
