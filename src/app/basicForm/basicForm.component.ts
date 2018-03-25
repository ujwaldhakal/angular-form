import { Component, OnInit, Host } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'basic-template-driven-form',
  templateUrl: './basicForm.component.html'
})
export class BasicFormComponent implements OnInit {
  form: any;
  powers: string[];
  submitted: boolean = false;
  
   constructor (private http: Http) {}
  ngOnInit() {
    
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
    return this.http.post('http://localhost/angular-laravel/public/email/send', form, {headers:{'Content-Type': 'application/json'}}).map(res =>  res.json()).subscribe();  

  }
}