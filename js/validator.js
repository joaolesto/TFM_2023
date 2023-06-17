$(document).ready(function() {

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

            return event.keyCode !== 69 && event.keyCode !== 189 && event.keyCode !== 190 && event.keyCode !== 110 && event.keyCode !== 43 && event.keyCode !== 187;

        });
    });

    /**
     * Show error message
     */
    $("#phf").on('focusout', function(event) {

        let validacao = (!(parseFloat($(this).val()) >= 0.82) || !(parseFloat($(this).val()) <= 0.98));

        if( validacao && !$('#error-phf').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-phf">Numero tem que ser entre 0.82-0.98</strong>`)
            $('#Calcular').attr('disabled', true);
            return false
        }

        if( validacao ) {
            $('#Calcular').attr('disabled', true); 
            return false
        }

        $('#error-phf').remove();
        $('#Calcular').attr('disabled', false);
    })

    /**
     * Show error message
     */
    $("#N_vias").on('focusout', function(event) {

        let validacao = (!(parseInt($(this).val()) >= 2) || !(parseInt($(this).val()) <= 10));

        if( validacao && !$('#error-N_vias').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-N_vias">Numero tem que ser entre 2-10</strong>`)
            $('#Calcular').attr('disabled', true); 
            return false
           
        }

        if( validacao ) {
            $("#Calcular").attr("disabled",true)
            return false
        }
        
        $('#error-N_vias').remove();
        $('#Calcular').attr('disabled', false);
    })

    /**
     * Show error message for veiculos pesados
     */
    $("#pt").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= 0) || !(parseFloat($(this).val()) <= 100));

        if( validacao && !$('#error-pt').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-pt">Numero tem que ser entre 1-99</strong>`)
            $('#Calcular').attr('disabled', true); 
            return false
        }

        if( validacao ) {
            $('#Calcular').attr('disabled', true); 
            return false
        }
        
        $('#error-pt').remove();
        $('#Calcular').attr('disabled', false);
    })

     /**
     * Show error message for veiculos recriativos
     */
     $("#pr").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= 0) || !(parseFloat($(this).val()) <= 100))

        if( validacao && !$('#error-pr').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-pr">Numero tem que ser entre 1-100</strong>`)
            $('#Calcular').attr('disabled', true); 
            return false
        }

        if( validacao ) {
            $('#Calcular').attr('disabled', true); 
            return false
        }
        
        $('#error-pr').remove();
        $('#Calcular').attr('disabled', false);
    })

     /**
     * Show error message for velcidade de fluxo livre
     */
     $("#FFS").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= 90) || !(parseFloat($(this).val()) <= 120));

        if( validacao && !$('#error-FFS').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-FFS">Numero tem que ser entre 90-120</strong>`);
            $('#Calcular').attr('disabled', true); 
            return false;

        }

        if( validacao ) {
            $('#Calcular').attr('disabled', true); 
            return false;
        }
        
        $('#error-FFS').remove()
        $('#Calcular').attr('disabled', false);
    })
});
