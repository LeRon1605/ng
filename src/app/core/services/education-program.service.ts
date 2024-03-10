import { Injectable } from "@angular/core";
import { EducationProgramApiService } from "../apis/education-program.api";

@Injectable({ providedIn: 'root' })
export class EducationProgramService {
    constructor(private educationProgramApiService: EducationProgramApiService) {}

    getAllEducationPrograms() {
        return this.educationProgramApiService.getAllEducationPrograms();
    }
}