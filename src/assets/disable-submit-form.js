$.fn.extend({
    _btn : ':input[type="submit"]',

    defaults : {
        disabled_text : "Processing",
        block : false,
        block_div : undefined
    },

    block_css : {
        css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        }
    },

    div_block : function(div){
        var element;

        if(div.data('block-div') !== undefined){
            element = $(div.data('block-div'));
        } else {
            element = $('form').parent();
        }

        return element;
    },

    disableForm : function(options)
    {
        var params = $.extend({}, this.defaults, options);

        var $btn = $(this).find(this._btn);
        $(this).addClass('disable-submit-buttons');
        $btn.data('disabled-text', params.disabled_text);
        $btn.data('block-ui', params.block);
        $btn.data('block-div', params.block_div);
    },

    disabled_button : function()
    {
        var $this = $(this);
        var $btn = $this.find(this._btn);
        var before_text = ($btn.data('enabled-text') !== undefined && $btn.data('enabled-text') !== '' ) ? $btn.data('enabled-text') : $btn.text();

        if ($btn.data('block-ui')) {
            var options = this.block_css;
            options.message = $btn.data('disabled-text');
            var element = this.div_block($btn);
            element.block(options);
        } else {
            $btn.html($btn.data('disabled-text'))
                .attr('disabled', 'disabled')
                .data('enabled-text', before_text);
        }
    },

    enabled_button : function()
    {
        if ($(this).find('.has-error').length > 0) {
            var $this = $(this);
            var $btn = $this.find(this._btn);

            if ($btn.data('block-ui')) {
                var element = this.div_block($btn);
                element.unblock();
            } else {
                $btn.removeAttr('disabled')
                    .html($btn.data('enabled-text'));
            }
        }
    }
});

$('body').on('beforeValidate', 'form.disable-submit-buttons', function (e) {
    $(this).disabled_button();
}).on('afterValidate', 'form.disable-submit-buttons', function (e) {
    $(this).enabled_button();
});

$(document).ajaxStart(function() {
    $('form.disable-submit-buttons').disabled_button();
}).ajaxStop(function() {
    $('form.disable-submit-buttons').enabled_button();
});