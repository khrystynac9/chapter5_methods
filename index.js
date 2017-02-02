var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert("Zoom - zoom");
        } else {
            alert("You need to start engine first");
        }
    },
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();


var song = {
    name: 'walk this way',
    artist: "shakira",
    minutes: 4,
    playing: false,
    
    play: function() {
        if (!this.playing) {
            this.playing = true;
            console.log("playing " + this.name + "by " + this.artist);
        }
    },
    
    pause: function() {
        if (this.playing) {
            this.playing = false;
        }
    }
};

song.play();
song.pause();



var eightBall = { index: 0,
                  advice: ["yes", "no", "maybe", "not a chance"],
                  shake: function() {
                      this.index = this.index + 1;
                      if (this.index >= this.advice.length) {
                          this.index = 0;
                      }
                  },
                  look: function() {
                      return this.advice[this.index];
                  }
};
eightBall.shake();
console.log(eightBall.look());


