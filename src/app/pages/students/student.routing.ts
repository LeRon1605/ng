import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./student.component";
import { ListStudentComponent } from "./list-students/list-student.component";
import { AddStudentComponent } from "./add-student/add-student.component";

const routes: Routes = [
    {
        path: '',
        component: StudentComponent,
        children: [
            {
                path: 'list-students',
                component: ListStudentComponent
            },
            {
                path: 'add-student',
                component: AddStudentComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }