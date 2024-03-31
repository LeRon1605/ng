import { Component, OnInit } from "@angular/core";
import { StudentViewModel } from "../../../core/schemas/student.schema";
import { EducationProgramService, FacultyService, HomeRoomService, StudentService } from "../../../core/services";
import { PagedResult } from "../../../core/schemas/paged.schema";
import { DatatableOption } from "../../../shared/components/datatable/datatable.component";
import { FilterField, SelectedFilterField } from "../../../shared/components/filter/filter.component";
import { Router } from "@angular/router";

@Component({
    selector: 'app-list-student',
    templateUrl: './list-student.component.html'
})
export class ListStudentComponent implements OnInit {
    
    currentPage = 1;
    search = '';
    students!: PagedResult<StudentViewModel>;
    filterFields: FilterField[] = [];
    filterParams : { facultyId?: string, homeRomeId?: string, educationProgramId?: string, gender?: boolean } = {
        
    };

    dataTable: DatatableOption = {
        title: 'Danh sách sinh viên',
        rows: 13,
        columns: [
            {
                name: 'Họ và tên',
                field: 'fullName'
            },
            {
                name: 'MSSV',
                field: 'code'
            },
            {
                name: 'Email',
                field: 'email'
            },
            {
                name: 'Giới tính',
                field: 'gender',
                generate: x => x.gender ? 'Nam' : 'Nữ'
            },
            {
                name: 'Quê quán',
                field: 'homeTown'
            },
            {
                name: 'Khoa',
                field: 'faculty.name',
                generate: x => x.faculty.name
            },
            {
                name: 'Lớp SH',
                field: 'homeRoom.name',
                generate: x => x.homeRoom.name
            },
            {
                name: 'Hệ đào tạo',
                field: 'educationProgram.name',
                generate: x => x.educationProgram.name
            },
            {
                name: 'Điểm',
                field: 'score'
            }
        ]
    }

    constructor(
        private studentService: StudentService, 
        private facultyService: FacultyService,
        private homeRoomService: HomeRoomService,
        private educationProgramService: EducationProgramService,
        private router: Router
    ) { }

    ngOnInit(): void {

        this.loadData();

        const genderFilterField : FilterField = {
            id: 'gender',
            name: 'Giới tính',
            data: [
                {
                    text: 'Nam',
                    value: true
                },
                {
                    text: 'Nữ',
                    value: false
                }
            ]
        };

        const homeRoomFilterField : FilterField = {
            id: 'homeRoom',
            name: 'Lớp sinh hoạt',
            data: []
        };

        const facultyFilterField : FilterField = {
            id: 'faculty',
            name: 'Khoa',
            data: [],
            selectedValueChanged: (facultyId) => {
                homeRoomFilterField.selectedValue = null;
                this.homeRoomService.getDropDownItems(facultyId)
                    .subscribe(homeRooms => homeRoomFilterField.data = homeRooms);
            }
        };

        const educationProgramFilterField : FilterField = {
            id: 'educationProgram',
            name: 'Hệ đào tạo',
            data: []
        };

        this.filterFields.push(genderFilterField);
        this.filterFields.push(facultyFilterField);
        this.filterFields.push(homeRoomFilterField);
        this.filterFields.push(educationProgramFilterField);

        this.facultyService.getDropDownItems()
            .subscribe(faculties => facultyFilterField.data = faculties);

        this.educationProgramService.getDropDownItems()
            .subscribe(educationPrograms => educationProgramFilterField.data = educationPrograms);
    }

    onPageChange(page: number) {
        this.currentPage = page;
        this.loadData();
    }

    onSearchChange(search: string) {
        this.search = search;
        this.loadData();
    }

    onFilterChange(filters: SelectedFilterField[]) {
        this.currentPage = 1;

        for (let filter of filters) {
            switch (filter.id) {
                case 'faculty':
                    this.filterParams.facultyId = filter.value;
                    break;

                case 'homeRoom':
                    this.filterParams.homeRomeId = filter.value;
                    break;

                case 'educationProgram':
                    this.filterParams.educationProgramId = filter.value;
                    break;

                case 'gender':
                    this.filterParams.gender = filter.value;
                    break;
            }
        }

        this.loadData();
    }

    loadData() {
        this.studentService
            .getAllStudents(this.currentPage
                , this.dataTable.rows
                , this.search
                , this.filterParams.facultyId
                , this.filterParams.homeRomeId
                , this.filterParams.educationProgramId
                , this.filterParams.gender)
            .subscribe(x => {
                this.dataTable.pagedResult = x;
            });
    }

    onStudentSelected(student: StudentViewModel) {
        this.router.navigate(['/students/student-detail', student.id])
    }
}