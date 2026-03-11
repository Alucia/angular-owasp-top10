import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import DOMPurify from 'dompurify';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  safeHtml!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    const cleanHtml = '<b>Contenido seguro</b>';
    const htmlFromApi = '<img src=x onerror=alert("XSS") />';

    // this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
    this.safeHtml = DOMPurify.sanitize(htmlFromApi);
  }

}
