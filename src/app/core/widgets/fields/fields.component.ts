import {Component, ContentChild, Input, OnInit, Optional} from '@angular/core';
import {FormGroupDirective, NgControl, NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  @Input() label: string;

  @ContentChild(NgControl) control: NgControl;

  constructor(@Optional() private ngForm: NgForm, @Optional() private formGroupDir: FormGroupDirective) { }
  //injection de dépendance par le construction qui récupère le premier form trouvé parent.
  //@Optional() sert à dire que le form n'est pas obligatoire si on souhaite utiliser ce composant en dehors d'un form.

  ngOnInit() {
  }

  get form(){
    return this.ngForm || this.formGroupDir;
  }

}
