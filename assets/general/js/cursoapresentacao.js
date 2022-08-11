const params = new URLSearchParams(window.location.search)

const id = params.get('id')
const login = params.get('login')

$.get( `https://marcustera.pythonanywhere.com/curso/${id}`, function( data ) {
    console.log(JSON.stringify(data));
    $('#data-image').attr('src', data.image);
    $('#data-title').html(data.title);
    $('#data-description').html(`<span style="white-space: pre-wrap;">${data.description}</span>`);
});