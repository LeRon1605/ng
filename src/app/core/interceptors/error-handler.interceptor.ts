import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, filter, switchMap, take, throwError } from "rxjs";
import { AuthService } from "../services";
import { TokenStorageService } from "../services/token-storage.service";
import { AuthApiService } from "../apis/auth.api";
import { Router } from "@angular/router";
import { ToastService } from "../services/toast.service";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    
    constructor(
        private authApiService: AuthApiService,
        private authService: AuthService, 
        private tokenStorageService: TokenStorageService,
        private router: Router,
        private toastService: ToastService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(errorResponse => {
                if (errorResponse instanceof HttpErrorResponse) {
                    if (errorResponse.status == 401) {
                        return this.handleUnAuthorizedRequest(req, next);
                    }

                    if (errorResponse.error?.message) {
                        this.toastService.error(errorResponse.error.message);
                    }
                }

                return throwError(errorResponse);
            })
        );
    }

    handleUnAuthorizedRequest(req: HttpRequest<any>, next: HttpHandler) {
        if (this.authService.isRefreshing) {
            return this.authService.refreshTokenSubject.pipe(
                filter(token => token !== null),
                take(1),
                switchMap((token) => this.addJwtTokenToRequest(req, next))
              );
        }

        return this.authService.refreshToken()
            .pipe(
                switchMap(response => this.addJwtTokenToRequest(req, next)),
                catchError(errorResponse => {
                    this.authService.setAuthenticatedUser(null);
                    this.toastService.error('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.');
                    this.router.navigate(['/auth/login']);
                    return throwError(errorResponse);
                })
            );
    }

    addJwtTokenToRequest(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.tokenStorageService.getAccessToken();
        const authenticatedRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
        });

        return next.handle(authenticatedRequest);
    }

}