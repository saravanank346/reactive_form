import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Header } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';
 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private fb:FormBuilder){

  }

 

  
  multiSelectSkills:any[]=[
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'BOOTSTRAP' },
    { name: 'ANGULAR' },
  ]

  visible: boolean = false;
  selectedCities: string[] = [];
 
  categories:any[]=[
    {
      gender:"Male"
    },  {
      gender:"Female"
    },  {
      gender:"others"
    }
  ]
  // skills=["HTML","CSS","Bootstrap"]
  skill:any[]=[
    {
      skill:"html"
    },
    {
      skill:"css"
    },

            
  ]

  CheckboxChangeEvent(){
    
  }
 
  
  userform=this.fb.group({
    name: new FormControl("",{
      validators:[
        Validators.required,Validators.maxLength(20),
        Validators.pattern("^[A-Za-z][A-Za-z0-9_]{4,20}$")
      ]
    }

    ),
    email:new FormControl("",{
      validators:[
        Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"),
        Validators.email
      ]
    }),

    phone:new FormControl("",{
      validators:
      [
        Validators.required,Validators.minLength(10),Validators.maxLength(10),
        Validators.pattern("[0-9]*$")
      ]
    }),
    // selectGender: new FormControl("",{
    //   validators:[
    //     Validators.required,
    //   ]

    // }),

    
    addDynamicElement: this.fb.array([ 
      this.fb.group({
        doorNo:this.fb.control("",{

        }),
        streetName:this.fb.control("",{

        }),
        district:this.fb.control("",{

        })
      
      }),
    ],[Validators.required,Validators.maxLength(50)]),

  
   
    
  }
  
   
  );
  

  get addDynamicElement() {
    return this.userform.get('addDynamicElement') as FormArray
  }
  submit_btn(){
    this.visible=false;
  }
  cancel_btn(){
    this.visible=false
  }

  // selectedCategories: any[] = [];
/*############### Add Dynamic Elements ###############*/





addItems() {
  console.log( this.addDynamicElement.push(this.fb.control(''))); 
}
submit(){
    console.log("inside");
    
  
  if(this.userform.invalid) {
    // console.log("inside1");
    // console.log(this.userform.value)
    return this.userform.markAllAsTouched();

  }else{
    console.log("inside2");
    this.visible = true;
    
    console.log(this.userform.value)
    alert(JSON.stringify(this.userform.value));
  }
 
}
}
