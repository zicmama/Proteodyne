if("undefined"===typeof MIDI)var MIDI={};
(function(){var a={},b=function(b){var f=new Audio,d=b.split(";")[0];f.id="audio";f.setAttribute("preload","auto");f.setAttribute("audiobuffer",!0);f.addEventListener("canplaythrough",function(){a[d]=!0},!1);f.src="data:"+b;document.body.appendChild(f)};MIDI.audioDetect=function(c){if("undefined"===typeof Audio)return c({});var f=new Audio;if("undefined"===typeof f.canPlayType)return c(a);var d=f.canPlayType('audio/ogg; codecs="vorbis"'),d="probably"===d||"maybe"===d,f=f.canPlayType("audio/mpeg"),
f="probably"===f||"maybe"===f;if(!d&&!f)c(a);else{d&&b("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=");
f&&b("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");var g=(new Date).getTime(),h=window.setInterval(function(){for(var b in a);var d=5E3<(new Date).getTime()-g;if(b||d)window.clearInterval(h),c(a)},1)}}})();"undefined"===typeof MIDI&&(MIDI={});"undefined"===typeof MIDI.Soundfont&&(MIDI.Soundfont={});
(function(){MIDI.loadPlugin=function(c){"function"===typeof c&&(c={callback:c});var d=c.instruments||c.instrument||"acoustic_grand_piano";"object"!==typeof d&&(d=[d]);d.map(function(a){"number"===typeof a&&(a=MIDI.GeneralMIDI.byId[a]);return a});MIDI.soundfontUrl=c.soundfontUrl||MIDI.soundfontUrl||"./soundfont/";MIDI.audioDetect(function(g){var h="";"undefined"===typeof h&&(h=b[window.location.hash]?window.location.hash.substr(1):"");""===h&&(h=navigator.requestMIDIAccess?"webmidi":window.webkitAudioContext?
"webaudio":window.Audio?"audiotag":"flash");if(a[h])a[h](g["audio/ogg"]?"ogg":"mp3",d,c.callback)})};var a={webmidi:function(a,b,c){MIDI.loader&&MIDI.loader.message("Web MIDI API...");MIDI.WebMIDI.connect(c)},flash:function(a,b,c){MIDI.loader&&MIDI.loader.message("Flash API...");DOMLoader.script.add({src:"./inc/SoundManager2/script/soundmanager2.js",verify:"SoundManager",callback:function(){MIDI.Flash.connect(c)}})},audiotag:function(a,b,g){MIDI.loader&&MIDI.loader.message("HTML5 Audio API...");var h=
c({items:b,getNext:function(b){DOMLoader.script.add({src:MIDI.soundfontUrl+b+"-"+a+".js",verify:"MIDI.Soundfont."+b,callback:function(){MIDI.loader&&MIDI.loader.update(null,"Downloading...",100);h.getNext()}})},onComplete:function(){MIDI.AudioTag.connect(g)}})},webaudio:function(a,b,g){MIDI.loader&&MIDI.loader.message("Web Audio API...");var h=c({items:b,getNext:function(b){DOMLoader.script.add({src:MIDI.soundfontUrl+b+"-"+a+".js",verify:"MIDI.Soundfont."+b,callback:function(){MIDI.loader&&MIDI.loader.update(null,
"Downloading...",100);h.getNext()}})},onComplete:function(){MIDI.WebAudioAPI.connect(g)}})}},b={"#webmidi":!0,"#webaudio":!0,"#audiotag":!0,"#flash":!0},c=function(a){var b={queue:[]},c;for(c in a.items)b.queue.push(a.items[c]);b.getNext=function(){if(!b.queue.length)return a.onComplete();a.getNext(b.queue.shift())};setTimeout(b.getNext,1);return b}})();"undefined"===typeof MIDI&&(MIDI={});"undefined"===typeof MIDI.Player&&(MIDI.Player={});
(function(){var a=MIDI.Player;a.callback=void 0;a.currentTime=0;a.endTime=0;a.restart=0;a.playing=!1;a.timeWarp=1;a.start=a.resume=function(){-1>a.currentTime&&(a.currentTime=-1);i(a.currentTime)};a.pause=function(){var b=a.restart;e();a.restart=b};a.stop=function(){e();a.restart=0;a.currentTime=0};a.addListener=function(a){g=a};a.removeListener=function(){g=void 0};a.clearAnimation=function(){a.interval&&window.clearInterval(a.interval)};a.setAnimation=function(b){var c="function"===typeof b?b:b.callback,
b=b.interval||30,e=0,g=0,f=0;a.clearAnimation();a.interval=window.setInterval(function(){if(0!==a.endTime){a.playing?(e=f===a.currentTime?g-(new Date).getTime():0,e=0===a.currentTime?0:a.currentTime-e,f!==a.currentTime&&(g=(new Date).getTime(),f=a.currentTime)):e=a.currentTime;var b=e/1E3,l=b/60,b=60*l+(b-60*l),l=a.endTime/1E3;-1>l-b||c({now:b,end:l,events:d})}},b)};a.loadMidiFile=function(){a.replayer=new Replayer(MidiFile(a.currentData),a.timeWarp);a.data=a.replayer.getData();a.endTime=j()};a.loadFile=
function(b,c){a.stop();if(-1!==b.indexOf("base64,")){var e=window.atob(b.split(",")[1]);a.currentData=e;a.loadMidiFile();c&&c(e)}else e=b.split(" - ")[1]||b,document.getElementById("playback-title").innerHTML=e.replace(".mid",""),e=new XMLHttpRequest,e.open("GET",b),e.overrideMimeType("text/plain; charset=x-user-defined"),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){for(var b=this.responseText||"",e=[],d=b.length,l=String.fromCharCode,g=0;g<d;g++)e[g]=l(b.charCodeAt(g)&
255);b=e.join("");a.currentData=b;a.loadMidiFile();c&&c(b)}},e.send()};var b=[],c,f=0,d={},g=void 0,h=function(b,e,f,h,j,k){return window.setTimeout(function(){var h={channel:b,note:e,now:f,end:a.endTime,message:j,velocity:k};128===j?delete d[e]:d[e]=h;g&&g(h);a.currentTime=f;a.currentTime===c&&c<a.endTime&&i(c,!0)},f-h)},k=function(){if("WebAudioAPI"===MIDI.lang)return MIDI.Player.ctx;a.ctx||(a.ctx={currentTime:0});return a.ctx},j=function(){for(var b=a.data,c=b.length,e=0.5,d=0;d<c;d++)e+=b[d][1];
return e},i=function(d,g){if(a.replayer){g||("undefined"===typeof d&&(d=a.restart),a.playing&&e(),a.playing=!0,a.data=a.replayer.getData(),a.endTime=j());var i,r=0,v=0,m=a.data,w=k(),p=m.length;c=0.5;f=w.currentTime;for(var s=0;s<p&&100>v;s++)if(c+=m[s][1],c<d)r=c;else{var d=c-r,n=m[s][0].event;if("channel"===n.type){var q=n.channel;switch(n.subtype){case "noteOn":if(MIDI.channels[q].mute)break;i=n.noteNumber-(a.MIDIOffset||0);b.push({event:n,source:MIDI.noteOn(q,n.noteNumber,n.velocity,d/1E3+w.currentTime),
interval:h(q,i,c,r,144,n.velocity)});v++;break;case "noteOff":if(MIDI.channels[q].mute)break;i=n.noteNumber-(a.MIDIOffset||0);b.push({event:n,source:MIDI.noteOff(q,n.noteNumber,d/1E3+w.currentTime),interval:h(q,i,c,r,128)})}}}}},e=function(){var c=k();a.playing=!1;for(a.restart+=1E3*(c.currentTime-f);b.length;)c=b.pop(),window.clearInterval(c.interval),c.source&&("number"===typeof c.source?window.clearTimeout(c.source):(c=c.source,c.disconnect(0),c.noteOff(0)));for(var e in d)c=d[e],144===d[e].message&&
g&&g({channel:c.channel,note:c.note,now:c.now,end:c.end,message:128,velocity:c.velocity});d={}}})();"undefined"===typeof MIDI&&(MIDI={});
(function(){var a=null,b=null,c=MIDI.WebMIDI={};c.setVolume=function(a,c){b.send([176+a,7,c])};c.programChange=function(a,c){b.send([192+a,c])};c.noteOn=function(a,c,e,d){b.send([144+a,c,e],1E3*d)};c.noteOff=function(a,c,e){b.send([128+a,c],1E3*e)};c.chordOn=function(a,c,e,d){for(var g=0;g<c.length;g++)b.send([144+a,c[g],e],1E3*d)};c.chordOff=function(a,c,e){for(var d=0;d<c.length;d++)b.send([128,a,c[d],velocity],1E3*e)};c.stopAllNotes=function(){for(var a=0;16>a;a++)b.send([176+a,123,0])};c.getInput=
function(){return a.getInputs()};c.getOutputs=function(){return a.getOutputs()};c.connect=function(e){MIDI.technology="Web MIDI API";MIDI.setVolume=c.setVolume;MIDI.programChange=c.programChange;MIDI.noteOn=c.noteOn;MIDI.noteOff=c.noteOff;MIDI.chordOn=c.chordOn;MIDI.chordOff=c.chordOff;MIDI.stopAllNotes=c.stopAllNotes;MIDI.getInput=c.getInput;MIDI.getOutputs=c.getOutputs;navigator.requestMIDIAccess(function(c){a=c;b=a.getOutput(0);e&&e()},function(a){console.log("uh-oh! Something went wrong!  Error code: "+
a.code)})};"undefined"===typeof MIDI.WebAudioAPI&&(MIDI.WebAudioAPI={});if(window.AudioContext||window.webkitAudioContext){var f=window.AudioContext||window.webkitAudioContext,d=MIDI.WebAudioAPI,g,h={},k=1,j={},i=function(a,b,c,e,d){var f=MIDI.GeneralMIDI.byName[a],h=f.number,l=b[c],i=MIDI.Soundfont[a][l].split(",")[1],i=Base64Binary.decodeArrayBuffer(i);g.decodeAudioData(i,function(g){for(var i=l;3>i.length;)i+="&nbsp;";"undefined"!==typeof MIDI.loader&&MIDI.loader.update(null,f.instrument+"<br>Processing: "+
(100*(c/87)>>0)+"%<br>"+i);g.id=l;e[c]=g;if(e.length===b.length){for(;e.length;)(g=e.pop())&&(j[h+""+MIDI.keyToNote[g.id]]=g);d(a)}})};d.setVolume=function(a){k=a};d.programChange=function(a,b){MIDI.channels[a].instrument=b};d.noteOn=function(a,b,c,e){if(MIDI.channels[a]){var d=MIDI.channels[a].instrument;if(j[d+""+b]){e<g.currentTime&&(e+=g.currentTime);var f=g.createBufferSource();h[a+""+b]=f;f.buffer=j[d+""+b];f.connect(g.destination);a=g.createGainNode();c=2*c/100*k-1;a.connect(g.destination);
a.gain.value=Math.max(-1,c);f.connect(a);f.noteOn(e||0);return f}}};d.noteOff=function(a,b,c){c=c||0;c<g.currentTime&&(c+=g.currentTime);if(a=h[a+""+b])return a.gain.linearRampToValueAtTime(1,c),a.gain.linearRampToValueAtTime(0,c+0.2),a.noteOff(c+0.3),a};d.chordOn=function(a,b,c,e){for(var g={},f,h=0,l=b.length;h<l;h++)g[f=b[h]]=d.noteOn(a,f,c,e);return g};d.chordOff=function(a,b,c){for(var e={},g,f=0,h=b.length;f<h;f++)e[g=b[f]]=d.noteOff(a,g,c);return e};d.connect=function(a){MIDI.technology="Web Audio API";
MIDI.setVolume=d.setVolume;MIDI.programChange=d.programChange;MIDI.noteOn=d.noteOn;MIDI.noteOff=d.noteOff;MIDI.chordOn=d.chordOn;MIDI.chordOff=d.chordOff;MIDI.Player.ctx=g=new f;var b=[],c=MIDI.keyToNote,e;for(e in c)b.push(e);var c=[],h={};e=function(b){delete h[b];for(var c in h)break;c||a()};for(var l in MIDI.Soundfont){h[l]=!0;for(var j=0;j<b.length;j++)i(l,b,j,c,e)}}}if(window.Audio){for(var e=MIDI.AudioTag={},l={},B=1,C=-1,r=[],v={},m=0;12>m;m++)r[m]=new Audio;var w=function(a,b){if(MIDI.channels[a]){var c=
MIDI.GeneralMIDI.byId[MIDI.channels[a].instrument].id;if(b=v[b]){var e=(C+1)%r.length;(new Date).getTime();var d=r[e];d.src=MIDI.Soundfont[c][b.id];d.volume=B;d.play();C=e}}};e.programChange=function(a,b){MIDI.channels[a].instrument=b};e.setVolume=function(a){B=a};e.noteOn=function(a,b,c,e){var d=l[b];if(v[d]){if(e)return window.setTimeout(function(){w(a,d)},1E3*e);w(a,d)}};e.noteOff=function(){};e.chordOn=function(a,b){for(var c in b){var e=l[b[c]];v[e]&&w(a,e)}};e.chordOff=function(){};e.stopAllNotes=
function(){for(var a=0,b=r.length;a<b;a++)r[a].pause()};e.connect=function(a){for(var b in MIDI.keyToNote)l[MIDI.keyToNote[b]]=b,v[b]={id:b};MIDI.technology="HTML Audio Tag";MIDI.setVolume=e.setVolume;MIDI.programChange=e.programChange;MIDI.noteOn=e.noteOn;MIDI.noteOff=e.noteOff;MIDI.chordOn=e.chordOn;MIDI.chordOff=e.chordOff;a&&a()}}var p=MIDI.Flash={},s={},n={};p.programChange=function(a,b){MIDI.channels[a].instrument=b};p.setVolume=function(){};p.noteOn=function(a,b,c,e){if(MIDI.channels[a]&&(b=
MIDI.GeneralMIDI.byId[MIDI.channels[a].instrument].number+""+s[b],n[b])){if(e)return window.setTimeout(function(){n[b].play({volume:2*c})},1E3*e);n[b].play({volume:2*c})}};p.noteOff=function(){};p.chordOn=function(a,b,c){if(MIDI.channels[a]){var a=MIDI.GeneralMIDI.byId[MIDI.channels[a].instrument].number,e;for(e in b){var d=a+""+s[b[e]];n[d]&&n[d].play({volume:2*c})}}};p.chordOff=function(){};p.stopAllNotes=function(){};p.connect=function(a){soundManager.flashVersion=9;soundManager.useHTML5Audio=
!0;soundManager.url="../inc/SoundManager2/swf/";soundManager.useHighPerformance=!0;soundManager.wmode="transparent";soundManager.flashPollingInterval=1;soundManager.debugMode=!1;soundManager.onload=function(){for(var b in MIDI.Soundfont)for(var c=[],e=function(){c.push(this.sID);"undefined"!==typeof MIDI.loader&&MIDI.loader.update(null,"Processing: "+this.sID)},d=0;88>d;d++){var g=s[d+21];n[MIDI.GeneralMIDI.byName[b].number+""+g]=soundManager.createSound({id:g,url:MIDI.soundfontUrl+b+"-mp3/"+g+".mp3",
multiShot:!0,autoLoad:!0,onload:e})}MIDI.technology="Flash";MIDI.setVolume=p.setVolume;MIDI.programChange=p.programChange;MIDI.noteOn=p.noteOn;MIDI.noteOff=p.noteOff;MIDI.chordOn=p.chordOn;MIDI.chordOff=p.chordOff;var f=window.setInterval(function(){88===c.length&&(window.clearInterval(f),a&&a())},25)};soundManager.onerror=function(){};for(var b in MIDI.keyToNote)s[MIDI.keyToNote[b]]=b};var m=MIDI,q={Piano:"1 Acoustic Grand Piano;2 Bright Acoustic Piano;3 Electric Grand Piano;4 Honky-tonk Piano;5 Electric Piano 1;6 Electric Piano 2;7 Harpsichord;8 Clavinet".split(";"),
"Chromatic Percussion":"9 Celesta;10 Glockenspiel;11 Music Box;12 Vibraphone;13 Marimba;14 Xylophone;15 Tubular Bells;16 Dulcimer".split(";"),Organ:"17 Drawbar Organ;18 Percussive Organ;19 Rock Organ;20 Church Organ;21 Reed Organ;22 Accordion;23 Harmonica;24 Tango Accordion".split(";"),Guitar:"25 Acoustic Guitar (nylon);26 Acoustic Guitar (steel);27 Electric Guitar (jazz);28 Electric Guitar (clean);29 Electric Guitar (muted);30 Overdriven Guitar;31 Distortion Guitar;32 Guitar Harmonics".split(";"),
Bass:"33 Acoustic Bass;34 Electric Bass (finger);35 Electric Bass (pick);36 Fretless Bass;37 Slap Bass 1;38 Slap Bass 2;39 Synth Bass 1;40 Synth Bass 2".split(";"),Strings:"41 Violin;42 Viola;43 Cello;44 Contrabass;45 Tremolo Strings;46 Pizzicato Strings;47 Orchestral Harp;48 Timpani".split(";"),Ensemble:"49 String Ensemble 1;50 String Ensemble 2;51 Synth Strings 1;52 Synth Strings 2;53 Choir Aahs;54 Voice Oohs;55 Synth Choir;56 Orchestra Hit".split(";"),Brass:"57 Trumpet;58 Trombone;59 Tuba;60 Muted Trumpet;61 French Horn;62 Brass Section;63 Synth Brass 1;64 Synth Brass 2".split(";"),
Reed:"65 Soprano Sax;66 Alto Sax;67 Tenor Sax;68 Baritone Sax;69 Oboe;70 English Horn;71 Bassoon;72 Clarinet".split(";"),Pipe:"73 Piccolo;74 Flute;75 Recorder;76 Pan Flute;77 Blown Bottle;78 Shakuhachi;79 Whistle;80 Ocarina".split(";"),"Synth Lead":"81 Lead 1 (square);82 Lead 2 (sawtooth);83 Lead 3 (calliope);84 Lead 4 (chiff);85 Lead 5 (charang);86 Lead 6 (voice);87 Lead 7 (fifths);88 Lead 8 (bass + lead)".split(";"),"Synth Pad":"89 Pad 1 (new age);90 Pad 2 (warm);91 Pad 3 (polysynth);92 Pad 4 (choir);93 Pad 5 (bowed);94 Pad 6 (metallic);95 Pad 7 (halo);96 Pad 8 (sweep)".split(";"),
"Synth Effects":"97 FX 1 (rain);98 FX 2 (soundtrack);99 FX 3 (crystal);100 FX 4 (atmosphere);101 FX 5 (brightness);102 FX 6 (goblins);103 FX 7 (echoes);104 FX 8 (sci-fi)".split(";"),Ethnic:"105 Sitar;106 Banjo;107 Shamisen;108 Koto;109 Kalimba;110 Bagpipe;111 Fiddle;112 Shanai".split(";"),Percussive:"113 Tinkle Bell;114 Agogo;115 Steel Drums;116 Woodblock;117 Taiko Drum;118 Melodic Tom;119 Synth Drum".split(";"),"Sound effects":"120 Reverse Cymbal;121 Guitar Fret Noise;122 Breath Noise;123 Seashore;124 Bird Tweet;125 Telephone Ring;126 Helicopter;127 Applause;128 Gunshot".split(";")},
y=function(a){return a.replace(/[^a-z0-9 ]/gi,"").replace(/[ ]/g,"_").toLowerCase()},x={byName:{},byId:{},byCategory:{}},t;for(t in q)for(var D=q[t],z=0,E=D.length;z<E;z++){var u=D[z];if(u){var A=parseInt(u.substr(0,u.indexOf(" ")),10),u=u.replace(A+" ","");x.byId[--A]=x.byName[y(u)]=x.byCategory[y(t)]={id:y(u),instrument:u,number:A,category:t}}}m.GeneralMIDI=x;t=MIDI;m={};for(q=0;16>q;q++)m[q]={instrument:0,mute:!1,mono:!1,omni:!1,solo:!1};t.channels=m;MIDI.pianoKeyOffset=21;MIDI.keyToNote={};MIDI.noteToKey=
{};t="C Db D Eb E F Gb G Ab A Bb B".split(" ");for(m=21;108>=m;m++)q=t[m%12]+((m-12)/12>>0),MIDI.keyToNote[q]=m,MIDI.noteToKey[m]=q})();if("undefined"===typeof DOMLoader)var DOMLoader={};if("undefined"===typeof XMLHttpRequest){var XMLHttpRequest;(function(){for(var a=[function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],b=0;b<a.length;b++){try{a[b]()}catch(c){continue}break}XMLHttpRequest=a[b]})()}
if("undefined"===typeof(new XMLHttpRequest).responseText){var IEBinaryToArray_ByteStr_Script="<\!-- IEBinaryToArray_ByteStr --\>\r\n<script type='text/vbscript'>\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = \"\"\r\n   End If\r\nEnd Function\r\n<\/script>\r\n";document.write(IEBinaryToArray_ByteStr_Script);
DOMLoader.sendRequest=function(a){var b=XMLHttpRequest();b.open("GET",a.url,!0);a.responseType&&(b.responseType=a.responseType);a.onerror&&(b.onerror=a.onerror);a.onprogress&&(b.onprogress=a.onprogress);b.onreadystatechange=function(){if(4===b.readyState){if(200===b.status){var c=b,f;f=b.responseBody;for(var d={},g=0;256>g;g++)for(var h=0;256>h;h++)d[String.fromCharCode(g+256*h)]=String.fromCharCode(g)+String.fromCharCode(h);g=IEBinaryToArray_ByteStr(f);f=IEBinaryToArray_ByteStr_Last(f);f=g.replace(/[\s\S]/g,
function(a){return d[a]})+f;c.responseText=f}else b=!1;if(a.onload)a.onload(b)}};b.setRequestHeader("Accept-Charset","x-user-defined");b.send(null);return b}}else DOMLoader.sendRequest=function(a){var b=new XMLHttpRequest;b.open(a.data?"POST":"GET",a.url,!0);b.overrideMimeType&&b.overrideMimeType("text/plain; charset=x-user-defined");a.data&&b.setRequestHeader("Content-type","application/x-www-form-urlencoded");a.responseType&&(b.responseType=a.responseType);a.onerror&&(b.onerror=a.onerror);a.onprogress&&
(b.onprogress=a.onprogress);b.onreadystatechange=function(c){if(4===b.readyState)if(200!==b.status&&304!=b.status){if(a.onerror)a.onerror(c,!1)}else if(a.onload)a.onload(b)};b.send(a.data);return b};"undefined"===typeof DOMLoader&&(DOMLoader={});
(function(){DOMLoader.script=function(){this.loaded={};this.loading={};return this};DOMLoader.script.prototype.add=function(a){var b=this;"string"===typeof a&&(a={src:a});var c=a.srcs;"undefined"===typeof c&&(c=[{src:a.src,verify:a.verify}]);var f=document.getElementsByTagName("head")[0],d=function(a,c){if(!b.loaded[a.src]&&!(c&&"undefined"===typeof window[c])){b.loaded[a.src]=!0;if(b.loading[a.src])b.loading[a.src]();delete b.loading[a.src];a.callback&&a.callback();"undefined"!==typeof i&&i()}},
g=[],h=function(c){"string"===typeof c&&(c={src:c,verify:a.verify});if(/([\w\d.])$/.test(c.verify))if(c.test=c.verify,"object"===typeof c.test)for(var h in c.test)g.push(c.test[h]);else g.push(c.test);b.loaded[c.src]||(h=document.createElement("script"),h.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||d(c)},h.onload=function(){d(c)},h.onerror=function(){},h.setAttribute("type","text/javascript"),h.setAttribute("src",c.src),f.appendChild(h),b.loading[c.src]=
function(){})},k=function(b){if(b)d(b,b.test);else for(var f=0;f<c.length;f++)d(c[f],c[f].test);for(var h=!0,f=0;f<g.length;f++){var i=g[f];if(i&&-1!==i.indexOf(".")){var i=i.split("."),j=window[i[0]];"undefined"!==typeof j&&(2===i.length?"undefined"===typeof j[i[1]]&&(h=!1):3===i.length&&"undefined"===typeof j[i[1]][i[2]]&&(h=!1))}else"undefined"===typeof window[i]&&(h=!1)}!a.strictOrder&&h?a.callback&&a.callback():setTimeout(function(){k(b)},10)};if(a.strictOrder){var j=-1,i=function(){j++;if(c[j]){var e=
c[j],d=e.src;b.loading[d]?b.loading[d]=function(){e.callback&&e.callback();i()}:b.loaded[d]?i():(h(e),k(e))}else a.callback&&a.callback()};i()}else{for(j=0;j<c.length;j++)h(c[j]);k()}};DOMLoader.script=new DOMLoader.script})();(function(a){a.btoa||(a.btoa=function(a){var a=escape(a),c="",f,d,g="",h,k,j="",i=0;do f=a.charCodeAt(i++),d=a.charCodeAt(i++),g=a.charCodeAt(i++),h=f>>2,f=(f&3)<<4|d>>4,k=(d&15)<<2|g>>6,j=g&63,isNaN(d)?k=j=64:isNaN(g)&&(j=64),c=c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(j);
while(i<a.length);return c});a.atob||(a.atob=function(a){var c="",f,d,g="",h,k="",j=0;/[^A-Za-z0-9\+\/\=]/g.exec(a)&&alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(j++)),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(j++)),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(j++)),
k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(j++)),f=f<<2|d>>4,d=(d&15)<<4|h>>2,g=(h&3)<<6|k,c+=String.fromCharCode(f),64!=h&&(c+=String.fromCharCode(d)),64!=k&&(c+=String.fromCharCode(g));while(j<a.length);return unescape(c)})})(this);var Base64Binary={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decodeArrayBuffer:function(a){var b=Math.ceil(3*a.length/4),b=new ArrayBuffer(b);this.decode(a,b);return b},decode:function(a,b){var c=this._keyStr.indexOf(a.charAt(a.length-1)),f=this._keyStr.indexOf(a.charAt(a.length-1)),d=Math.ceil(3*a.length/4);64==c&&d--;64==f&&d--;for(var g,h,k,j,i=0,e=0,c=b?new Uint8Array(b):new Uint8Array(d),a=a.replace(/[^A-Za-z0-9\+\/\=]/g,""),i=0;i<d;i+=3)g=this._keyStr.indexOf(a.charAt(e++)),
h=this._keyStr.indexOf(a.charAt(e++)),f=this._keyStr.indexOf(a.charAt(e++)),j=this._keyStr.indexOf(a.charAt(e++)),g=g<<2|h>>4,h=(h&15)<<4|f>>2,k=(f&3)<<6|j,c[i]=g,64!=f&&(c[i+1]=h),64!=j&&(c[i+2]=k);return c}};