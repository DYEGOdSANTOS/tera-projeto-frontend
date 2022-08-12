function buscarCursos() {
    let descricao = $('#pesquisar').val();
    document.body.style.cursor = "wait";

    $.get( "https://marcustera.pythonanywhere.com/curso/", { descricao: descricao }, function( data ) {
        console.log(data);
        let html = '';
        data.forEach(element => {            
            let areas = '';
            element.areas_obj.forEach(area => {
                areas +=    `
                            <button class="btn btn-sm btn-dark mt-1">${area.title}</button>          
                            `
            });
            html += `
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 pt-4">
                        <div class="card h-100">
                            <img src="${element.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="../templates/cursoapresentacao.html?id=${element.id}" class="btn btn-warning fw-bold form-control mb-3">MATRICULE-SE</a>
                                <h5 class="card-title text-center">${element.title}</h5>
                                <div class="text-center">${areas}</div>                        
                            </div>
                        </div>
                    </div>
                    `            
        });

        html += `
                <nav aria-label="Paginação" class="my-4 d-flex">
                    <ul class="pagination mx-auto">
                        <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Próximo</a></li>
                    </ul>
                </nav>
                `
        
        document.body.style.cursor = "auto";
        $('#content').html(html);
    });
   
}

buscarCursos();

$('#btn-pesquisar').click(buscarCursos);