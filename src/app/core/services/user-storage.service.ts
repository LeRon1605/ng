import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { UserInfo } from "../schemas/user.schema";

@Injectable({ providedIn: 'root' })
export class UserStorageService {
    public currentUser: BehaviorSubject<UserInfo | null> = new BehaviorSubject<UserInfo | null>(null);

    setCurrentUser(user: UserInfo | null) {
        this.currentUser.next(user);
    }

    getCurrentUser() : UserInfo | null {
        return this.currentUser.value;
    }
}