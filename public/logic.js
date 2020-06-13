var v = ["parik.jpg", "aka.jpg", "nori.jpg", "peste.jpg", "panda.jpg", "parik.jpg", "aka.jpg", "nori.jpg", "peste.jpg", "panda.jpg"], contor = 0, last = null, delay = false;
var success = "success.wav";
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function PlaySound(sound)
  {
    var audio = new Audio();
    audio.src = sound;
    audio.play();
  }

  shuffle(v);
  $( "img" ).each(function() {
      $(this).attr("src",v[contor]);
      $(this).hide();
      ++contor;
  });

  $( "td" ).click(function() {
    if ($(this).children().css('display') == 'none' && delay == false)
    {
        $(this).children().show();
        if (last == null)
        {
            last = this;
        }
        else
        {
            if ($(this).children().attr("src") !=  $(last).children().attr("src"))
            {
                delay = true;
                var element = this;
                setTimeout(function(){
                    $(element).children().hide();
                    $(last).children().hide();
                    delay = false;
                    last = null;
                }, 1000);
            }
            else
            {
                PlaySound(success);
                last = null;
            }
        }
    }
  });