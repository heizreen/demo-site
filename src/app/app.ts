import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { GoogleForm } from './google-form';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');

  message = '';

  constructor(private googleForm: GoogleForm) {}

  submitForm(data: any) {
    this.googleForm.submit(data).subscribe({
      next: () => {
        this.message = "Form submitted successfully!";
      },
      error: () => {
        this.message = "Error submitting form.";
      }
    });
  }
}
