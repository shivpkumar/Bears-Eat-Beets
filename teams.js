var teamsRef = new Firebase('https://bearseatbeets.firebaseio.com/teams');

$('#button').click(function() {
  var $selection = $('.selection');

  if ($selection) {
    teamsRef.set({name: $selection.val});
  } else {
    alert('No team selected.');
  }
});

teamsRef.on('child_added', function(snapshot) {
  var $selected = $('#' + snapshot.name);
  $selected.addClass('selected');
});