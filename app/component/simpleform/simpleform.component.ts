import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  submittedData: { name: string, email: string } | null = null;

  onSubmit(): void {
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(form);

    this.submittedData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    };
  }
}
