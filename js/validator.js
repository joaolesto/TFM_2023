$(document).ready(function() {
    
     /**
     * Positive Whole Numbers
     */
    $("#car_volume,#N_vias").each(function(){
        $(this).on('keydown',  function(event) {
            
            // Handle paste
            if (event.type === 'paste') {
                key = event.clipboardData.getData('text/plain');
            } else {
            // Handle key press
                var key = event.keyCode || event.which;
                key = String.fromCharCode(key);
            }

            return event.keyCode !== 69 && event.keyCode !== 189 && event.keyCode !== 190 && event.keyCode !== 43 && event.keyCode !== 187
        });
    });

    /**
     * Show error message
     */
    $("#N_vias").on('focusout', function(event) {

        let regex = /^([2-9]|[1][0])$/;

        if(!regex.test($(this).val()) && !$('#error-vias').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-vias">Numero tem que ser entre 2-10</strong>`)
            return false
        }

        if(!regex.test($(this).val())) {
            return false
        }
        
        $('#error-vias').remove()
    })


     /**
     * Positive Decimal Numbers
     */
     $("#pt,#pr,#FFS").each(function(){
        $(this).on('keydown',  function(event) {
            
            // Handle paste
            if (event.type === 'paste') {
                key = event.clipboardData.getData('text/plain');
            } else {
            // Handle key press
                var key = event.keyCode || event.which;
                key = String.fromCharCode(key);
            }

            return event.keyCode !== 69 && event.keyCode !== 189 && event.keyCode !== 43 && event.keyCode !== 187
        });
    });


    /**
     * Show error message for veiculos pesados
     */
    $("#pt").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) > 0) || !(parseFloat($(this).val()) < 100));

        if( validacao && !$('#error-pt').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-pt">Numero tem que ser entre 1-99</strong>`)
            return false
        }

        if( validacao ) {
            return false
        }
        
        $('#error-pt').remove()
    })

     /**
     * Show error message for veiculos recriativos
     */
     $("#pr").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) > 0) || !(parseFloat($(this).val()) <= 100))

        if( validacao && !$('#error-pr').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-pr">Numero tem que ser entre 1-100</strong>`)
            return false
        }

        if( validacao ) {
            return false
        }
        
        $('#error-pr').remove()
    })

     /**
     * Show error message for velcidade de fluxo livre
     */
     $("#FFS").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) > 90) || !(parseFloat($(this).val()) < 120));

        if( validacao && !$('#error-FFS').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-FFS">Numero tem que ser entre 90-120</strong>`);
            return false;
        }

        if( validacao ) {
            return false;
        }
        
        $('#error-FFS').remove()
    })
});
