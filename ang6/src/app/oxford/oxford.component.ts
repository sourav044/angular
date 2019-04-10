import { OxfordService } from './../_services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


declare var $:any;


@Component({
  selector: 'app-oxford',
  templateUrl: './oxford.component.html',
  styleUrls: ['./oxford.component.css']
})



export class OxfordComponent implements OnInit {


  loading:boolean;
  DefinitionList:any =[];
  SearchWord: string;

  constructor( private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private oxfordService: OxfordService) { }

  ngOnInit() {
    this.SearchWord= "Son";
  }



  search_word(): void {
    this.loading = true;
    this.DefinitionList=this.oxfordService.getDefinition(this.SearchWord);
    this.loading = false;
  }
}
