import { EducationProgramViewModel } from "./education-program.schema";
import { FacultyViewModel } from "./faculty.schema";
import { HomeRoomViewModel } from "./home-room.schema";
import { PagedRequest } from "./paged.schema";

export interface StudentViewModel {
    id: string;
    code: string;
    fullName: string;
    dateOfBirth: string;
    homeTown: string;
    address: string;
    imageUrl: string;
    citizenId: string;
    email: string;
    phone: string;
    identityId: string;
    faculty: FacultyViewModel;
    homeRoom: HomeRoomViewModel;
    educationProgram: EducationProgramViewModel;
}

export interface StudentFilterAndPagingRequest extends PagedRequest {
    homeRoomId?: string;
    facultyId?: string;
    educationProgramId?: string;
}