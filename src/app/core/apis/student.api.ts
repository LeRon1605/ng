import { Injectable } from "@angular/core";
import { BaseApiService } from "./base.api";
import { StudentFilterAndPagingRequest, StudentViewModel } from "../schemas/student.schema";
import { PagedResult } from "../schemas/paged.schema";
import { HttpParams } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class StudentApiService extends BaseApiService {
    getAllStudents(studentPagedRequest: StudentFilterAndPagingRequest) {
        return this.http.get<PagedResult<StudentViewModel>>(this.API_END_POINTS.STUDENT, {
            params: this.getPagingParams(studentPagedRequest)
        });
    }

    private getPagingParams(studentPagedRequest: StudentFilterAndPagingRequest) : HttpParams {
        let params: HttpParams = new HttpParams();

        if (studentPagedRequest.page) {
            params = params.append('page', studentPagedRequest.page);
        }

        if (studentPagedRequest.size) {
            params= params.append('size', studentPagedRequest.size);
        }

        if (studentPagedRequest.search && studentPagedRequest.search !== '') {
            params= params.append('search', studentPagedRequest.search);
        }
        
        return params;
    }
}