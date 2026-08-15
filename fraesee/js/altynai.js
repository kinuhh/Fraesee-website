(function () {

const draggablelines = [
    "you know im draggable!!",
    "psst, drag me around :p",
    "im moveable, just so you know....",
    "eternally in website, to be dragged.."
  ];

  const talklines = [
    "Hallo who r you?",
    "Dont overwhelm me pls",
    ":v",
    "Do anything fun today? i sure didn't..",
    "This site sucks if you ask me, not enough dopamine from short form content",
    "Imagine drawing for almost a year and resorting to a stickman, god",
    "You'd think being someone's oc would be fun, right?",
    "Just learned that im essentially a speaker, day ruined",
    "Did you hear? jL is a stand in for Vitality! god they were desperate....",
    "Prior to being on a website, i was meant to be immortal (oc lore)",
    "Fun fact: i was kinuh's 3rd ever (fleshed out) oc! just after 'volha' who he now hates",
    "I was created to be in a videogame, but my purple hair got me removed for a generic black-haired girl",
    "Did you know my name (altynai) means golden moon?",
    "In my lore im partially blind, mute and im deaf in my right ear. was the tradeoffs for being immortal, you see",
    ":)",
    "Gay and flavourful, story of someone's life",
    "You know i dont think zywoo is even that good",
    ":000",
    "The 'goats' of anything before 2020 would get smoked by karrigan now, the skill ceiling has risen dramatically",
    "Inspector Goole is an inspector",
    "Are insults a projection of one's insecurities, I think mine are",
    "See ig...",
    "That new black haired girl isnt even an immortal, stupid kinuh",
    "Im meant to be 5 foot 1, talk about being tall",
    "kinuh intentionally made this website look bad, lol",
    "If you see an error, report it to him!",
    "kinuh's shit coding skills managed to code me, so you can do anything!",
    "It took fraesee almost 8 hours to code me btw...",
    "Fraesee learned (copied online) JavaScript for me! how nice",
    "Do you think im the mouthpiece for kinuh himself?",
    "Any conversation can be meaningful",
    "This is a one-way conversation, yet I don't view that as bad",
    "Karrigan is goat igl, apex surrounded with superstars",
    "This world's script has been written by someone who made those same roads",
    "None of the music played is made by fraesee",
    "Wish i got invited to parties"
  ];

  const draglines = [
    "Dont move me too fast i get sick",
    "Where we off to?",
    "My x and y coordinates changed",
    "My position gets saved on different pages",
    "The stars look beautiful tonight, dont they?",
    "This a good spot",
    "I actually like this spot",
    "I liked that spot :(",
    "Feels good to be grabbed :p ",
    "We're here now? okay...",
    "Violently shaking me does nothing btw",
    "You'll make me dizzy if you keep this up!!!",
    "Dont violently hit me against the edge of the page...",
    "Is this punishment?",
    "Yeah i like it here as well",
    "Was I in the way? sorry.",
    "Wow... i liked that spot."
  ];

  const edgeline = "one time I got sent off into the backrooms, he had to reprogram me to hit the site walls";

  const clicklines = [
    "Yes that but drag next time",
    "For your information, you're meant to drag me",
    "okay you learned you can do that, great.",
    "Hm? did you want to move me?",
    "Hm?",
    "Buttons are above me? or are you blind as well as annoying?",
    "Says talk on the ceiling",
    "Okay well done, now move the mouse and click",
    "Is this another form of punishment?",
    "Do you have fun torturing people like the CIA?",
    "Eternal punishment for being me...",
    "Is it my purple hair?",
    "If you don't like me, tell fraesee to make a button to get rid of me!!!",
    "Do you blame the victim if they deserve it?",
    "Thanks.",
    "Thanks for that, anything else?",
    "Want to do anything meaningful",
    "Click and hold people, click and hold"
  ];

  const pokeannoyedlines = [
    "First time using a mouse? god MOVE IT whilst HOLDING",
    "Okay stop now or I'll IP ban you",
    "Seriously stop",
    "I will bite you",
    "Poke me one more time and I'll start crying if I need to!!",
    "I'll calm down if you stop for 3 seconds!!!!!",
    "How meaningful",
    "Maybe you should poke your head outside and look for a partner",
    "You're how old? and doing this?",
    "I will run a JavaScript script to steal your data",
    "Anything else?",
    "Wonderfully done...",
    "Am I falling for max tier ragebait?",
    "Is it ragebait if you're meaning a big meany?",
    "The lion pays attention to ragebait as it's an unhealthy, addictive cycle",
    "You ever watched Saw? Let's just say I won't be Adam or Lawrence",
    "You're the life at parties aren't you? Or do you not get invited?"
  ];

  const whorulines = [
    "My name's altynai, it's a name...",
    "Altynai is my name! pronounced altynai!",
    "Altynai, my creator wanted a unique name you see",
    "Altynai, I was never given a last name",
    "Just someone's oc, happened to be named altynai",
    "Hello!! My name altynai, currently an image",
    "Nice to meet you, my name's altynai! What's yours?"
  ];

  const annoyedlines = [
    "Are you a goldfish?",
    "...we've been over this before",
    "Altynai, the same answer",
    "Do you have a memory of a goldfish??",
    "Do you have a hippocampus?",
    "...I'm having Deja Vu, wait... no I'm not since we've had this conversation about 5000000000 times before, so how about you hit another button for once in your life? Thank you",
    "Yep, my name hasn't changed.",
    "Wasn't nice meeting you, I rescind my statement",
    "You'll make me cry",
    "Stop.",
    "You don't have to ask the same question again",
    "You know who I am"
  ];

  const forgivenline = "Thank you, don't do it again.";

  const songs = [
    { artist: "fripSide", title: "LEVEL5 -judgelight-", src: "music/fripSide - LEVEL5 -judgelight-.mp3" },
    { artist: "fripSide", title: "only my railgun", src: "music/fripSide - only my railgun.mp3" },
    { artist: "fripSide", title: "sister's noise", src: "music/fripSide - sister's noise.mp3" },
    { artist: "glass beach", title: "classic j dies and goes to hell, Pt. 1", src: "music/glass beach - classic j dies and goes to hell, Pt. 1.mp3" },
    { artist: "glass beach", title: "commatose", src: "music/glass beach - commatose.mp3" },
    { artist: "glass beach", title: "cul-de-sac", src: "music/glass beach - cul-de-sac.mp3" },
    { artist: "glass beach", title: "the CIA", src: "music/glass beach - the CIA.mp3" },
    { artist: "kurayamisaka", title: "kurayamisaka yori ai wo komete", src: "music/kurayamisaka - kurayamisaka yori ai wo komete.mp3" },
    { artist: "Mami Kawada", title: "PSI missing", src: "music/Mami Kawada - PSI missing.mp3" },
    { artist: "Sheena Ringo", title: "Tsumi To Batsu", src: "music/Sheena Ringo - Tsumi To Batsu.mp3" },
    { artist: "tricot", title: "In one gulp", src: "music/tricot - In one gulp.mp3" },
    { artist: "tricot", title: "42c", src: "music/tricot - 42c.mp3" },
    { artist: "tricot", title: "DeDeDe", src: "music/tricot - DeDeDe.mp3" },
    { artist: "tricot", title: "Munasawagi", src: "music/tricot - Munasawagi.mp3" },
    { artist: "you are an angel", title: "escape your hometown by any means necessary", src: "music/you are an angel - escape your hometown by any means necessary.mp3" },
    { artist: "you are an angel", title: "industry", src: "music/you are an angel - industry.mp3" },
    { artist: "you are an angel", title: "kate said", src: "music/you are an angel - kate said.mp3" },
    { artist: "you are an angel", title: "you are an angel", src: "music/you are an angel - you are an angel.mp3" },
    { artist: "you are an angel", title: "overture", src: "music/you are an angel - overture.mp3" }
  ];

  const revertdelay = 3500;

  const whoannoyafter = 5;
  const whoresetdelay = 3000;

  const pokeannoyafter = 5;
  const pokeresetdelay = 3000;

  const volumescale = 0.5;

  const talkgifsrc = "images/altynai-talk.gif";
  const talkanimlength = 1000;

  const storagekey = "altynai-widget-state";

  const widget = document.getElementById('altynai-widget');
  const imagewrap = document.getElementById('altynai-image-wrap');
  const buttonsel = document.getElementById('altynai-buttons');
  const textboxel = document.getElementById('altynai-textbox');
  const audio = document.getElementById('bg-music');
  const charimg = imagewrap ? imagewrap.querySelector('img') : null;

  if (!widget || !imagewrap || !buttonsel || !textboxel) return;

  const normalimgsrc = charimg ? charimg.getAttribute('src') : null;
  let talkgifok = false;
  if (talkgifsrc) {
    const testimg = new Image();
    testimg.onload = () => { talkgifok = true; };
    testimg.src = talkgifsrc;
  }

  let mode = 'main';
  let displayedvolume = 1;
  let nowplaying = null;
  let reverttimer = null;
  let talkanimtimer = null;
  let whoclickcount = 0;
  let whoresettimer = null;
  let whowasannoyed = false;
  let pokeclickcount = 0;
  let pokeresettimer = null;
  let pokewasannoyed = false;
  let loopmode = 'off';

  audio.volume = displayedvolume * volumescale;

  function pickline(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function savestate() {
    try {
      localStorage.setItem(storagekey, JSON.stringify({
        left: widget.style.left || null,
        top: widget.style.top || null,
        text: textboxel.textContent
      }));
    } catch (e) {

    }
  }

  function loadstate() {
    try {
      const raw = localStorage.getItem(storagekey);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function animatetalk() {
    if (!talkgifok || !charimg) return;
    clearTimeout(talkanimtimer);
    charimg.src = talkgifsrc;
    talkanimtimer = setTimeout(() => {
      charimg.src = normalimgsrc;
    }, talkanimlength);
  }

  function settext(text) {
    textboxel.textContent = text;
    animatetalk();
    savestate();
  }

  function updatetext(text) {
    clearTimeout(reverttimer);
    settext(text);
  }
  function updatetexttemp(text) {
    clearTimeout(reverttimer);
    settext(text);
    reverttimer = setTimeout(() => {
      if (nowplaying && !audio.paused) {
        settext(nowplaying);
      }
    }, revertdelay);
  }

  function dotalk() {
    updatetext(pickline(talklines));
  }

  function dowhoru() {
    whoclickcount++;
    clearTimeout(whoresettimer);
    whoresettimer = setTimeout(() => {
      whoclickcount = 0;
      if (whowasannoyed) {
        whowasannoyed = false;
        updatetexttemp(forgivenline);
      }
    }, whoresetdelay);

    if (whoclickcount >= whoannoyafter) {
      whowasannoyed = true;
      updatetext(pickline(annoyedlines));
    } else {
      updatetext(pickline(whorulines));
    }
  }

  function doplay() {
    const song = songs[Math.floor(Math.random() * songs.length)];
    audio.src = song.src;
    audio.loop = (loopmode === 'song');
    audio.play().catch(() => {
      updatetext("Fraesee speghitti code working on overtime... bug somehow happened");
      return;
    });
    nowplaying = "now playing: " + song.artist + " - " + song.title;
    updatetext(nowplaying);
    renderbuttons();
  }

  function dopause() {
    if (audio.paused) {
      if (audio.src) {
        audio.play().catch(() => {});
        updatetext(nowplaying || "Resumed.");
      } else {
        updatetext("You have to play something to pause it...");
      }
    } else {
      audio.pause();
      updatetext("Pawsed");
    }
    renderbuttons();
  }

  function dostop() {
    audio.pause();
    audio.currentTime = 0;
    audio.loop = false;
    loopmode = 'Off';
    nowplaying = null;
    updatetext("Stawpped");
    renderbuttons();
  }

  function doloop() {
    if (loopmode === 'off') {
      loopmode = 'playlist';
      audio.loop = false;
      updatetext("Looping through songs until you hit stop.");
    } else if (loopmode === 'playlist') {
      loopmode = 'song';
      audio.loop = true;
      updatetext("Looping this song in particular");
    } else {
      loopmode = 'off';
      audio.loop = false;
      updatetext("loop negated");
    }
  }
  
  audio.addEventListener('ended', () => {
    if (loopmode === 'playlist') {
      doplay();
    }
  });

  function changevolume(delta) {
    displayedvolume = Math.max(0, Math.min(1, displayedvolume + delta));
    audio.volume = displayedvolume * volumescale;
    updatetext("Volume: " + Math.round(displayedvolume * 100) + "%");
  }

  const buttonsets = {
    main: [
      { label: 'talk', action: dotalk },
      { label: 'who r you?', action: dowhoru },
      { label: 'music', action: () => setmode('music') }
    ],
    music: [
      { label: 'play', action: doplay },
      { label: () => (audio.paused ? 'unpause' : 'pause'), action: dopause },
      { label: 'stop', action: dostop },
      { label: 'loop', action: doloop },
      { label: 'volume', action: () => setmode('volume') },
      { label: 'exit', action: () => setmode('main') }
    ],
    volume: [
      { label: '+', action: () => changevolume(0.1) },
      { label: '-', action: () => changevolume(-0.1) },
      { label: 'back', action: () => setmode('music') }
    ]
  };

  function renderbuttons() {
    buttonsel.innerHTML = '';
    buttonsets[mode].forEach(def => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = typeof def.label === 'function' ? def.label() : def.label;
      btn.addEventListener('click', def.action);
      buttonsel.appendChild(btn);
    });
  }

  function setmode(newmode) {
    mode = newmode;
    renderbuttons();
  }

  renderbuttons();

  const saved = loadstate();
  if (saved && saved.left && saved.top) {
    widget.style.left = saved.left;
    widget.style.top = saved.top;
    widget.style.right = 'auto';
    widget.style.bottom = 'auto';
  }
  if (saved && saved.text) {
    settext(saved.text);
  } else {
    settext(pickline(draggablelines));
  }

  let isdragging = false;
  let hasmoved = false;
  let hitedge = false;
  let offsetx = 0;
  let offsety = 0;
  let startx = 0;
  let starty = 0;
  const movethreshold = 6;

  function getpoint(e) {
    if (e.touches && e.touches.length) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }

  function startdrag(e) {
    isdragging = true;
    hasmoved = false;
    hitedge = false;
    const point = getpoint(e);
    startx = point.x;
    starty = point.y;
    const rect = widget.getBoundingClientRect();
    offsetx = point.x - rect.left;
    offsety = point.y - rect.top;
  }

  function movedrag(e) {
    if (!isdragging) return;
    const point = getpoint(e);

    if (!hasmoved) {
      const dx = Math.abs(point.x - startx);
      const dy = Math.abs(point.y - starty);
      if (dx < movethreshold && dy < movethreshold) return;
      hasmoved = true;
      imagewrap.classList.add('dragging');
      updatetexttemp(pickline(draglines));
    }

    const rawx = point.x - offsetx;
    const rawy = point.y - offsety;
    const x = Math.max(0, Math.min(window.innerWidth - widget.offsetWidth, rawx));
    const y = Math.max(0, Math.min(window.innerHeight - widget.offsetHeight, rawy));

    if (!hitedge && (x !== rawx || y !== rawy)) {
      hitedge = true;
      updatetexttemp(edgeline);
    }

    widget.style.left = x + 'px';
    widget.style.top = y + 'px';
    widget.style.right = 'auto';
    widget.style.bottom = 'auto';

    e.preventDefault();
  }

  function enddrag() {
    if (!isdragging) return;
    isdragging = false;

    if (hasmoved) {
      imagewrap.classList.remove('dragging');
      savestate();
    } else {
      pokeclickcount++;
      clearTimeout(pokeresettimer);
      pokeresettimer = setTimeout(() => {
        pokeclickcount = 0;
        if (pokewasannoyed) {
          pokewasannoyed = false;
          updatetexttemp(forgivenline);
        }
      }, pokeresetdelay);

      if (pokeclickcount >= pokeannoyafter) {
        pokewasannoyed = true;
        updatetexttemp(pickline(pokeannoyedlines));
      } else {
        updatetexttemp(pickline(clicklines));
      }
    }
  }

  imagewrap.addEventListener('mousedown', startdrag);
  window.addEventListener('mousemove', movedrag);
  window.addEventListener('mouseup', enddrag);

  imagewrap.addEventListener('touchstart', startdrag, { passive: true });
  window.addEventListener('touchmove', movedrag, { passive: false });
  window.addEventListener('touchend', enddrag);
})();
