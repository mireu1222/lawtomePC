/* 
    Jquery Video Modal
*/
;(function($){
    $.fn.videoModal = function(options) {
        var opts = $.extend({}, $.fn.videoModal.defaults, options);

        var self = this;        
        if ( self.length <= 0 ) {
            return;
        }
        // modal DOM append
        $('body').append(opts.templates.popup);

        // click info var
        var wrap = self.closest('.info'),
            tit = wrap.find('.tit').text(),
            desc = wrap.find('.desc').text(),
            date = wrap.find('.date').html(),
            src = wrap.find('.src').text();

        // video modal var
        var videoModal = $('.video-modal-area'),
            v = {
                tit : videoModal.find('.tit'),
                desc : videoModal.find('.desc'),
                date : videoModal.find('.date'),
                iframe : videoModal.find('iframe')
            },
            closeBtn = videoModal.find('.btn-close');

        // click function
        self.click(function(){
            modalOpen();
        });
        closeBtn.click(function(){
            modalClose();
        });

        function modalOpen(){            
            v.tit.text(tit);
            v.desc.text(desc);
            v.date.html(date);
            v.iframe.attr('src', src+opts.videoOption);

            $('body').append(opts.templates.dim);
            videoModal.show();
        }

        function modalClose() {
            v.tit.text('');
            v.desc.text('');
            v.date.html('');
            v.iframe.attr('src', '');

            $('body').find('.common-dim').remove();
            videoModal.hide();
        }

        return this;
    }
    
    // default option
    $.fn.videoModal.defaults = {
        templates : {
            popup : '<div id="video" class="video-modal-area" style="display:none;">'+
                        '<div class="video-area">'+
                            '<iframe width="100%" height="100%" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>'+
                        '</div>'+
                        '<div class="video-info">'+
                            '<p class="tit"></p>'+
                            '<p class="desc"></p>'+
                        '</div>'+
                        '<button type="button" class="btn-close"><span class="blind">닫기</span></button>'+
                    '</div>',
            dim : '<div class="common-dim" aria-hidden="true">&nbsp;</div>'
        },
        videoOption : '?controls=0' 
    };
}(jQuery));