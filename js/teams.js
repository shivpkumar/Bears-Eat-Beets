$(document).ready(function(){
  var teamsRef = new Firebase('https://bearseatbeets.firebaseio.com/teams');

  $(".team").click(function(){
    $('.team').removeClass('selection');
    $(this).toggleClass('selection');
  });

  $('#button').click(function() {
    var $selection = $('.selection');

    if ($selection.length == 1) {
      teamsRef.push({name: $selection.attr('id')});
    } else {
      alert('No team selected.');
    }
  });

  teamsRef.on('child_added', function(data) {
    var $selected = $('#' + data.val().name);
    $selected.addClass('selected');
  });
});