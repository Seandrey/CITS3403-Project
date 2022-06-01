// Creating the collapsible sidebar for guesses

$(window).on('load', () => {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = "300px";
      }
    });
  };

  document.getElementById('rulebutton').click();

  // Initialising required constants
  const overlay_div = document.getElementById('overlay');
  const overlay_txt = document.getElementById('overlay-text');

  const share_div = document.getElementById('share');
  const share_txt = document.getElementById('share-text');

  const thanks_div = document.getElementById('thanks');
  const thanks_txt = document.getElementById('thanks-text');

  const button = document.getElementById('share-button');
  const web_button = document.getElementById('share-website');

  const outcome_div = document.getElementById('outcome');
  const outcome_txt = document.getElementById('outcome-text');

  const themes_div = document.getElementById('themes');
  const themes_txt = document.getElementById('themes-text');

  const stats_div = document.getElementById('stats');
  const stats_txt = document.getElementById('stats-text');

  const leaderboard_div = document.getElementById('leaderboard');
  const leaderboard_txt = document.getElementById('leaderboard-text');

  const base_theme = document.getElementById('base-theme');
  const light_theme = document.getElementById('light-theme');
  const cameron_theme = document.getElementById('cameron-theme');
  const maaz_theme = document.getElementById('maaz-theme');
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const joined = [month, day, year].join('-');

  // Code blocks to stop the div from disappearing when clicking in the text field, but to disappear when clicking outside the field.
  share_div.addEventListener("click", function() {
    $('#share').fadeOut(100);
  }, false);
  share_txt.addEventListener("click", function(ev) {
    ev.stopPropagation();
  }, false);

  $(overlay_div).click(function() {
    $('#overlay').fadeOut(100);
  });
  overlay_txt.addEventListener("click", function(ev) {
    ev.stopPropagation();
  }, false);

  $(thanks_div).click(function() {
    $('#thanks').fadeOut(100);
  });
  thanks_txt.addEventListener("click", function(ev) {
    ev.stopPropagation();
  }, false);

  outcome_div.addEventListener("click", function() {
    $('#outcome').fadeOut(100);
  }, false);

  outcome_txt.addEventListener("click", function(ev) {
    ev.stopPropagation();
  }, false);

  themes_div.addEventListener("click", function() {
    $('#themes').fadeOut(100);
  }, false);

  themes_txt.addEventListener("click", function(ev) {
    ev.stopPropagation();
  }, false);

  stats_div.addEventListener("click", function() {
    $('#stats').fadeOut(100);
  }, false);

  stats_txt.addEventListener("click", function(ev) {
    ev.stopPropagation();
  }, false);

  leaderboard_div.addEventListener("click", function() {
    $('#leaderboard').fadeOut(100);
  }, false);

  leaderboard_txt.addEventListener("click", function(ev) {
    ev.stopPropagation();
  }, false);

  const share_infotxt = document.getElementById('share-infotxt');
  const rules_infotxt = document.getElementById('rules-infotxt');
  const thanks_infotxt = document.getElementById('thanks-infotxt');

  const current_theme = document.getElementById('background');

  base_theme.addEventListener('click', function() {
    $("li").hover(function() {
      $(this).css('transition', 'background 0.1s');
      $(this).css("background", "rgb(39,39,39)");
      $(this).css("border-radius", "10px");
    }, function() {
      $(this).css("background", "rgb(39,39,39)");
    });
    $('#main-title').css('color', 'white');
    $('.title').css('color', 'white');
    $('.subtitle').css('color', 'white');
    $('.press-button').css('background-color', 'rgb(100, 100, 100)');
    $('.press-button').css('color', 'white');
    current_theme.className = base_theme.id;
    base_theme.innerHTML = 'Base Theme: Selected!';
    light_theme.innerHTML = 'Light Theme';
    maaz_theme.innerHTML = 'Maaz Theme';
    cameron_theme.innerHTML = 'Cameron Theme';
    thanks_txt.className = 'base';
    overlay_txt.className = 'base';
    leaderboard_txt.className = 'base';
    stats_txt.className = 'base';
    themes_txt.className = 'base';
    outcome_txt.className = 'base';
    share_txt.className = 'base';
    share_infotxt.className = 'info-text-base';
    rules_infotxt.className = 'info-text-base';
    thanks_infotxt.className = 'info-text-base';
  });

  light_theme.addEventListener('click', function() {
    $("li").hover(function() {
      $(this).css('transition', 'background 0.1s');
      $(this).css("background", "rgb(200,200,200)");
      $(this).css("border-radius", "10px");
    }, function() {
      $(this).css("background", "rgb(39,39,39)");
    });
    $('#main-title').css('color', 'grey');
    $('.title').css('color', 'grey');
    $('.subtitle').css('color', 'grey');
    $('.press-button').css('background-color', 'rgb(230, 230, 230)');
    $('.press-button').css('color', 'rgb(39,39,39)');
    current_theme.className = light_theme.id;
    base_theme.innerHTML = 'Base Theme';
    light_theme.innerHTML = 'Light Theme: Selected!';
    maaz_theme.innerHTML = 'Maaz Theme';
    cameron_theme.innerHTML = 'Cameron Theme';
    thanks_txt.className = 'light';
    overlay_txt.className = 'light';
    leaderboard_txt.className = 'light';
    stats_txt.className = 'light';
    themes_txt.className = 'light';
    outcome_txt.className = 'light';
    share_txt.className = 'light';
    share_infotxt.className = 'info-text-light';
    rules_infotxt.className = 'info-text-light';
    thanks_infotxt.className = 'info-text-light';
  });

  maaz_theme.addEventListener('click', function() {
    $("li").hover(function() {
      $(this).css('transition', 'background 0.1s');
      $(this).css("background", "rgb(1,130,40)");
      $(this).css("border-radius", "10px");
    }, function() {
      $(this).css("background", "rgb(39,39,39)");
    });
    $('#main-title').css('color', 'white');
    $('.title').css('color', 'white');
    $('.subtitle').css('color', 'white');
    $('.press-button').css('background-color', 'rgb(6, 170, 0)');
    $('.press-button').css('color', 'white');
    current_theme.className = maaz_theme.id;
    base_theme.innerHTML = 'Base Theme';
    light_theme.innerHTML = 'Light Theme';
    maaz_theme.innerHTML = 'Maaz Theme: Selected!';
    cameron_theme.innerHTML = 'Cameron Theme';
    thanks_txt.className = 'maaz';
    overlay_txt.className = 'maaz';
    leaderboard_txt.className = 'maaz';
    stats_txt.className = 'maaz';
    themes_txt.className = 'maaz';
    outcome_txt.className = 'maaz';
    share_txt.className = 'maaz';
    share_infotxt.className = 'info-text-maaz';
    rules_infotxt.className = 'info-text-maaz';
    thanks_infotxt.className = 'info-text-maaz';

  });

  cameron_theme.addEventListener('click', function() {
    $("li").hover(function() {
      $(this).css('transition', 'background 0.1s');
      $(this).css("background", "linear-gradient(47deg, rgba(238,0,255,1) 0%, rgba(126,0,255,1) 100%)");
      $(this).css("border-radius", "10px");
    }, function() {
      $(this).css("background", "rgb(39,39,39)");
    });
    $('#main-title').css('color', 'white');
    $('.title').css('color', 'white');
    $('.subtitle').css('color', 'white');
    $('.press-button').css('background-color', 'rgb(120, 0, 122)');
    $('.press-button').css('color', 'white');
    current_theme.className = cameron_theme.id;
    base_theme.innerHTML = 'Base Theme';
    light_theme.innerHTML = 'Light Theme';
    maaz_theme.innerHTML = 'Maaz Theme';
    cameron_theme.innerHTML = 'Cameron Theme: Selected!';
    thanks_txt.className = 'cameron';
    overlay_txt.className = 'cameron';
    leaderboard_txt.className = 'cameron';
    stats_txt.className = 'cameron';
    themes_txt.className = 'cameron';
    outcome_txt.className = 'cameron';
    share_txt.className = 'cameron';
    share_infotxt.className = 'info-text-cameron';
    rules_infotxt.className = 'info-text-cameron';
    thanks_infotxt.className = 'info-text-cameron';
  });


  // JS to add guesses to sidebar and to check for correct answer.
  guess = document.getElementById('guesstxt');

  var guess_copyandpaste = 'Play Pixel Perfect: A Game by Sean, Maaz, Pablo and Cameron: \n'

  let image = document.getElementsByClassName('test')[0]
  image.src = "static/images/" + joined + "/" + 1 + ".png"
  let guessHistory = ""

  $.ajax('/api/correctanswer', {
    type: 'get',
    async: false,
    contentType: 'application/json',
    success: function(data) {
      correct_answer = data.answer;
      correct_answer = correct_answer.toLowerCase()
      console.log(correct_answer);
    }
  })

  function submit() {
    var childs = document.getElementById('guess-content').lastChild;

    if (childs.className === 'correct-guess') {
      console.log('hahah you got it already chill')
      return NaN
    }


    let count = document.getElementById('guess-content').children.length + 1;
    if (count >= 6) {
      console.log('nice try!')
      onOutcome(false, count, correct_answer, guessHistory)
      return NaN
    }

    // Get input from user, clean it to a uniform format, and test for any common inputting errors.
    guesstxt = $(guess).val();
    guesstxt = guesstxt.toLowerCase();
    lettertest = guesstxt.trim();

    if (lettertest.length === 0) {
      console.log('bad guess')
        $('#error-div').css('visibility', 'visible')
        return (NaN)
    }
    guessHistory += guesstxt + ':'

    for (char in guesstxt) {
      let letter = guesstxt[char];
      let reg = /^[a-zA-Z\s]*$/;
      let hmm = reg.test(letter)
      if (hmm === false) {
        console.log('bad guess')
        $('#error-div').css('visibility', 'visible')
        return (NaN)
      }; 
      
    };
    let correctness;
    let payload = { guess: guesstxt, correctanswer: correct_answer }
    $.ajax('/api/guessattempt', {
      type: 'POST',
      async: false,
      data: JSON.stringify(payload),
      contentType: 'application/json',
      dataType: 'json',
      success: function(data) {
        correctness = data
      }
    });
    console.log(correctness.correct);
    $('#error-div').css('visibility', 'hidden');
    guess_correct = Boolean(correctness.correct == 'correct');
    console.log(guess_correct);
    if (guess_correct) {
      guess_copyandpaste = guess_copyandpaste + 'GUESS ' + String(count) + ': CORRECT! 😁' + '\n'
      guess_copyandpaste = guess_copyandpaste + String(window.location.href)
      onOutcome(true, count, correct_answer, guessHistory)
    }
    else if (guess_correct == false && count < 5) {
      guess_copyandpaste = guess_copyandpaste + 'GUESS ' + String(count) + ': INCORRECT 😭' + '\n';

      image.src = 'static/images/' + joined + '/' + (count + 1) + '.png';
    }
    else {
      guess_copyandpaste = guess_copyandpaste + 'GUESS ' + String(count) + ': INCORRECT 😭' + '\n';
      guess_copyandpaste = guess_copyandpaste + String(window.location.href);
      onOutcome(false, count, correct_answer, guessHistory);
    };

    if (guess_correct) {
      $("<div style = 'transition: display 0.1s; 'class = 'correct-guess'><p id = 'correct_guess' class = 'guess' style = 'color: green;'>" + 'GUESS ' + String(count) + ': ' + guesstxt + "</p></div>").hide().appendTo('#guess-content').fadeIn(100)
      $(guess).val('')
    } else {
      $("<div style = 'transition: display 0.1s; 'class = 'guess" + String(count) + "' ><p id = 'incorrect_guess' class = 'guess'>" + 'GUESS ' + String(count) + ': ' + guesstxt + "</p></div>").hide().appendTo('#guess-content').fadeIn(100)
      $(guess).val('')
    }
  };


  guess.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      submit();
    };
  })
  let submitKey = document.getElementsByClassName('longerKeyboardKey')[0];
  submitKey.onclick = submit;



  // When the share button is clicked, copy the share text to clipboard.
  button.addEventListener('click', function() {
    document.getElementById("share-button").innerHTML = "Copied to Clipboard!";
    navigator.clipboard.writeText(guess_copyandpaste)
  });

  web_button.addEventListener('click', function() {
    web_button.innerHTML = 'Copied to Clipboard!';
    navigator.clipboard.writeText(window.location.href);
  });

});

// Function to turn on the overlays when buttons at the top are clicked (Or when the user runs out of guesses/gets the correct answer.)
function onRules() {
  document.getElementById("overlay").className = 'fade-in';
  document.getElementById("overlay").style.display = "block";
}

function onShare() {
  document.getElementById("share").className = 'fade-in';
  document.getElementById("share").style.display = "block";
}

function onThanks() {
  document.getElementById("thanks").className = 'fade-in';
  document.getElementById("thanks").style.display = "block";
}

function onOutcome(bool, count, correct_answer, guessHistory) {
  document.getElementById("outcome").className = 'fade-in';
  document.getElementById("outcome").style.display = "block";
  let payload = { answer_history: guessHistory, count: count }
  $.ajax('/api/storestats', {
    type: 'POST',
    async: false,
    data: JSON.stringify(payload),
    contentType: 'application/json',
    dataType: 'json'
  })
  if (bool == true) {
    document.getElementById('outcome-title').innerHTML = 'You Win!';
    document.getElementById('guess-count').innerHTML = count
  } else {
    document.getElementById('outcome-title').innerHTML = 'You Lose!'
    document.getElementById('outcome-eval').innerHTML = 'The correct answer was ' + correct_answer + '.';

  };
}

function onThemes() {
  document.getElementById("themes").className = 'fade-in';
  document.getElementById("themes").style.display = "block";
}

function onStats() {
  let currStreak = document.getElementById('current_streak');
  let bestStreak = document.getElementById('best_streak');
  let breakdown = document.getElementById('guess_breakdown');
  let apiStreak;
  let payload = {};
  $.ajax('/api/getUserStats', {
    type: 'GET',
    async: false,
    data: JSON.stringify(payload),
    contentType: 'application/json',
    dataType: 'json',
    success: function(data) {
      apiStreak = data
    }
  });
  currStreak.innerHTML = apiStreak['currStreak'];
  bestStreak.innerHTML = apiStreak['highestStreak'];
  let append
  for (let i = 1; i < 6; i++) {
    append = i + " Guesses" + ":" + apiStreak[i] + " ";
    breakdown.innerHTML += append;
  }
  document.getElementById("stats").className = 'fade-in';
  document.getElementById("stats").style.display = "block";
}

function onLeaderboard() {
  document.getElementById("leaderboard").className = 'fade-in';
  document.getElementById("leaderboard").style.display = "block";
}

// Code to create countdown timer for each new day - Will add functionality of updating fields in the future.
// Provided by W3 Schools Countdown Timer Tutorial.
var tomorrow = new Date()

// add 1 day to today
tomorrow.setDate(new Date().getDate() + 1)
tomorrow.setHours(0, 0, 0)
console.log(tomorrow)

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  now = new Date()

  // Find the distance between now and the count down date
  var distance = tomorrow - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED - Please refresh the page.";
    // Add code here to update the answer after the countdown finishes.
  }
}, 1000);
