"use strict"

import "paper";
import {DiscreteDial} from "./discrete_dial";
import {Dial} from "./dial";
import {Button} from "./button";

const xFirstColumn = 35;

function makeDiscreteDials() {
  new DiscreteDial(
    [["Poly", 32],
     ["Unison'", 16],
     ["Octave", 8],
     ["Fifth", 4],
     ["Unison\n Ring", 2],
     ["Poly\n Ring", 1]],
    {center: new paper.Point(xFirstColumn, 35),
     radius: 15,
     strokeColor: 'black',
     fillColor: 'white',
     shadowColor: new paper.Color(0, 0, 0),
     // Set the shadow blur radius to 12:
     shadowBlur: 3,
    // Offset the shadow by { x: 5, y: 5 }
     shadowOffset: new paper.Point(1, 2)}
  );
  new DiscreteDial(
    [
      ["32'", 32],
      ["16'", 16],
      ["8'", 8],
      ["4'", 4],
      ["2'", 2],
      ["1'", 1]],
    {center: new paper.Point(xFirstColumn, 110),
     radius: 15,
     strokeColor: 'black',
     fillColor: 'white',
     shadowColor: new paper.Color(0, 0, 0),
     // Set the shadow blur radius to 12:
     shadowBlur: 3,
    // Offset the shadow by { x: 5, y: 5 }
     shadowOffset: new paper.Point(1, 2)}
  );
}

function makeDials() {
  let xPos = 100;
  let xIndex = 0;
  let labelIndex = 0;
  let labels = ['DETUNE', 'PORTAMENTO', 'EG INT', 'CUTOFF', 'PEAK', 'EG INT', 'RATE', 'PITCH INT', 'CUTOFF INT', 'ATTACK', 'DECAY/RELEASE', 'SUSTAIN'];
  let categories = ['VCO', 'VCF', 'LFO', 'EG'];

  while (xIndex < 4) {
    let yPos = 15;
    let yIndex = 0;

    new paper.PointText({
      point: [xPos, yPos],
      content: categories[xIndex],
      justification: 'center',
      fillColor: 'black',
      fontWeight: 'bold',
      fontSize: 10
    });

    yPos += 20;

    while (yIndex < 3) {
      const dial = new Dial(
        0,
        127,
        labels[labelIndex],
        {center: new paper.Point(xPos, yPos),
         radius: 8,
         strokeColor: 'black',
         fillColor: 'white',
         shadowColor: new paper.Color(0, 0, 0),
         // Set the shadow blur radius to 12:
         shadowBlur: 3,
         // Offset the shadow by { x: 5, y: 5 }
         shadowOffset: new paper.Point(1, 2)}
      );

      labelIndex++;
      yPos += 39;
      yIndex++;
    }

    xPos += 50;
    xIndex++;
  };
}

function makeDelay() {
  let labels = ['TIME', 'FEEDBACK', 'TEMPO', 'VOLUME'];
  let yPos = 73.5;
  let xPos = 320;
  let xIndex = 0;
  let labelIndex = 0;
  while (xIndex < 4) {
    new Dial(
      20,
      120,
      labels[labelIndex],
      {center: new paper.Point(xPos, yPos),
       radius: 8,
       strokeColor: 'black',
       fillColor: 'white',
       shadowColor: new paper.Color(0, 0, 0),
       // Set the shadow blur radius to 12:
       shadowBlur: 3,
       // Offset the shadow by { x: 5, y: 5 }
       shadowOffset: new paper.Point(1, 2)}
    );

    labelIndex++;
    xPos += 39;
    xIndex++;
  }
};

function makeButtons() {
  let labels = ['PLAY', 'STOP', 'MEMORY'];
  let yPos = 112;
  let xPos = 316;
  let xIndex = 0;
  let labelIndex = 0;
  while (xIndex < 3) {
    new Button(
      {x: xPos,
       y: yPos,
       width: 30,
       height: 15,
       fillColor: 'black',
       strokeColor: 'white'}
    );

    labelIndex++;
    xPos += 39;
    xIndex++;
  }
};

function makeKeyBoard1() {
 let yPos = 145;
  let xPos = 15;
  let xIndex = 0;
  let skip = [3, 6, 10, 13, 15];
  while (xIndex < 16) {
    if (!(skip.indexOf(xIndex) > -1)) {
      new Button(
        {x: xPos,
         y: yPos,
         width: 25,
         height: 50,
         fillColor: 'black',
         strokeColor: 'white'}
      );
    }
    xPos += 30;
    xIndex++;
  }
}

function makeKeyBoard2() {
 let yPos = 200;
  let xPos = 0;
  let xIndex = 0;
  let labelIndex = 0;
  while (xIndex < 16) {
    new Button(
      {x: xPos,
       y: yPos,
       width: 25,
       height: 50,
       fillColor: 'white',
       strokeColor: 'black'}
    );

    labelIndex++;
    xPos += 30;
    xIndex++;
  }
}

makeDiscreteDials();
makeDials();
makeDelay();
makeButtons();
makeKeyBoard1();
makeKeyBoard2();
