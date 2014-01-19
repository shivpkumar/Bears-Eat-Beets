$(document).ready(function(){
  var teamsRef = new Firebase('https://bearseatbeets.firebaseio.com/teams');
  var shivTeamsRef = new Firebase('https://bearseatbeets.firebaseio.com/users/shiv/teams');

  $(".team").click(function(){
    $('.team').removeClass('selection');
    $(this).toggleClass('selection');
  });

  $('#button').click(function() {
    var $selection = $('.selection');

    if ($selection.length == 1) {
      var teamName = $selection.attr('id');
      teamsRef.push({name: teamName}, addToUserTeam(teamName));
    } else {
      alert('No team selected.');
    }
  });

  teamsRef.on('child_added', function(data) {
    var $selected = $('#' + data.val().name);
    $selected.addClass('selected');
  });

  var addToUserTeam = function(teamName) {
    shivTeamsRef.child(teamName).set(true);
  };
});

WebFontConfig = {
    google: { families: [ 'Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700:latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})(); 


