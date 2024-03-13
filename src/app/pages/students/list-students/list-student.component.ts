import { Component, OnInit } from "@angular/core";
import { StudentViewModel } from "../../../core/schemas/student.schema";
import { EducationProgramService, FacultyService, HomeRoomService, StudentService } from "../../../core/services";
import { PagedResult } from "../../../core/schemas/paged.schema";
import { DatatableOption } from "../../../shared/components/datatable/datatable.component";
import { FilterField, SelectedFilterField } from "../../../shared/components/filter/filter.component";

@Component({
    selector: 'app-list-student',
    templateUrl: './list-student.component.html'
})
export class ListStudentComponent implements OnInit {
    
    currentPage = 1;
    search = '';
    students!: PagedResult<StudentViewModel>;
    filterFields: FilterField[] = [];
    filterParams : { facultyId?: string, homeRomeId?: string, educationProgramId?: string } = {
        
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
                generate: x => x ? 'Nam' : 'Nữ'
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
        private educationProgramService: EducationProgramService
    ) { }

    ngOnInit(): void {

        this.loadData();

        this.filterFields.push({
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
        });

        this.facultyService.getAllFaculties()
            .subscribe(faculties => {
                this.filterFields.push({
                    id: 'faculty',
                    name: 'Khoa',
                    data: faculties.map(x => {
                        return {
                            text: x.name,
                            value: x.id
                        }
                    })
                })
            });

        this.homeRoomService.getAllHomeRoom()
            .subscribe(homeRooms => {
                this.filterFields.push({
                    id: 'homeRoom',
                    name: 'Lớp sinh hoạt',
                    data: homeRooms.map(x => {
                        return {
                            text: x.name,
                            value: x.id
                        }
                    })
                })
            });

        this.educationProgramService.getAllEducationPrograms()
            .subscribe(educationPrograms => {
                this.filterFields.push({
                    id: 'educationProgram',
                    name: 'Hệ đào tạo',
                    data: educationPrograms.map(x => {
                        return {
                            text: x.name,
                            value: x.id
                        }
                    })
                })
            });
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
            }
        }

        this.loadData();
    }

    loadData() {
        this.studentService.getAllStudents(this.currentPage, this.dataTable.rows, this.search, this.filterParams.facultyId, this.filterParams.homeRomeId, this.filterParams.educationProgramId).subscribe(x => {
            this.dataTable.pagedResult = x;
        });
    }

    calculateGenderValue(gender: boolean) {
        return gender ? 'Nam' : 'Nữ';
    }
}