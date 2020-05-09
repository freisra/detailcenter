$(document).ready(function () {
    
    $("#orcamento").click(function (e) { 
        e.preventDefault();
        $('#exampleModal').modal('show');
    });

    $("#enviar_orcamento").click(function (e) { 
        e.preventDefault();
        swal("Mensagem enviada!", "", "success");
        $('#exampleModal').modal('hide');
    });
});