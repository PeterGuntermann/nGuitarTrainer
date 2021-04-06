import { Component, Input, OnInit } from "@angular/core";
import { GuitarString } from "@models/guitar-string.enum";
import { FretboardChart } from "./fretboard-chart";
import { FretboardChartBuilder } from "./fretboard-chart.builder";

@Component({
    selector: "shared-fretboard",
    templateUrl: "./fretboard.component.html",
    styleUrls: ["./fretboard.component.scss"],
})
export class FretboardComponent implements OnInit {
    @Input() fretboardChart: FretboardChart;

    ngOnInit() {
        if (this.fretboardChart) return;
        this.fretboardChart = new FretboardChartBuilder()
            .e(2)
            .b(1)
            .g(4)
            .d(3)
            .a(1)
            .E(3)
            .E(4)
            .active(GuitarString.G)
            .build();
    }
}
