/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

function myEventHandler() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!" ;
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

    alert(str) ;
}


// ...additional event handlers here...
//------ADS
document.addEventListener('onAdFailLoad', function (e) {
    console.log("Ad failed to load");
    alert("Ad failed to load!");
    console.log(e);
    console.log(e.error + ',' + e.reason);
});

function my_admob() {
    console.log("init my_admob");


    var admobid = {
            banner: 'ca-app-pub-9969581706012169/3636654381'
        };


    if (!AdMob) { 
        console.log('admob plugin not ready');
        alert('admob plugin not ready'); 
        return; 
    }else{
        console.log("no problems!");
    }


    AdMob.createBanner({
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true,
        isTesting: true,
        success: function () { console.log("Successfully loaded"); },
        error: function () {
            alert('failed to create banner');
        }
    });

}