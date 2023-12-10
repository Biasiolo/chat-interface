$(document).ready(function () {
    // Variável para rastrear se o chat está aberto ou fechado
    var isOpen = false;

    // Manipulador de evento para o botão de abrir o chat
    $('#open-chat-btn').click(function () {
        isOpen = !isOpen;
        var chatContainer = $('.chat-container');

        // Exibe ou oculta o chat com base no estado atual
        if (isOpen) {
            chatContainer.show();
            scrollToTop();
        } else {
            chatContainer.hide();
        }

        // Adiciona ou remove a classe 'active' no botão de abrir chat
        $('#open-chat-btn').toggleClass('active', isOpen);
    });

    // Manipulador de evento para o botão de fechar o chat
    $('#close-chat-btn').click(function () {
        $('.chat-container').hide();
        isOpen = false;

        // Remove a classe 'active' do botão de abrir chat
        $('#open-chat-btn').removeClass('active');
    });

    // Manipulador de evento para o botão de enviar mensagem
    $('#send-btn').click(function () {
        var userInput = $('#user-input').val();
        if (userInput !== '') {
            // Adiciona a nova mensagem no topo do corpo do chat
            $('#chat-body').prepend('<div class="message">' + userInput + '</div>');
            $('#user-input').val('');
            scrollToTop(); // Rolando para cima após enviar uma mensagem
        }
    });

    // Função para rolar para o topo do corpo do chat com animação
    function scrollToTop() {
        var chatBody = $('#chat-body');
        var newMessageHeight = $('.message:first').outerHeight(true);

        // Animação para rolar para o topo
        chatBody.animate({ scrollTop: chatBody.scrollTop() - newMessageHeight }, 1000);
    }
});
