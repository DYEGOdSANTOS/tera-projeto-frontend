const params = new URLSearchParams(window.location.search)

const id = params.get('id')
$.get( `https://marcustera.pythonanywhere.com/curso/${id}`, function( data ) {
    console.log(JSON.stringify(data));
    $('#data-image').attr('src', data.image);
    $('#data-titulo').html(data.title);
    $('#data-descricao').html(`<span style="white-space: pre-wrap;">${data.description}</span>`);
});