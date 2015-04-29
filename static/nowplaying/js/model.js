

nowplayingModel = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    nowplaying: ''
  },
  urlRoot: '/getNowplaying',
  initialize: function () {
        this.on('change', this.changeHandler);
        this.on("invalid", function (model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    changeHandler : function(event){
        console.log('Model have been changed:', this.toJSON());
        myNowplayingView.checkNowPlaying();
    },
});

lastPlayedModel = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    nowplaying: ''
  },
  initialize: function () {
        //this.bind('change', this.changeHandler);
        
        this.on("invalid", function (model, error) {
            console.log("Houston, we have a problem: " + error)
        });
        console.log('->lastPlayedModel created!');
  },
});
rewindCollection =  Backbone.Collection.extend({
  model: lastPlayedModel
});




