"use strict";
import "paper";

export class Dial extends paper.Group {
  constructor(minValue, maxValue, label, drawOptions) {
    super(drawOptions);

    this.minValue = minValue;
    this.maxValue = maxValue;
    const indicator = new paper.Path.Line({
      from: [drawOptions.center.x, drawOptions.center.y - 2],
      to: [drawOptions.center.x, drawOptions.center.y - drawOptions.radius],
      strokeColor: drawOptions.strokeColor});
    const circle = new paper.Path.Circle(drawOptions);
    const labelControl = new paper.PointText({
      point: [
        drawOptions.center.x,
        drawOptions.center.y + 20
      ],
      content: label,
      justification: 'center',
      fontSize: '6px',
      fontWeigth: 'bold'
    });

    this.addChild(circle);
    this.addChild(indicator);
    this.addChild(labelControl);

    this.on("mousedown", this.onMouseDown);
    this.on("mouseup", this.onMouseUp);
  }

  onMouseDown(event) {
    console.log(event);
  }

  onMouseUp(event) {
    console.log(event);
  }
};
