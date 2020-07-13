import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { merge } from "rxjs";
import { mapTo, startWith, tap } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  keyboardIsVisible$ = merge(
    this.platform.keyboardDidShow.pipe(
      tap((keyboardOpenEvent) => console.log({ keyboardOpenEvent })),
      mapTo(true)
    ),
    this.platform.keyboardDidHide.pipe(
      tap((keyboardHideEvent) =>
        console.log({ keyboardOpenEvent: keyboardHideEvent })
      ),
      mapTo(false)
    )
  ).pipe(startWith(false));

  constructor(private platform: Platform) {}
}
