"use strict";
import "paper";

export class DiscreteDial extends paper.Group {
  constructor(values,
              drawOptions={
                center: paper.view.center,
                radius: 15,
                strokeColor: 'black'}) {
    super(drawOptions);

    this.values = values;
    this.selectedAngle = 0;

    const indicator = new paper.Path.Line({
      from: [drawOptions.center.x, drawOptions.center.y - 7],
      to: [drawOptions.center.x, drawOptions.center.y - drawOptions.radius],
      strokeColor: drawOptions.strokeColor});
    const circle = new paper.Path.Circle(drawOptions);

    let valuesAngle = (360 / values.length) * (Math.PI/180);
    let currentAngle = Math.PI / 2;

    for (let index in this.values) {
      let xOffset = Math.cos(currentAngle);
      let yOffset = Math.sin(currentAngle);

      new paper.Path.Line({
        from: [drawOptions.center.x + ((drawOptions.radius + 2) * xOffset),
               drawOptions.center.y + ((drawOptions.radius + 2) * yOffset)],
        to: [drawOptions.center.x + (((drawOptions.radius + 5) * xOffset)),
             drawOptions.center.y + ((drawOptions.radius + 5) * yOffset)],
        strokeColor: drawOptions.strokeColor
      });

      let xTextOffset = xOffset > 0 ? 5.5 : 13.3; //todo this must account for text width
      let yTextOffset = yOffset < 0 ? 5.5 : 13.3; //this this must account for text height

      let legend = new paper.PointText({
        point: [
          drawOptions.center.x + (((drawOptions.radius + xTextOffset) * xOffset)),
          drawOptions.center.y + ((drawOptions.radius + yTextOffset) * yOffset)
        ],
        content: this.values[index][0],
        fontSize: '6px'
      });
      currentAngle += valuesAngle;
    }

    this.addChild(circle);
    this.addChild(indicator);

    this.on("mousedrag", this.onMouseDrag);
    this.on("mouseup", this.onMouseUp);
  }

  onMouseDrag(event) {
    const angle = Math.floor(Math.atan2(event.delta.x, event.delta.y) * 10);
    this.selectedAngle = (this.selectedAngle + angle) % 360;

    this.children[1].rotate(
      angle,
      this.children[0].position
    );
  }

  onMouseUp(event) {
    let step = 360 / this.values.length;
    console.log(this.selectedAngle);
    console.log(this.selectedAngle / step);

  }
};
