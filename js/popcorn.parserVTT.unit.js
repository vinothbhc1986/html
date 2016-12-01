asyncTest( "Popcorn 1.0 WebSRT/VTT Parser Plugin", function () {

  var count = 0,
      numSubs = 0,
      sub,
      poppercorn = Popcorn( "#video" ),
      expectedSubs = [
        
      ],
      expects = expectedSubs.length * 4 + 1;

  function plus() {
    if ( ++count === expects ) {
      start();
    }
  }

  poppercorn.parseVTT( "data/unit.vtt", function(){

    Popcorn.forEach( poppercorn.getTrackEvents(), function( evt ) {
      if( evt._natives.type === "subtitle" ) {
        sub = expectedSubs[ numSubs++ ];
      }
    });

    equal( expectedSubs.length, numSubs, "Parsed all subtitles" );
    plus();

  });

  expect( expects );

});
