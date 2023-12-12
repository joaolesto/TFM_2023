$(document).ready(function() {

    /**
     * Positive Decimal Numbers
     */
    $("#pt,#pr,#FFS,#berma,#via,#length,#BFFS,#car_volume_d,#car_volume_o,#phf,#SFM").each(function(){
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
    $("#car_volume,#N_vias,#N_acessos,#ldv").each(function(){
        $(this).on('keydown',  function(event) {

            // Handle paste
            if (event.type === 'paste') {
                key = event.clipboardData.getData('text/plain');
            } else {
            // Handle key press
                var key = event.keyCode || event.which;
                key = String.fromCharCode(key);
            }

            return event.keyCode !== 69 && event.keyCode !== 189 && event.keyCode !== 190 && event.keyCode !== 110 && event.keyCode !== 43 && event.keyCode !== 187 && event.keyCode !== 188;

        });
    });

    /**
     * Show error message
     */
    $("#phf").on('focusout', function(event) {

        let validacao = (!(parseFloat($(this).val()) >= 0.82) || !(parseFloat($(this).val()) <= 0.98));

        if( validacao && !$('#error-phf').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-phf">Numero tem que ser entre 0.82-0.98</strong>`)
            return false
        }

        if( validacao ) {
            return false
        }

        $('#error-phf').remove();
    })

    /**
     * Show error message
     */
    $("#N_vias").on('focusout', function(event) {

        let validacao = (!(parseInt($(this).val()) >= 2) || !(parseInt($(this).val()) <= 10));

        if( validacao && !$('#error-N_vias').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-N_vias">Numero tem que ser entre 2-10</strong>`)
            return false

        }

        if( validacao ) {
            return false
        }

        $('#error-N_vias').remove();
    })

    /**
     * Show error message for veiculos pesados
     */
    $("#pt").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= 0) || !(parseFloat($(this).val()) <= 100));

        if( validacao && !$('#error-pt').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-pt">Numero tem que ser entre 0-100</strong>`)

            return false
        }

        if( validacao ) {
            return false
        }

        $('#error-pt').remove();
    })

     /**
     * Show error message for veiculos recriativos
     */
     $("#pr").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= 0) || !(parseFloat($(this).val()) <= 100))

        if( validacao && !$('#error-pr').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-pr">Numero tem que ser entre 0-100</strong>`)
            return false
        }

        if( validacao ) {
            return false
        }

        $('#error-pr').remove();
    })

    /**
     * Show error message for velcidade de fluxo livre
     */
     $("#FFS").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= 90) || !(parseFloat($(this).val()) <= 120));

        if( validacao && !$('#error-FFS').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-FFS">Numero tem que ser entre 90-120km/h</strong>`);
            return false;

        }

        if( validacao ) {
            return false;
        }

        $('#error-FFS').remove()
    })

    /**
     * Show error message for velcidade media no terreno
     */
    $("#SFM").on('focusout', function() {

        let validacao = !(parseFloat($(this).val()) >= 40);

        if( validacao && !$(this).parent().next(".error").length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-FFS">Numero tem que ser superior a 40km/h</strong>`);
            return false;

        }

        if( validacao ) {
            return false;
        }

        $(this).parent().next(".error").remove()
    })

    /**
     * Show error message for limite de velocidade
     */
    $("#ldv,#BFFS").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= 40) || !(parseFloat($(this).val()) <= 125));

        if( validacao && !$(this).parent().next(".error").length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-FFS">Numero tem que ser entre 40-125km/h</strong>`);
            return false;

        }

        if( validacao ) {
            return false;
        }

        $(this).parent().next(".error").remove()
    })

    /**
     * Show error message for inlcinação
     */
    $("#inclinação").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= -10) || !(parseFloat($(this).val()) <= 10));

        if( validacao && !$(this).parent().next(".error").length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-FFS">Numero tem que ser entre -10% a 10%</strong>`);
            return false;

        }

        if( validacao ) {
            return false;
        }

        $(this).parent().next(".error").remove()
    })

    $("#berma").on('focusout', function() {

        let validacao = (!(parseFloat($(this).val()) >= 0) || !(parseFloat($(this).val()) <= 4));

        if( validacao && !$('#error-berma').length && !($(this).val() === '')) {
            $(this).parent().after(`<strong id="error-berma">A berma deve ter um valor entre 0 e 4 metros</strong>`);
            return false;

        }

        if( validacao ) {
            return false;
        }

        $('#error-berma').remove()
    })

    $("#via").on('focusout',function() {
        let validacao = (!(parseFloat($(this).val()) >= 2.75));

        if( validacao && !$(this).parent().next(".error").length && !($(this).val() === '')) {
            $(this).parent().after(`<strong class="error">A largura da via deve ter um valor superior a 2,75m</strong>`);
            return false;
        }

        if( validacao ) {
            return false;
        }

        $(this).parent().next(".error").remove()
    })

    $("#length").on('focusout',function() {
        let validacao = (!(parseFloat($(this).val()) >= 1));

        if( validacao && !$(this).parent().next(".error").length && !($(this).val() === '')) {
            $(this).parent().after(`<strong class="error">A berma deve ter um valor superior a 1km</strong>`);
            return false;
        }

        if( validacao ) {
            return false;
        }

        $(this).parent().next(".error").remove()
    })

    $("#car_volume_d, #car_volume_o").on('focusout',function() {
        let validacao = (!(parseFloat($(this).val()) > 0));

        if( validacao && !$(this).parent().next(".error").length && !($(this).val() === '')) {
            $(this).parent().after(`<strong class="error">O volume de trafego deve ter um valor superior ao número que indicou</strong>`);
            return false;
        }

        if( validacao ) {
            return false;
        }

        $(this).parent().next(".error").remove()
    })
});

