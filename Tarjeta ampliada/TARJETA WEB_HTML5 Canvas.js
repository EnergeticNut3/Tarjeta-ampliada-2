(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"TARJETA WEB_HTML5 Canvas_atlas_1", frames: [[1186,0,180,230],[0,0,591,1004],[593,0,591,1004]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["TARJETA WEB_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1_20230221_222032_0000 = function() {
	this.initialize(ss["TARJETA WEB_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2_20230221_222032_0001 = function() {
	this.initialize(ss["TARJETA WEB_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiMCMQg6g6AAhSQAAhRA6g7IAGgEQA5g1BNgBQBOABA5A1IAFAEQA6A7AABRQAABSg6A6Qg6A6hSAAQhRAAg7g6g");
	this.shape.setTransform(19.85,19.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.7,39.7);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.2502,0.2502);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,57.6);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_1 = new lib.Símbolo1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(2.5,9.4,1,1,0,0,0,22.5,38.2);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.button_5 = new lib.Símbolo5();
	this.button_5.name = "button_5";
	this.button_5.setTransform(-5.1,0.1,1,1,0,0,0,19.9,19.9);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_5},{t:this.button_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(-25,-28.8,50.1,57.6), null);


(lib.Símbolo9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.movieClip_6 = new lib.Símbolo7();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.setTransform(50.35,56.6,1.9987,1.9592,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,112.8);


// stage content:
(lib.TARJETAWEB_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,11,12,23];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.movieClip_6.on('click', function(){
		/*
		Inicie la animación completa.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
		createjs.Ticker.addEventListener('tick', stage);
		});
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Detenga la animación completa.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
	}
	this.frame_12 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.button_8.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(1);
		});
	}
	this.frame_23 = function() {
		var _this = this;
		/*
		Detenga la animación completa.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1).call(this.frame_12).wait(11).call(this.frame_23).wait(1));

	// P_DELANTERA
	this.instance = new lib._1_20230221_222032_0000();
	this.instance.setTransform(0,0,0.3384,0.3383);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},12).wait(12));

	// P_TRASERA
	this.instance_1 = new lib._2_20230221_222032_0001();
	this.instance_1.setTransform(0,0,0.3384,0.3383);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(12));

	// BOTONES
	this.movieClip_6 = new lib.Símbolo7();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.setTransform(250.4,170.2,1.9987,1.9592,0,0,0,0.2,0.1);

	this.button_8 = new lib.Símbolo9();
	this.button_8.name = "button_8";
	this.button_8.setTransform(250.05,170,1,1,0,0,0,50,56.4);
	new cjs.ButtonHelper(this.button_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_6}]}).to({state:[{t:this.button_8}]},12).wait(12));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(154,179,146.10000000000002,160.7);
// library properties:
lib.properties = {
	id: 'DDD5EC58C2E32C49A4751DAD664C3FBE',
	width: 308,
	height: 358,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/TARJETA WEB_HTML5 Canvas_atlas_1.png", id:"TARJETA WEB_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DDD5EC58C2E32C49A4751DAD664C3FBE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;