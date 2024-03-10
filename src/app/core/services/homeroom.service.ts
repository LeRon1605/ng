import { Injectable } from "@angular/core";
import { HomeRoomApiService } from "../apis/homeroom.api";

@Injectable({ providedIn: 'root' })
export class HomeRoomService {

    constructor(private homeRoomApiService: HomeRoomApiService) {}

    getAllHomeRoom(facultyId?: string) {
        return this.homeRoomApiService.getAllHomeRooms(facultyId);
    }
}