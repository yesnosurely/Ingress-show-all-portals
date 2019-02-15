// ==UserScript==
// @name          Ingress show all portals
// @author        @yesnosurely
// @namespace     https://github.com/yesnosurely/ingress-show-all-portals/
// @version       1
// @updateURL     https://raw.githubusercontent.com/yesnosurely/Ingress-show-all-portals/master/ingress-show-all-portals.meta.js
// @downloadURL   https://raw.githubusercontent.com/yesnosurely/Ingress-show-all-portals/master/ingress-show-all-portals.user.js
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @match         http://intel.ingress.com/*
// @match         https://intel.ingress.com/*
// @grant         none
// ==/UserScript==

$(document).ready(function(){

    $('.leaflet-control-layers-overlays').append('<label><input type="checkbox" class="leaflet-control-layers-selector sap"><span> Show all portals</span></label>');
    $(".sap").change(function() {
        if(this.checked) {
            window.getDataZoomForMapZoom = function() {
                return 17;
            };
        } else {
            location.reload(true)
        }
    });

});