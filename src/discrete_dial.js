"use strict";
import "paper";

export class DiscreteDial {
  constructor(values,
              drawOptions={
                center: paper.view.center,
                radius: 15,
                strokeColor: 'black'}) {
    this.values = values;
    this.drawOptions = drawOptions;
    this.indicator = new paper.Path.Line({
      from: [this.drawOptions.center.x, this.drawOptions.center.y - 7],
      to: [this.drawOptions.center.x, this.drawOptions.center.y - this.drawOptions.radius],
      strokeColor: this.drawOptions.strokeColor});
    this.circle = new paper.Path.Circle(drawOptions);

    let valuesAngle = (360 / values.length) * (Math.PI/180);
    let currentAngle = Math.PI;

    for (let index in this.values) {
      let xOffset = Math.cos(currentAngle);
      let yOffset = Math.sin(currentAngle);

      new paper.Path.Line({
        from: [this.drawOptions.center.x + ((this.drawOptions.radius + 2) * xOffset),
               this.drawOptions.center.y + ((this.drawOptions.radius + 2) * yOffset)],
        to: [this.drawOptions.center.x + (((this.drawOptions.radius + 5) * xOffset)),
             this.drawOptions.center.y + ((this.drawOptions.radius + 5) * yOffset)],
        strokeColor: this.drawOptions.strokeColor
      });

      let xTextOffset = xOffset > 0 ? 5.5 : 13; //todo this must account for text width
      let yTextOffset = yOffset < 0 ? 5.5 : 13; //this this must account for text height

      let legend = new paper.PointText({
        point: [
          this.drawOptions.center.x + (((this.drawOptions.radius + xTextOffset) * xOffset)),
          this.drawOptions.center.y + ((this.drawOptions.radius + yTextOffset) * yOffset)
        ],
        content: this.values[index][0],
        fontSize: '6px'
      });
      currentAngle += valuesAngle;
    }
  }
};
