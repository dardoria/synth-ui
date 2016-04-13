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

    this.on("mousedrag", this.onMouseDrag);
    this.on("mouseup", this.onMouseUp);
  }

  onMouseDrag(event) {
    // todo limit rotation
    const angle = Math.atan2(event.delta.x, event.delta.y) * 5;
    this.children[1].rotate(
      angle,
      this.children[0].position
    );
  }

  onMouseUp(event) {
    // todo send midi
    console.log(event);
  }
};
