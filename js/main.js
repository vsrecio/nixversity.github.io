(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
    // Form submission handling for careers
    $('#careerForm').on('submit', function (e) {
        e.preventDefault();
        
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var telefono = $('#telefono').val();
        var posicionVal = $('#posicion').val();
        var linkedin = $('#linkedin').val();
        var github = $('#github').val() || 'No proporcionado';
        var mensaje = $('#mensaje').val();
        
        var posicionText = "General / Otra";
        if (posicionVal === 'go_engineer') posicionText = "Senior Go Engineer";
        if (posicionVal === 'cloud_architect') posicionText = "Cloud Native Architect";
        if (posicionVal === 'sre_engineer') posicionText = "SRE / Platform Engineer";
        
        var subject = "Postulación Nixversity - " + posicionText;
        
        var body = "Hola Nixversity,\n\n";
        body += "He completado el formulario de postulación técnica para la vacante de: " + posicionText + ".\n\n";
        body += "Mis datos de contacto y perfiles profesionales son:\n";
        body += "- Nombre Completo: " + nombre + "\n";
        body += "- Correo Electrónico: " + email + "\n";
        body += "- Teléfono / WhatsApp: " + telefono + "\n";
        body += "- Perfil de LinkedIn: " + linkedin + "\n";
        body += "- Perfil de GitHub / Portafolio: " + github + "\n\n";
        body += "Carta de Presentación y Experiencia:\n";
        body += mensaje + "\n\n";
        body += "Atentamente,\n" + nombre;
        
        var mailtoUrl = "mailto:hello@nixversity.com" +
                        "?subject=" + encodeURIComponent(subject) +
                        "&body=" + encodeURIComponent(body);
        
        // Open mail client
        window.location.href = mailtoUrl;
        
        // Show success alert and reset form
        alert('¡Gracias por tu postulación! Se abrirá tu cliente de correo para enviar los datos a hello@nixversity.com.');
        this.reset();
    });
    
    // Form submission handling for diagnostics booking
    $('#diagnosticoForm').on('submit', function (e) {
        e.preventDefault();
        
        var nombre = $('#diag_nombre').val();
        var email = $('#diag_email').val();
        var empresa = $('#diag_empresa').val();
        var telefono = $('#diag_telefono').val();
        var servicioVal = $('#diag_servicio').val();
        var plataforma = $('#diag_plataforma').val();
        var fecha = $('#diag_fecha').val();
        var hora = $('#diag_hora').val();
        var mensaje = $('#diag_mensaje').val();
        
        var servicioText = "Consultoría General";
        if (servicioVal === 'arquitectura') servicioText = "Diagnóstico de Arquitectura Cloud Native";
        if (servicioVal === 'golang') servicioText = "Optimización backend Go & Concurrencia";
        if (servicioVal === 'governance') servicioText = "Gobierno de Nube & Landing Zones";
        if (servicioVal === 'devops') servicioText = "Platform Engineering / GitOps Automation";
        if (servicioVal === 'finops') servicioText = "FinOps & Optimización de Costos Cloud";
        if (servicioVal === 'capacitacion') servicioText = "Capacitación Corporativa de Equipos TI";
        
        var subject = "Solicitud de Levantamiento Técnico - " + empresa;
        
        var body = "Hola Nixversity,\n\n";
        body += "Solicito una sesión de diagnóstico/levantamiento técnico para nuestra empresa. Detalles de la solicitud:\n\n";
        body += "Datos de la Empresa y Contacto:\n";
        body += "- Empresa: " + empresa + "\n";
        body += "- Contacto: " + nombre + "\n";
        body += "- Correo Corporativo: " + email + "\n";
        body += "- Teléfono / WhatsApp: " + telefono + "\n\n";
        body += "Detalles de la Reunión Propuesta:\n";
        body += "- Fecha: " + fecha + "\n";
        body += "- Hora: " + hora + "\n";
        body += "- Servicio Solicitado: " + servicioText + "\n";
        body += "- Ecosistema Tecnológico: " + plataforma + "\n\n";
        body += "Descripción del Proyecto o Desafío Técnico:\n";
        body += mensaje + "\n\n";
        body += "Atentamente,\n" + nombre;
        
        var mailtoUrl = "mailto:hello@nixversity.com" +
                        "?subject=" + encodeURIComponent(subject) +
                        "&body=" + encodeURIComponent(body);
        
        // Open mail client
        window.location.href = mailtoUrl;
        
        // Show success alert and reset form
        alert('¡Solicitud agendada! Se abrirá tu cliente de correo para enviar los detalles a hello@nixversity.com.');
        this.reset();
    });
    
})(jQuery);

