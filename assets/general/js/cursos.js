function buscarCursos() {
    let descricao = $('#pesquisar').val();
    document.body.style.cursor = "wait";

    $.get( "https://marcustera.pythonanywhere.com/curso/", { descricao: descricao }, function( data ) {
        console.log(data);
        let html = '';
        data.forEach(element => {
            html += `
                    <div class="curso">
                        <div style="background-image: url(${element.image});">
                            <span class="views">
                                <ion-item>
                                    <ion-icon class="icon" name="eye-outline"></ion-icon><span class="text">25.400</span>
                                </ion-item>
                            </span>
                            <span class="matricule-se"><a href="./templates/cursoapresentacao.html?id=${element.id}">Matricule-se</a></span>
                        </div>
                    </div>
                    `            
        });
        
        document.body.style.cursor = "auto";
        $('#cursos').html(html);
    });
   
}

buscarCursos();

$('#btn-pesquisar').click(buscarCursos);