'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=3650b2de4fcc4550973dbe29191a0de9';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
  const links = [
    {
      name: 'ReelElijah',
      link: 'ReelElijxh',
    },

    {
      name: 'dude',
      link: 'dude',
    },

  ];

  for (let i in links) {
    let link = links[i];

    $('#marquee').append(`<a href="https://steamcommunity.com/id/${link.link}" target="_BLANK">${link.name}</a>`);

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' | ');
  }

  if (mobileAndTabletCheck()) {
    $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.png);"></div>');

    app.shouldIgnoreVideo = true;
  }

  app.titleChanger"\",
  "/",
  "|",
  "b|",
  "bu|",
  "bub|",
  "bubb|",
  "bubbl|",
  "bubble|",
  "bubbleg|",
  "bubblegu|",
  "bubblegum|",
  "bubblegum $|",
  "bubblegum $$|",
  "bubblegum $$$|",
  "bubblegum $$|",
  "bubblegum $|",
  "bubblegum|",
  "bubblegu|",
  "bubbleg|",
  "bubble|",
  "bubbl|",
  "bubb|",
  "bu|",  
  "b|",  
  "<",
  ">",
  "|",]);
  app.iconChanger(['assets/icons/icons/retardo.png']);
});

if ($.cookie('videoTime')) {
  app.videoElement.currentTime = $.cookie('videoTime');
  app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.body.onkeyup = (event) => {
  if (event.keyCode == 32 && app.skippedIntro) {
    if (app.backgroundToggler) {
      app.videoElement.play();
      app.audioElement.play();
    } else {
      app.videoElement.pause();
      app.audioElement.pause();
    }

    return (app.backgroundToggler = !app.backgroundToggler);
  }
};

$('.skip').click(() => {
  skipIntro();
});

$.fn.extend({
  animateCss: function (animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

const writeLine = (text, speed, timeout, callback) => {
  timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

  const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

  setTimeout(() => {
    const typed = new Typed(`#line${lineNumber}`, {
      strings: text,
      typeSpeed: speed,
      onComplete: callback,
    });
  }, timeout);
};

$.getJSON(ipgeolocation, (data) => {
  writeLine(['Authenticating...', 'Enter your password: ', 'Enter your password: ********', "Granting access to <span style='font-size: 14px; color: #06d;'>[whitelist access]</span>...", "Connecting to Israel...", `Connected! <span style='font-size: 14px; color: #0f0;'>[success]</span>`,], 30, () => {
    if (app.skippedIntro) return;

    clearCursor();

    const usernames = ['user', 'dude'];

    const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
    const country = data.country_name ? data.country_name : 'your country';

    writeLine([
      `ip : <i style='color: #0f0'>${ip}</i>, sending to<i style='color: #ff0000'>154 whitelist list</i> to ${country}, prepare ur ass for premium things :yum:.`,
      `btw if are you a girl dm me on discord : ReelElijah.`,`i want a girlfriend dm to me :flushed:`, `dude`], 30, 900, () => {
      if (app.skippedIntro) return;

      clearCursor();

      writeLine([`<i style='color: #ff0000'>bubblegum $$$</i>`], 120, 500, () => {
        timeouts.push(
          setTimeout(() => {
            if (app.skippedIntro) return;

            clearCursor();

            setTimeout(() => {
              skipIntro();
            }, 500);
          }, 1000)
        );
      });
    });
  });
});

const skipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $('.top-right').remove();

  $('#main').fadeOut(100, () => {
    $('#main').remove();

    $('#marquee').marquee({
      duration: 15000,
      gap: 420,
      delayBeforeStart: 1000,
      direction: 'left',
      duplicated: true,
    });

    setTimeout(() => {
      $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
    }, 200);

    setTimeout(() => {
      const typed = new Typed('#brand', {
        strings: app.brandDescription,
        typeSpeed: 40,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.play();
        app.audioElement.play();
      }

      app.videoElement.addEventListener(
        'timeupdate',
        () => {
          $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

      $('.marquee-container').animateCss('zoomIn');

      $('.container').fadeIn();

      $('.background').fadeIn(200, () => {
        if (!app.shouldIgnoreVideo) $('#audio').animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
};

const clearCursor = () => {
  return $('span').siblings('.typed-cursor').css('opacity', '0');
};
