/*
* Developed by Severtain @ Library Image LazyUpload v1.0.0
* All rights reserved
*/

(function () {
    //Start image lazy load process
    //Запустить ленивую подгрузку для изображений
    function imageLazyUpload() {
        let distance = -100, imgDom = [];

        imgDom = document.querySelectorAll("img[data-src]");

        for (let i=0; i<imgDom; i++) {
            let elem = imgDom[i];

            if (_isVisible(elem, distance)) {
                elem.setAttribute("src", elem.getAttribute("data-src"));
                elem.removeAttribute("data-src");
            }
        }
    }

    //Is visible image element on page?
    function _isVisible(elem, threshold, mode) {
        threshold = threshold || 0;
        mode = mode || 'visible';

        let rect = elm.getBoundingClientRect();
        let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        let above = rect.bottom - threshold < 0;
        let below = rect.top - viewHeight + threshold >= 0;

        return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
    }

    //set document load handler
    function _connectHandler() {
        let isUpload = false;
        document.addEventListener("DOMContentLoaded", function(event){
            lazyUpload();
            isUpload = true;
        });

        if (!isUpload)
            lazyUpload();
    }

    //start events after loading
    window.lazyUploadContainer = imageLazyUpload;
    window.imageLazyUpload = imageLazyUpload;
    _connectHandler();
})();