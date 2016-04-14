"use strict";
import "paper";

export class Dial extends paper.Group {
  constructor(minValue, maxValue, label, drawOptions) {
    super(drawOptions);

    this.minValue = minValue;
    this.maxValue = maxValue;
    this.selectedValue = minValue + ((maxValue - minValue) / 2);
    this.currentAngle = 0;
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
    const maxAngle = 160;
    const step = this.maxValue / maxAngle / 2;
    const angle = Math.floor(Math.atan2(event.delta.x, event.delta.y) * 10);

    if (angle > 0) {
      this.currentAngle = Math.min(maxAngle, this.currentAngle + angle);
      this.selectedValue = (this.maxValue / 2) + (this.currentAngle * step);
    } else {
      this.currentAngle = Math.max(maxAngle * -1, this.currentAngle + angle);
      this.selectedValue = this.minValue + (this.maxValue / 2) + (this.currentAngle * step);
    }

    console.log(this.selectedValue);
    if (this.selectedValue < this.minValue) {
      console.log("angle " + angle);
      console.log("current angle " + this.currentAngle);
    }

    if (this.currentAngle > maxAngle * -1 && this.currentAngle < maxAngle) {
      this.children[1].rotate(
        angle,
        this.children[0].position
      );
    }
  }

  onMouseUp(event) {
    // todo send midi
    console.log(event);
  }
};
