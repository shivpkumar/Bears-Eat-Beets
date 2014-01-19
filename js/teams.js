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