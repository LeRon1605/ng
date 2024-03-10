import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  title: string = 'ServeSync';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}
