///
/// twitterMorse.js
///
const homePage = document.querySelector('.home-page');

if (homePage != null) {
  const morseSVG = {
    dotSVG: `<svg class="dot" viewBox="0 0 107.66667 107.66667">
        <title>dot</title>
        <circle cx="53.83333" cy="53.83333" r="53.83333" />
      </svg>`,
    dashSVG: `<svg class="dash" viewBox="0 0 200 108.48468">
        <title>dash</title>
        <rect width="200" height="108.48468" rx="54.24229" ry="54.24229" />
      </svg>`,
  };

  const Dash = morseSVG.dashSVG;
  const Dot = morseSVG.dotSVG;
  const alphaMorse = [
    {
      //"a" : ". _",
      a: `${Dot}${Dash}`,
      //"b" : "_ . . .",
      b: `${Dash}${Dot}${Dot}${Dot}`,
      //"c" : "_ . _ .",
      c: `${Dash}${Dot}${Dash}${Dot}`,
      //"d" : "_ . .",
      d: `${Dash} ${Dot} ${Dot}`,
      //"e" : ".",
      e: `${Dot}`,
      //"f" : ". . _ .",
      f: `${Dot} ${Dot} ${Dash} ${Dot}`,
      //"g" : "_ _ .",
      g: `${Dash} ${Dash} ${Dot}`,
      //"h" : ". . . .",
      h: `${Dot} ${Dot} ${Dot} ${Dot}`,
      // "i" : ". .",
      i: `${Dot} ${Dot}`,
      // "j" : ". _ _ _",
      j: `${Dot} ${Dash} ${Dash} ${Dash}`,
      // "k" : "_ . _",
      k: `${Dash} ${Dot} ${Dash}`,
      //"l" : ". _ . .",
      l: `${Dot} ${Dash} ${Dot} ${Dot}`,
      // "m" : "_ _",
      m: `${Dash} ${Dash}`,
      // "n"
      n: `${Dash} ${Dot}`,
      //"o" : "_ _ _",
      o: `${Dash} ${Dash} ${Dash}`,
      //"p" : ". _ _ .",
      p: `${Dot} ${Dash} ${Dash} ${Dot}`,
      //"q" : "_ _ . _",
      q: `${Dash} ${Dash} ${Dot} ${Dash}`,
      // "r" : ". _ .",
      r: `${Dot} ${Dash} ${Dot}`,
      //"s" : ". . .",
      s: `${Dot} ${Dot} ${Dot}`,
      //"t" : "_",
      t: `${Dash}`,
      // "u" : ". . _",
      u: `${Dot} ${Dot} ${Dash}`,
      // "v" : ". . . _",
      v: `${Dot} ${Dot} ${Dot} ${Dash}`,
      //"w" : ". _ _",
      w: `${Dot}${Dash}${Dash}`,
      // "x" : "_ . . _",
      x: `${Dash} ${Dot} ${Dot} ${Dash}`,
      // "y" : "_ . _ _",
      y: `${Dash} ${Dot} ${Dash} ${Dash}`,
      // "z" : "_ _ . .",
      z: `${Dash} ${Dash} ${Dot} ${Dot}`,
      // "0" : "_ _ _ _ _",
      '0': `${Dash} ${Dash} ${Dash} ${Dash} ${Dash}`,
      // "1" : ". _ _ _ _",
      '1': `${Dot} ${Dash} ${Dash} ${Dash} ${Dash}`,
      // "2" : ". . _ _ _",
      '2': `${Dot} ${Dot} ${Dash} ${Dash} ${Dash}`,
      // "3" : ". . . _ _",
      '3': `${Dot} ${Dot} ${Dot} ${Dash} ${Dash}`,
      // "4" : ". . . . _",
      '4': `${Dot} ${Dot} ${Dot} ${Dot} ${Dash}`,
      // "5" : ". . . . ",
      '5': `${Dot} ${Dot} ${Dot} ${Dot} `,
      // "6" : "_ . . . .",
      '6': `${Dash} ${Dot} ${Dot} ${Dot} ${Dot}`,
      // "7" : "_ _ . . .",
      '7': `${Dash} ${Dash} ${Dot} ${Dot} ${Dot}`,
      // "8" : "_ _ _ . .",
      '8': `${Dash} ${Dash} ${Dash} ${Dot} ${Dot}`,
      // "9" : "_ _ _ _ .",
      '9': `${Dash} ${Dash} ${Dash} ${Dash} ${Dot}`,
      // spell out "hash"
      '#': `${Dot} ${Dot} ${Dot} ${Dot} ${Dot}${Dash} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot} ${Dot}`,
    },
  ];

  // convert the response to morse code
  // get the response from twitter
  function twitterResponse() {
    // a placeholder. theResponse will be replaced by the return from bot.js
    // only call api when new query is sent from ui
    let theResponse = 'cactus';
    // make sure we convert the response to lower case since morse doesn't care about case and our charCodes object uses lower case.
    theResponse = theResponse.toLowerCase();
    return theResponse;
  }

  ///
  /// split the return into individual strings so we can map them to their corresponding morse code character in charCodes above.
  ///

  // a function to convert the text dots and dashes to svgs
  // should take the output from convertToMorse() as an argument and return the input text morse code as svgs in the shapes of dots or dashes.
  function transformDotsDashes(theMorseText) {
    const dot = '.';
    const dash = '_';
    const svgDash = morseSVG.dashSVG;
    const svgDot = morseSVG.dotSVG;
    let incomingMorse = theMorseText;
    console.log('transformDotsDashes() is logging this: ' + theMorseText);
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
      if (characters[c] != ' ') {
        //console.log("The phoentic glyph is: " + characters[c] + "\n " + "The Morse code is: " + alphaMorse[0][characters[c]]);
        let theFinalMorseText = alphaMorse[0][characters[c]];
        document.getElementById('morseOutput').innerHTML += theFinalMorseText;
        // let theFinalMorseSVG = transformDotsDashes(theFinalMorseText);
        // document.getElementById("morseOutputSVG").innerHTML += theFinalMorseSVG;
      }
    }
  }

  // // invoke the convertToMorse() and pass it as a variable called tweets which is output of the twitterResponse() function.
  let tweets = twitterResponse();
  convertToMorse(tweets, '');

  // Get User Input
  // get the user input from the input field
  let usersHash = document.getElementById('the-hash-input');
  const userButton = document.getElementById('hash-button');
  const resetButton = document.getElementById('reset-button');
  //resetButton.setAttribute("type", "reset");

  function resetInput() {
    if (usersHash.value != '') {
      usersHash.value = '';
    }
  }

  // capture the user's input
  function getHashTag() {
    let newHash = usersHash.value;
    return newHash;
  }

  // function to remove white space after user input
  function cleanUpInput() {
    hashTag = getHashTag();
    // a simple regular expression to remove whitespace
    noSpaceHash = hashTag.replace(/\s/g, '');
    return noSpaceHash;
  }

  // a function to pass the input to bot.js
  function callTwitter() {
    let theTwitterHash = cleanUpInput();
    console.log('callTwitter() output: ' + theTwitterHash);
    //return theTwitterHash
    // put the input (for now) from into the div below:
    let theOutput = (document.getElementById(
      'twitterReturn',
    ).innerHTML = theTwitterHash);
  }

  //
  // On button press, clean up the user input and request the last 25 tweets about said hashTag
  //userButton.addEventListener("click", callTwitter);
  //resetButton.addEventListener("click", resetInput);

  // play back the messages as morse
  // functionality

  // allow user to control speed of playback
  // controls to repeat / start at the beginning
  // allow all messages to be played concurrently
  // allow all messages to be played in serial
  // concurrent playback is default

  //
}
