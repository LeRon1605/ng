import { NgModule } from "@angular/core";
import { StudentRoutingModule } from "./student.routing";
import { StudentComponent } from "./student.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { ListStudentComponent } from "./list-students/list-student.component";
import { DataTableModule } from "../../shared/components/datatable/datatable.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { ServeSyncFormControlModule } from "../../shared/components/form-controls/form-control.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        StudentComponent,
        AddStudentComponent,
        ListStudentComponent,
        StudentDetailComponent
    ],
    imports: [
        StudentRoutingModule,
        DataTableModule,
        ReactiveFormsModule,
        CommonModule,
        ServeSyncFormControlModule
    ]
})
export class StudentModule { }