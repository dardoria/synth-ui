"use strict";
import "paper";

export class Dial {
  constructor(minValue, maxValue, label, drawOptions) {
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.drawOptions = drawOptions;
    this.indicator = new paper.Path.Line({
      from: [this.drawOptions.center.x, this.drawOptions.center.y - 2],
      to: [this.drawOptions.center.x, this.drawOptions.center.y - this.drawOptions.radius],
      strokeColor: this.drawOptions.strokeColor});
    this.circle = new paper.Path.Circle(drawOptions);
    new paper.PointText({
      point: [
        this.drawOptions.center.x,
        this.drawOptions.center.y + 20
      ],
      content: label,
      justification: 'center',
      fontSize: '6px',
      fontWeigth: 'bold'
    });
  }
};
