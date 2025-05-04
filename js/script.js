// jquery/jq start here
// 00
// $(document).ready(function () {});
// jquery/jq start here
$(function (){
    // 01 draggable
    $("#draggable").draggable();
  
    // 02 drag&drop
    $( "#drab3" ).draggable();
    $( "#drpab3" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // 03
    $( "#resizable" ).resizable({
      animate: true
    });
    // 04
    $("#selectable").selectable();
    // 05
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
    // 06
    $( "#accordion" ).accordion({
      collapsible: true
    });
    // 07
  var srcTag = [
      "HTML",
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#c_topic" ).autocomplete({
      source: srcTag
    });
    // 08
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
    
    $( "#datepicker1" ).datepicker({
      showWeek: true,
      firstDay: 1
    });
    // 09
    $( "#speed" ).selectmenu();
    $( "#files" ).selectmenu();
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
      .addClass( "overflow" );
    $("#salutation").selectmenu();
  
    // 10
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
  });