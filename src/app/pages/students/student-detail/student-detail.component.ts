import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EducationProgramService, FacultyService, HomeRoomService, StudentService } from "../../../core/services";
import { StudentDetailViewModel } from "../../../core/schemas/student.schema";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { DropDownItem } from "../../../shared/components/form-controls/dropwdown-input/dropdown-input.component";

@Component({
    selector: 'app-student-detail',
    templateUrl: './student-detail.component.html'
})
export class StudentDetailComponent implements OnInit, OnDestroy {

    student?: StudentDetailViewModel;
    
    studentSupscription!: Subscription;

    loading!: boolean;

    homeRooms!: DropDownItem[];
    faculties!: DropDownItem[];
    educationPrograms!: DropDownItem[];

    form = new FormGroup({
        code: new FormControl(),
        fullName: new FormControl(),
        homeTown: new FormControl(),
        address: new FormControl(),
        homeRoom: new FormControl(),
        faculty: new FormControl(),
        educationProgram: new FormControl(),
        citizenId: new FormControl(),
        email: new FormControl(),
        phone: new FormControl()
    });


    constructor(
        private route: ActivatedRoute,
        private studentService: StudentService,
        private facultyService: FacultyService,
        private homeRoomService: HomeRoomService,
        private educationProgramService: EducationProgramService,
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            if (params.has('id')) {
                const id = <string>params.get('id');
                this.loading = true;
                this.studentSupscription = this.studentService.getById(id)
                    .subscribe(
                        student => {
                            this.loading = false;

                            if (!student)
                                return;

                            this.student = student;
                            this.syncFormData();
                            this.loadHomeRoom(this.student.facultyId);
                            this.loadFaculties();
                            this.loadEducationPrograms();
                        },
                        error => {
                            console.log(error);
                        });
            }
        })
    }

    ngOnDestroy(): void {
        this.studentSupscription.unsubscribe();
    }

    syncFormData() {
        if (!this.student)
            return;

        this.form.patchValue({ 
            code: this.student.code,
            fullName: this.student.fullName,
            homeTown: this.student.homeTown,
            address: this.student.address,
            homeRoom: this.student.homeRoomId,
            faculty: this.student.facultyId,
            educationProgram: this.student.educationProgramId,
            citizenId: this.student.citizenId,
            email: this.student.email,
            phone: this.student.phone
        });
    }

    onFacultyChanged(facultyId: string) {
        this.loadHomeRoom(facultyId, true);
    }

    loadFaculties() {
        this.facultyService.getDropDownItems()
            .subscribe(faculties => this.faculties = faculties);
    }

    loadHomeRoom(facultyId: string, isReset: boolean = false) {
        if (isReset)
            this.form.patchValue({ homeRoom: null });

        this.homeRoomService.getDropDownItems(facultyId)
            .subscribe(homeRooms => this.homeRooms = homeRooms);
    }

    loadEducationPrograms() {
        this.educationProgramService.getDropDownItems()
            .subscribe(educationPrograms => this.educationPrograms = educationPrograms);
    }
}