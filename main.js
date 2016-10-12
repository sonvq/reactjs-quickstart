import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var imageSrc = "images/jenkins.png";

function makeDoggy (e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

function coinToss () {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var imageWidth = 100;
var imageHeight = 100;

var kitty = (
	<img width={imageWidth} height={imageHeight}
            src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
            alt="kitty" onClick={makeDoggy} />
);

var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

// if/else statement begins here:
if (coinToss() == 'heads') {
  var imgAnimal = <img width={imageWidth} height={imageHeight} src={pics.kitty} />;
} else {
  var imgAnimal = <img width={imageWidth} height={imageHeight} src={pics.doggy} />;
}

var profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img className="jenkin-img" width={imageWidth} height={imageHeight} src={imageSrc} />
    
    <article>
      I LIKE TO SIT
      {kitty}
      <br />
      JENKINS IS MY NAME
      {imgAnimal}
      <br />
      THANKS A LOT
      <h1>2 + 3 = {2 + 3}</h1>;
    </article>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(profile, document.getElementById('demo-html'));

