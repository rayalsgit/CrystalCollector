document.addEventListener('DOMContentLoaded', function() {

    // use random number ranges as specified in instructions
    var gameMin = 19;
    var gameMax = 120;
    var gemMin = 1;
    var gemMax = 12;

    // object to store game details    
    var game = {
        // game variables
        wins: 0,
        losses: 0,
        totalScore: 0,
        curTargetVal: Math.floor(Math.random() * (gameMax - gameMin)) + gameMin,
        ruby: Math.floor(Math.random() * (gemMax - gemMin)) + gemMin,
        sapphire: Math.floor(Math.random() * (gemMax - gemMin)) + gemMin,
        topaz: Math.floor(Math.random() * (gemMax - gemMin)) + gemMin,
        emerald: Math.floor(Math.random() * (gemMax - gemMin)) + gemMin,

        // reset the game object
        reset: function() {
            this.wins = 0;
            this.losses = 0;
            this.totalScore = 0;
            this.curTargetVal = Math.floor(Math.random() * (gameMax - gameMin)) + gameMin;
            this.ruby = Math.floor(Math.random() * (gemMax - gemMin)) + gemMin;
            this.sapphire = Math.floor(Math.random() * (gemMax - gemMin)) + gemMin;
            this.topaz = Math.floor(Math.random() * (gemMax - gemMin)) + gemMin;
            this.emerald = Math.floor(Math.random() * (gemMax - gemMin)) + gemMin;
        }

    };

    // initialize the UI fields
    function init() {

        $("#target").text(game.curTargetVal);
        $("#total").text(game.totalScore);

        // assign random nums per each gem 
        $("#ruby").attr("data-points", game.ruby);
        $("#sapphire").attr("data-points", game.sapphire);
        $("#topaz").attr("data-points", game.topaz);
        $("#emerald").attr("data-points", game.emerald);

    };

    // handle for click event on gem image
    function gemclick() {
        // get points for the clicked gem from data-attribute
        var points = parseInt($(this).attr("data-points"));
        // increment total score
        game.totalScore += points;
        // if score crossed threshold its a loss
        if (game.totalScore > game.curTargetVal) {
            // increment losses count
            game.losses++;
            // show losses on UI
            $("#loss").text("Losses: " + game.losses);
            $("#msg").text("You lose!");
            // start a new game
            game.reset();
            init();
        } else if (game.totalScore === game.curTargetVal) // score meets target, its a win
        {
            // increment wins count
            game.wins++;
            // show wins on UI
            $("#msg").text("You win!!");
            $("#win").text("Wins: " + game.wins);
            // start a new game
            game.reset();
            init();
        } else // keep adding points per click     
            $("#total").text(game.totalScore);
    };

    // register click event per gem image
    $(".gem").on("click", gemclick);

    // start game on page load
    init();

});
