import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './componets/attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';
import { FormValidaitionComponent } from './componets/form-validaition/form-validaition.component';
import { NavComponent } from './componets/nav/nav.component';
import { FootComponent } from './componets/foot/foot.component';
import { AsideComponent } from './componets/aside/aside.component';
import { HomeComponent } from './componets/home/home.component';
import { ChildComponent } from './componets/child/child.component';
import { StudentsComponent } from './componets/ParentToChild2/students/students.component';
import { StudentDetailsComponent } from './componets/ParentToChild2/student-details/student-details.component';
import { Parent2Component } from './componets/ChildToParent/parent2/parent2.component';
import { Child2Component } from './componets/ChildToParent/child2/child2.component';
import { ParentLabComponent } from './Lab/parent-lab/parent-lab.component';
import { Child1LabComponent } from './Lab/child1-lab/child1-lab.component';
import { Child2LabComponent } from './Lab/child2-lab/child2-lab.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveComponent,
    FormValidaitionComponent,
    NavComponent,
    FootComponent,
    AsideComponent,
    HomeComponent,
    ChildComponent,
    StudentsComponent,
    StudentDetailsComponent,
    Parent2Component,
    Child2Component,
    ParentLabComponent,
    Child1LabComponent,
    Child2LabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
