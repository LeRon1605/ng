import { Injectable } from "@angular/core";
import { FacultyApiService } from "../apis/faculty.api";

@Injectable({ providedIn: 'root' })
export class FacultyService {
    constructor(private facultyApiService: FacultyApiService) {}

    getAllFaculties() {
        return this.facultyApiService.getAllFaculties();
    }
}