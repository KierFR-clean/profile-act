$(document).ready(function() {
    function valCntForm(event) {
        event.preventDefault();
        const name = $('#myName').val().trim();
        const email = $('#myEmail').val().trim();
        const message = $('#myMessage').val().trim();

        if (name === '' || email === '' || message === '') {
            return false;
        }
        
        swal({
            title: "Success!",
            text: "Message submitted successfully!",
            icon: "success",
            button: "OK",
        }).then((value) => {
           
            $('#contact-form')[0].reset();
        });
    }

    $('#contact-form').on('submit', valCntForm);
});