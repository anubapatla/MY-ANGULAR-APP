import { Component } from '@angular/core';
import { RouterOutlet, } from '@angular/router';
import { RouterLink, RouterModule } from "../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
