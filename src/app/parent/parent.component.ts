import { Component, OnInit } from "@angular/core";

@Component({
  selector: "parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  private strValueParent: string;
  constructor() {}
  ngOnInit() {
    this.strValueParent = "Value from ParentComponent.";
  }
}
