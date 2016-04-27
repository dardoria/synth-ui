"use strict";

import "paper";

export class Button extends paper.Group {
  constructor(drawOptions) {
    super(drawOptions);
    const rectangle1 = new paper.Path.Rectangle({
      topLeft: [drawOptions.x, drawOptions.y],
      bottomRight: [drawOptions.x + drawOptions.width, drawOptions.y + drawOptions.height],
      radius: 2,
      fillColor: drawOptions.fillColor,
      shadowColor: new paper.Color(0, 0, 0),
      shadowBlur: 3,
      shadowOffset: new paper.Point(1, 2)
    });

    const rectangle2 = paper.Path.Rectangle({
      topLeft: [drawOptions.x+2, drawOptions.y+2],
      bottomRight: [drawOptions.x-2 + drawOptions.width, drawOptions.y-2 + drawOptions.height],
      radius: 1,
      strokeColor: drawOptions.strokeColor
    });

    this.addChild(rectangle1);
    this.addChild(rectangle2);

    // a workaround for https://github.com/paperjs/paper.js/issues/640
    this.on("mousedown", this.onMouseDown);
    this.on("mouseup", this.onMouseUp);
  }

  onMouseDown(event) {
    this.firstChild.set({
      shadowColor: new paper.Color(1, 1, 1)
    });
    //todo send MIDI
  }

  onMouseUp(event) {
    this.firstChild.set({
      shadowColor: new paper.Color(0, 0, 0)
    });
    //todo send MIDI
  }
};
