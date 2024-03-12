import { Component, OnInit } from "@angular/core";
import { StudentViewModel } from "../../../core/schemas/student.schema";
import { EducationProgramService, FacultyService, HomeRoomService, StudentService } from "../../../core/services";
import { PagedResult } from "../../../core/schemas/paged.schema";
import { DatatableOption } from "../../../shared/components/datatable/datatable.component";

@Component({
    selector: 'app-list-student',
    templateUrl: './list-student.component.html'
})
export class ListStudentComponent implements OnInit {
    
    currentPage = 1;
    search = '';
    students!: PagedResult<StudentViewModel>;
    dataTable: DatatableOption = {
        title: 'Danh sách sinh viên',
        rows: 10,
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

        // this.facultyService.getAllFaculties()
        //     .pipe(
        //         map(faculties => {
        //             return faculties.map(f => {
        //                 return {
        //                     text: f.name,
        //                     value: ['faculty', f.id]
        //                 }
        //             })
        //         })
        //     )
        //     .subscribe(faculties => {
        //         this.facultyDataSource = faculties;
        //     });

        // this.homeRoomService.getAllHomeRoom()
        //     .pipe(
        //         map(homeRooms => {
        //             return homeRooms.map(r => {
        //                 return {
        //                     text: r.name,
        //                     value: ['homeroom', r.id]
        //                 }
        //             })
        //         })
        //     )
        //     .subscribe(homeRooms => {
        //         this.homeRoomDataSource = homeRooms;
        //     });

        // this.educationProgramService.getAllEducationPrograms()
        //     .pipe(
        //         map(educationPrograms => {
        //             return educationPrograms.map(r => {
        //                 return {
        //                     text: r.name,
        //                     value: ['education-program', r.id]
        //                 }
        //             })
        //         })
        //     )
        //     .subscribe(educationPrograms => {
        //         this.educationProgramDataSource = educationPrograms;
        //     });
    }

    onPageChange(page: number) {
        this.currentPage = page;
        this.loadData();
    }

    onSearchChange(search: string) {
        this.search = search;
        this.loadData();
    }

    loadData() {
        this.studentService.getAllStudents(this.currentPage, this.dataTable.rows, this.search).subscribe(x => {
            this.dataTable.pagedResult = x;
        });
    }

    calculateGenderValue(gender: boolean) {
        return gender ? 'Nam' : 'Nữ';
    }
}