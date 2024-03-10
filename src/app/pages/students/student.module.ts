import { NgModule } from "@angular/core";
import { StudentRoutingModule } from "./student.routing";
import { StudentComponent } from "./student.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { ListStudentComponent } from "./list-students/list-student.component";
@NgModule({
    declarations: [
        StudentComponent,
        AddStudentComponent,
        ListStudentComponent
    ],
    imports: [
        StudentRoutingModule
    ]
})
export class StudentModule { }