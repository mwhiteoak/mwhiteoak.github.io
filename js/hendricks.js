// generates paragraphs
generate = function() {
  var output = '';
  var quantity = parseInt($('#quantity').val());

  for(var i = 0; i < quantity; i++) {
    var paragraph = '<p>'
    while (paragraph.length <= maxParagraphLength()) {
      var index = Math.floor(Math.random() * mvp.length);
      paragraph += (' ' + mvp[index]);
    };

    paragraph += '</p>';
    output += paragraph;
  }

  $('#output').html(output);
}

// generates randomized paragraph max length
maxParagraphLength = function() {
  var baseLength = 400;
  var threshold = 0.5;
  var randomizedLength = parseInt(Math.random() * threshold * baseLength) + baseLength;
  return randomizedLength;
}

// page load
document.addEventListener('DOMContentLoaded', function() {
  generate();
}, false)

// on select change
function changeEventHandler(event) {
  generate();
}


// mvp
var mvp = [
  'Helping humanity thrive.',
  'Inferior products win out all the time.',
  'If you keep screaming your name, it forces the assailant to acknowledge you as human.',
  'technolo-Jeeeesus.',
  'We may be fine. We may be totally fine. We also may be totally fucked.',
  'Did you just take a sip from an empty cup?.',
  'You just disappeared up your own asshole.',
  'Mean jerk time.',
  'You just brought piss to a sh*t fight!.',
  'Ship products, not yourself.',

];
