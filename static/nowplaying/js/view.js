// http://addyosmani.github.io/backbone-fundamentals/#summary-2
// https://hidekiitakura.wordpress.com/2013/04/29/flask-rest-api-with-mongodb/
// http://blog.joelberghoff.com/2012/07/22/backbone-js-tutorial-part-1/
// http://stackoverflow.com/questions/5494306/initial-backbone-js-data-fetch?rq=1
// http://stackoverflow.com/questions/16195361/how-to-load-bootstrapped-models-of-backbone-in-django
// http://ozkatz.github.io/avoiding-common-backbonejs-pitfalls.html
// !!!! http://chilipepperdesign.com/2013/01/15/backbone-js-bind-callback-to-successful-model-fetch/

nowplayingView = Backbone.View.extend({  // view voor één enkele phone
   
    template: _.template( $( '#nowplayingTemplate' ).html() ),
    el: $('.nowplaying_body'),
    initialize: function () {
        _.bindAll(this, "render");
               
        //this.model.fetch({statusCode: {
        //    200: function() {
        //        console.log('200', arguments);
        //        }
        //}});
        this.model.fetch({success: this.render});
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    checkNowPlaying: function   ()  {
        	
        	this.model.fetch({success: this.render});
        	this.render();
        	if (myNowplayingModel.previous('nowplaying') != 'None')	{
        		myLastPlayedModel1 .set("nowplaying",myNowplayingModel.previous('nowplaying'));
        		myLastPlayedModel2 .set('nowplaying', myLastPlayedModel1.previous('nowplaying'));
        		myRewindCollectionView.render();
        	}
        	
  			
        	console.log('lastPlayed1: ' + myLastPlayedModel1.get('nowplaying'));
        	console.log('lastPlayed2: ' + myLastPlayedModel2.get('nowplaying'));
        
    },
});
lastPlayedView = Backbone.View.extend({  // view voor één enkele phone
   
    template: _.template( $( '#rewindTemplate' ).html() ),
    
    initialize: function () {
        
    },
    render: function() {
    	console.log('rendering lastPlayedView');
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    
});
rewindCollectionView = Backbone.View.extend({
        
    el: $('.rewind_body'), // bestaand element: <div id="test">
    //className: '.rewind',
    initialize: function() {
    	
    	//console.log('CollectionView initializing...');
    	myLastPlayedView1 = new lastPlayedView({model: this.collection.at(0)});
    	myLastPlayedView2 = new lastPlayedView({model: this.collection.at(1)});
  		this.render(); // ALTIJD () GEBRUIKEN, ANDERS not working
  		return this;
    },
    render: function() {
        console.log('rendering collection');
        for(var i = 0; i < this.collection.length; ++i) {
            console.log('renderng collection');
                        
            // lets add this book view to this list view
            this.$el.html(myLastPlayedView1.$el);
            this.$el.append(myLastPlayedView2.$el);
            
            myLastPlayedView1.render(); // lets render the book    
            myLastPlayedView2.render(); // lets render the book           
        } 
        return this;
    },
    
    
         
});

function showTicker()   {
	myNowplayingModel.fetch();
    //setTimeout(function(){myNowplayingModel.fetch();},30000);
    //setTimeout(function(){getTweet(2);},5000);
    //setTimeout(function(){getTweet(3);},10000);
}
function loopFade()	{

	setInterval(function(){$(".nowplaying_header").fadeToggle(3000, function(){$(".nowplaying_header").fadeToggle(3000);});},6000);
	setInterval(function(){$(".nowplaying_body").fadeToggle(3000, function(){$(".nowplaying_body").fadeToggle(3000);});},6000);
	
}
function loop() {

    //showTicker();
    //alert ('loopfade');
    $(".nowplaying_header").fadeToggle(3000);
    loopFade();
    setInterval(function(){showTicker();},30000);
    //setInterval(function(){loopFade();},6000);      

}
      
var myNowplayingModel = new nowplayingModel();
var myLastPlayedModel1 = new lastPlayedModel({'nowplaying': ''});
var myLastPlayedModel2 = new lastPlayedModel({'nowplaying': ''});
var myNowplayingView = new nowplayingView({model: myNowplayingModel});
var myRewindCollection = new rewindCollection();
myRewindCollection.add(myLastPlayedModel1);
myRewindCollection.add(myLastPlayedModel2);
var myRewindCollectionView = new rewindCollectionView({collection: myRewindCollection});
//var myRewindCollectionView = new rewindCollectionView();


//$('#addphone').click();

loop();

	


//console.log("Creating app.phonesView done!");

