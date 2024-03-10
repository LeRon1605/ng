import { Injectable } from "@angular/core";
import { StudentApiService } from "../apis/student.api";

@Injectable({ providedIn: 'root' })
export class StudentService {
    constructor(private studentApiService: StudentApiService) {}

    getAllStudents(page: number, size: number, searchText: string) {
        return this.studentApiService.getAllStudents({
            page, 
            size,
            search: searchText
        });
    }
    
}