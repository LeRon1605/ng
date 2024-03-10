import { Component, OnInit } from "@angular/core";
// import DataSource from "devextreme/data/data_source";
import { lastValueFrom, map } from "rxjs";

@Component({
    selector: 'app-list-student',
    templateUrl: './list-student.component.html'
})
export class ListStudentComponent implements OnInit {
    ngOnInit(): void {
        
    } 
    // studentDataSource!: DataSource;
    // facultyDataSource!: any;
    // homeRoomDataSource!: any;
    // educationProgramDataSource!: any;
    // searchText: string = '';
    // genderHeaderFilter = [
    //     {
    //         text: 'Nam',
    //         value: ['gender', true]
    //     }, 
    //     {
    //         text: 'Nữ',
    //         value: [
    //             ['gender', false]
    //         ]
    //     }
    // ];

    // constructor(
    //     private studentService: StudentService, 
    //     private facultyService: FacultyService,
    //     private homeRoomService: HomeRoomService,
    //     private educationProgramService: EducationProgramService
    // ) { }

    // ngOnInit(): void {

    //     this.studentDataSource = new DataSource({
    //         key: 'id',
    //         paginate: true,
    //         requireTotalCount: true,
    //         load: (loadOptions) => {
    //             const { take, filter } = loadOptions;

    //             console.log(filter);

    //             const loadStudent$ = this.studentService.getAllStudents(this.studentDataSource.pageIndex() + 1, <number>take, this.searchText).pipe(map(x => {
    //                 return {
    //                     data: x.data,
    //                     totalCount: x.total
    //                 }
    //             }));

    //             return lastValueFrom(loadStudent$);
    //         }
    //     });

    //     this.facultyService.getAllFaculties()
    //         .pipe(
    //             map(faculties => {
    //                 return faculties.map(f => {
    //                     return {
    //                         text: f.name,
    //                         value: ['faculty', f.id]
    //                     }
    //                 })
    //             })
    //         )
    //         .subscribe(faculties => {
    //             this.facultyDataSource = faculties;
    //         });

    //     this.homeRoomService.getAllHomeRoom()
    //         .pipe(
    //             map(homeRooms => {
    //                 return homeRooms.map(r => {
    //                     return {
    //                         text: r.name,
    //                         value: ['homeroom', r.id]
    //                     }
    //                 })
    //             })
    //         )
    //         .subscribe(homeRooms => {
    //             this.homeRoomDataSource = homeRooms;
    //         });

    //     this.educationProgramService.getAllEducationPrograms()
    //         .pipe(
    //             map(educationPrograms => {
    //                 return educationPrograms.map(r => {
    //                     return {
    //                         text: r.name,
    //                         value: ['education-program', r.id]
    //                     }
    //                 })
    //             })
    //         )
    //         .subscribe(educationPrograms => {
    //             this.educationProgramDataSource = educationPrograms;
    //         });
    // }

    // calculateGenderValue(gender: boolean) {
    //     return gender ? 'Nam' : 'Nữ';
    // }
}