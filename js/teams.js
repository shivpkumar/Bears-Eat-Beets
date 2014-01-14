$(document).ready(function(){
  var teamsRef = new Firebase('https://bearseatbeets.firebaseio.com/teams');

  $('#button').click(function() {
    var $selection = $('.selection');

    if ($selection.length == 1) {
      teamsRef.set({name: $selection.attr('id')});
    } else {
      alert('No team selected.');
    }
  });

  teamsRef.on('child_added', function(data) {
    var $selected = $('#' + data.val());
    $selected.addClass('selected');
  });
});