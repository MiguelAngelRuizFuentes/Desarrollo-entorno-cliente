$(document).ready(() => {
    $('#peliculas').hide();
  
  
    $.ajax({
        type: 'GET',
        url: 'peliculas.json',
        dataType: 'json'
    }).done((data) => {
        $.each(data, function(indice, movies) {
            let fila = $('<tr>');
            fila.append($(`<td>${movies.title}</td>`));
            fila.append($(`<td>${movies.year}</td>`));
            fila.append($(`<td>${movies.genre}</td>`));
            fila.append($(`<td>${movies.director}</td>`));
            $('#peliculas tbody').append(fila);
        });
  
        $('#peliculas').show();
    });
  
  });