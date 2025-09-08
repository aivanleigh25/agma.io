aiptag.cmd.player.push(function() {
    adplayer = new aipPlayer({
        AIP_REWARDEDCOMPLETE: function (evt)  {
          if (evt === 'granted') {
            window.succRewardedAdv();
          }
        },
        AD_WIDTH: 960,
        AD_HEIGHT: 540,
        AD_FULLSCREEN: false,
        AD_CENTERPLAYER: true,
        LOADING_TEXT: 'loading advertisement',
        PREROLL_ELEM: function(){return document.getElementById('preroll')},
        AIP_COMPLETE: function ()  {
            /*******************
             ***** WARNING *****
             *******************
             Please do not remove the PREROLL_ELEM
             from the page, it will be hidden automaticly.
             If you do want to remove it use the AIP_REMOVE callback.
            */
            window.succAdv();
        },
        AIP_REMOVE: function ()  {
            // Here it's save to remove the PREROLL_ELEM from the page.
            // But it's not necessary.
        }
    });
});
