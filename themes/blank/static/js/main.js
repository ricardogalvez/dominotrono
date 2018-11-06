
const indexPage = document.querySelector('.home-page');

const portfolioTile = document.querySelectorAll('.portfolio-flex__summary a');

const tileParent = document.querySelectorAll('.portfolio-flex__content figure img');

const tilePatternTwo = document.getElementsByClassName('svgShapeClip');

// const tiles = Array.from(portfolioTile);
// const tiles = Array.from(tileParent);

const tiles = Array.from(portfolioTile);
const allTheChildren = tiles.map(el => el.childNodes);
// console.log(allTheChildren);
const tilesArray = Array.from(tileParent);
const classesFromTileParent = tilesArray.map(classes => classes.classList);
// console.log(classesFromTileParent);


for (let i = 0; i < portfolioTile.length; i++) {
  const tileClasses = tileParent[i].classList;  
  portfolioTile[i].addEventListener('mouseenter', () => {
    tileClasses.add('portfolioCardOff');
    tileClasses.remove('portfolioCard');
    //console.log(tileClasses);
  });
  portfolioTile[i].addEventListener('mouseleave', () => {
    tileClasses.remove('portfolioCardOff');
    tileClasses.add('portfolioCard');
    //console.log(tileClasses);
  });
};

// portfolioTile.forEach((tile) => {
//   const getChildClass = tile.childNodes[1];
//   const portFolioClass = getChildClass.childNodes[1];
//   const theLastClass = portFolioClass.childNodes[1];
//   const imgClass = Array.from(theLastClass.classList);
//   tile.addEventListener('mouseenter', () => {
    
//     console.log(imgClass);
    
//     // imgClass.remove('portfolioCard');
//     // imgClass.add('portfolioCardOff');
//   });
//   tile.addEventListener('mouseleave', () => {
//     // const getChildClass = tile.childNodes[1];
//     // const portFolioClass = getChildClass.childNodes[1];
//     // const theLastClass = portFolioClass.childNodes[1];
//     // const imgClass = Array.from(theLastClass.classList);
//     console.log(imgClass);
//     // imgClass.add('portfolioCard');
//     // imgClass.remove('portfolioCardOff');
//   })
// });
//////
///// svg.js 
/////
const svgContainer = document.querySelector('.svgjs');

if (svgContainer != null) {
  //console.log(svgContainer);

  const canvas = SVG(svgContainer)
      .size('100%', '100%')
      .viewbox(0,0,800,1000), rect = canvas.rect(100, 100),
    path = canvas.path('m 357.64532,453.84097 c 17.62007,8.02216 -2.12058,27.70935 -13.33334,29.28571 -30.3859,4.27185 -48.34602,-29.97426 -45.23807,-55.9524 5.5594,-46.46879 56.1311,-70.59787 98.57145,-61.19043 62.28294,13.8058 93.32728,82.57702 77.1428,141.19051 C 453.21679,585.29693 365.67122,623.42358 290.97859,600.26951 196.98554,571.13248 151.71003,464.56996 181.93108,373.84089 218.53281,263.95583 344.23687,211.49702 450.97875,248.84102 576.77037,292.84963 636.43303,437.76771 591.93099,560.50775 540.55162,702.21597 376.3736,769.09583 237.6452,717.41234 80.01319,658.68628 5.9069261,475.21736 64.788247,320.50751 130.84419,146.94643 333.62587,65.607117 504.31214,131.69819 693.80625,205.0718 782.38357,427.18225 709.07382,613.84113'),
  
    length = path.length();
  
  path.fill('none').stroke({width:1, color: '#ccc'});

  rect.animate(8000, '<>').during(function(pos, morph, eased){
    var p = path.pointAt(eased * length);
    rect.center(p.x, p.y);
  }).loop(true, true);
}
///
/// end svg.js
///

///
/// time.js
///

/// This is to get the time of day and then do stuff
/// Mostly the idea is to change the background color
/// based on the time.

// get the time
function getHours() {
  const d = new Date();
  const offset = d.getTimezoneOffset() / 60;
  console.log(offset);
  let h = d.getUTCHours() - offset;
  let absoluteFix = (Math.abs(h));
  h = h - absoluteFix;
return absoluteFix;
}

const bgPairs = [
  {
    start: [
        "#333", "#a49444", "#567", "#789", "#ABC", "#AF0", "#333", "#1AC", "#567", "#7D9", "#AFC", "#a979ca", "#3D3", "#4A4", "#537", "#cff", "#A1C", "#9F0", "#333", "#444", "#5A7", "#7E9", "#1B2", "#4D0"
      ],
    end: [
      "#abc", "#bcd", "#ef1", "#123", "#456", "#789", "#012", "#c1e", "#abc", "#a3f2f3", "#1fe", "#123", "#456", "#28b", "#012", "#c1e", "#bcd", "#edc00b", "#123", "#456", "#789", "#012", "#c1e", "#123"
      ]
  }
];

// Use HSLA values instead of HEX...
// const hslaPairs = [
//   {

//   }
// ];




// Now set them to the hour:
const theHour = getHours();
console.log(theHour);
const start = bgPairs[0].start[theHour];
const end = bgPairs[0].end[theHour];

function makeRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// function walk(angle) {
//     angle = Math.Random(180 - theHour);
//     return angle;
//     console.log(angle); 
// }

const theAngle = makeRandomNumber(0, 360);
const thePercentage = makeRandomNumber(0, 100);
const angle = theAngle - theHour; // Hue
const saturation = thePercentage - theHour; // Saturation
const lightness = thePercentage - theHour; // Lightness
const alpha = 0.75; // Alpha
const position = 100 - theHour;

const container = document.querySelector('body');
function setTheGradient() {
  container.style.backgroundImage = 'linear-gradient(82deg, hsla(0, 5%, 5%, 0.75) 0%, hsla(0, 0%, 100%, 0.25)), linear-gradient(90deg,' + start + ',' + end + ')';
};

function setTheGradientHSLA() {
  container.style.backgroundImage = 'linear-gradient(82deg, hsla(0, 5%, 5%, 0.75)' + position + '%, hsla(0, 0%, 100%, 0.25)), linear-gradient(90deg, hsla('+ angle +', '+ saturation +'%,'+ lightness +'%,' + alpha +'), hsla(180, 5%, 12%, 0.2))';
};

setTheGradientHSLA();

///
/// end time.js
///

// do stuff w/ the response,
// concatenate all the posts to a single string
// convert string to morse code


  // create the morse code alphabet
  // map sound to each character
  // map custom svg shape to each character
  // const alphaMorse = [
  //     {
  //       "a" : ". _",
  //       "b" : "_ . . .",
  //       "c" : "_ . _ .",
  //       "d" : "_ . .",
  //       "e" : ".",
  //       "f" : ". . _ .",
  //       "g" : "_ _ .",
  //       "h" : ". . . .",
  //       "i" : ". .",
  //       "j" : ". _ _ _",
  //       "k" : "_ . _",
  //       "l" : ". _ . .",
  //       "m" : "_ _",
  //       "n" : "_ .",
  //       "o" : "_ _ _",
  //       "p" : ". _ _ .",
  //       "q" : "_ _ . _",
  //       "r" : ". _ .",
  //       "s" : ". . .",
  //       "t" : "_",
  //       "u" : ". . _",
  //       "v" : ". . . _",
  //       "w" : ". _ _",
  //       "x" : "_ . . _",
  //       "y" : "_ . _ _",
  //       "z" : "_ _ . .",
  //       "0" : "_ _ _ _ _",
  //       "1" : ". _ _ _ _",
  //       "2" : ". . _ _ _",
  //       "3" : ". . . _ _",
  //       "4" : ". . . . _",
  //       "5" : ". . . . ",
  //       "6" : "_ . . . .",
  //       "7" : "_ _ . . .",
  //       "8" : "_ _ _ . .",
  //       "9" : "_ _ _ _ .",
  //     }
  //   ];
// 

const homePage = document.querySelector('.home-page');

if (homePage != null) {

  const morseSVG =
    {
      dotSVG : `<svg class="dot" viewBox="0 0 107.66667 107.66667">
        <title>dot</title>
        <circle cx="53.83333" cy="53.83333" r="53.83333" />
      </svg>`,
      dashSVG : `<svg class="dash" viewBox="0 0 200 108.48468">
        <title>dash</title>
        <rect width="200" height="108.48468" rx="54.24229" ry="54.24229" />
      </svg>`
    };

    const Dash = morseSVG.dashSVG;
    const Dot = morseSVG.dotSVG;
    const alphaMorse = [
        {
          //"a" : ". _",
          "a" : `${Dot}${Dash}`,
          //"b" : "_ . . .",
          "b" : `${Dash}${Dot}${Dot}${Dot}`,
          //"c" : "_ . _ .",
          "c" : `${Dash}${Dot}${Dash}${Dot}`,
          //"d" : "_ . .",
          "d" : `${Dash} ${Dot} ${Dot}`,
          //"e" : ".",
          "e" : `${Dot}`,
          //"f" : ". . _ .",
          "f" : `${Dot} ${Dot} ${Dash} ${Dot}`,
          //"g" : "_ _ .",
          "g" : `${Dash} ${Dash} ${Dot}`,
          //"h" : ". . . .",
          "h" : `${Dot} ${Dot} ${Dot} ${Dot}`,
          // "i" : ". .",
          "i" : `${Dot} ${Dot}`,
          // "j" : ". _ _ _",
          "j" : `${Dot} ${Dash} ${Dash} ${Dash}`,
          // "k" : "_ . _",
          "k" : `${Dash} ${Dot} ${Dash}`,
          //"l" : ". _ . .",
          "l" : `${Dot} ${Dash} ${Dot} ${Dot}`,
          // "m" : "_ _",
          "m" : `${Dash} ${Dash}`,
          // "n"
          "n" : `${Dash} ${Dot}`,
          //"o" : "_ _ _",
          "o" : `${Dash} ${Dash} ${Dash}`,
          //"p" : ". _ _ .",
          "p" : `${Dot} ${Dash} ${Dash} ${Dot}`,
          //"q" : "_ _ . _",
          "q" : `${Dash} ${Dash} ${Dot} ${Dash}`,
          // "r" : ". _ .",
          "r" : `${Dot} ${Dash} ${Dot}`,
          //"s" : ". . .",
          "s" : `${Dot} ${Dot} ${Dot}`,
          //"t" : "_",
          "t" : `${Dash}`,
          // "u" : ". . _",
          "u" : `${Dot} ${Dot} ${Dash}`,
          // "v" : ". . . _",
          "v" : `${Dot} ${Dot} ${Dot} ${Dash}`,
          //"w" : ". _ _",
          "w" : `${Dot}${Dash}${Dash}`,
          // "x" : "_ . . _",
          "x" : `${Dash} ${Dot} ${Dot} ${Dash}`,
          // "y" : "_ . _ _",
          "y" : `${Dash} ${Dot} ${Dash} ${Dash}`,
          // "z" : "_ _ . .",
          "z" : `${Dash} ${Dash} ${Dot} ${Dot}`,
          // "0" : "_ _ _ _ _",
          "0" : `${Dash} ${Dash} ${Dash} ${Dash} ${Dash}`,
          // "1" : ". _ _ _ _",
          "1" : `${Dot} ${Dash} ${Dash} ${Dash} ${Dash}`,
          // "2" : ". . _ _ _",
          "2" : `${Dot} ${Dot} ${Dash} ${Dash} ${Dash}`,
          // "3" : ". . . _ _",
          "3" : `${Dot} ${Dot} ${Dot} ${Dash} ${Dash}`,
          // "4" : ". . . . _",
          "4" : `${Dot} ${Dot} ${Dot} ${Dot} ${Dash}`,
          // "5" : ". . . . ",
          "5" : `${Dot} ${Dot} ${Dot} ${Dot} `,
          // "6" : "_ . . . .",
          "6" : `${Dash} ${Dot} ${Dot} ${Dot} ${Dot}`,
          // "7" : "_ _ . . .",
          "7" : `${Dash} ${Dash} ${Dot} ${Dot} ${Dot}`,
          // "8" : "_ _ _ . .",
          "8" : `${Dash} ${Dash} ${Dash} ${Dot} ${Dot}`,
          // "9" : "_ _ _ _ .",
          "9" : `${Dash} ${Dash} ${Dash} ${Dash} ${Dot}`,
          // spell out "hash"
          "#" : `${Dot} ${Dot} ${Dot} ${Dot} ${Dot}${Dash} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot}`,
        }
      ];

// convert the response to morse code
  // get the response from twitter
  function twitterResponse() {
    // a placeholder. theResponse will be replaced by the return from bot.js
    // only call api when new query is sent from ui
    let theResponse = "cactus girls #summerartcamp #imaginestudios #cactus #create";
    // make sure we convert the response to lower case since morse doesnt care about case and our charCodes object uses lower case.
    theResponse = theResponse.toLowerCase();
    return theResponse;
  }

///
/// split the return into indivdual strings so we can map them to their corresponding morse code character in charCodes above.
///

// a function to convert the text dots and dashes to svgs
// should take the output from convertToMorse() as an argument and return the input text morse code as svgs in the shapes of dots or dashes.
function transformDotsDashes(theMorseText) {
  const dot = ".";
  const dash = "_";
  const svgDash = morseSVG.dashSVG;
  const svgDot = morseSVG.dotSVG;
  let incomingMorse = theMorseText;
  console.log("transformDotsDashes() is logging this: " + theMorseText);
  console.log(theMorseText);
  //console.log(dot, dash, svgDot, svgDash);
    // for (dot = 0; dot < theMorseText.length; dot++) {
    //   let theSVGDots = alphaMorse[0][theMorseText][dot];
    //   console.log(theSVGDots);
    // };
  //return svgDotsAndDashes;
  }

function convertToMorse(charactersToConvert, separator) {
  let characters = charactersToConvert.split(separator);
  //console.log("the string is: " + characters);

  for (c = 0; c < characters.length; c++) {
    if (characters[c] != " ") {
      //console.log("The phoentic glyph is: " + characters[c] + "\n " + "The Morse code is: " + alphaMorse[0][characters[c]]);
      let theFinalMorseText = alphaMorse[0][characters[c]];
      document.getElementById("morseOutput").innerHTML += theFinalMorseText;
      // let theFinalMorseSVG = transformDotsDashes(theFinalMorseText);
      // document.getElementById("morseOutputSVG").innerHTML += theFinalMorseSVG;
    }
  }
}

 // // invoke the convertToMorse() and pass it as a variable called tweets which is output of the twitterResponse() function.
  let tweets = twitterResponse();
  convertToMorse(tweets, "")

// Get User Input
    // get the user input from the input field
    let usersHash = document.getElementById("the-hash-input");
    const userButton = document.getElementById("hash-button");
    const resetButton = document.getElementById("reset-button");
    //resetButton.setAttribute("type", "reset");

    function resetInput() {
      if (usersHash.value != "") {
      usersHash.value = "";
    }
  }

    // capture the user's input
    function getHashTag() {
      let newHash = usersHash.value
      return newHash;
    };

    // function to remove white space after user input
    function cleanUpInput() {
      hashTag = getHashTag();
      // a simple regular expression to remove whitespace
      noSpaceHash = hashTag.replace(/\s/g, "");
      return noSpaceHash;
    };


    // a function to pass the input to bot.js
    function callTwitter() {
      let theTwitterHash = cleanUpInput();
      console.log("callTwitter() output: " + theTwitterHash);
      //return theTwitterHash
      // put the input (for now) from into the div below:
      let theOutput = document.getElementById("twitterReturn").innerHTML = theTwitterHash;
      }


//
// On button press, clean up the user input and request the last 25 tweets about said hashTag
//userButton.addEventListener("click", callTwitter);
//resetButton.addEventListener("click", resetInput);

  // play back the messages as morse
    // functionality

    // allow user to control speed of playback
    // contols to repeat / start at the beginning
    // allow all messages to be played concurrently
    // allow all messages to be played in serial
    // concurent playback is default

//

    }