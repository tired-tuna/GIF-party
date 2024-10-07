$(document).ready(function() {
    $('#search-form').off('submit').on('submit', function(event) {
        event.preventDefault();
        const searchTerm = $('#search-term').val();
  
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=&q=${searchTerm}&limit=25`)
            .then(response => {
                const gifs = response.data.data;
                const randomIndex = Math.floor(Math.random() * gifs.length);
                const gif = gifs[randomIndex];
  
                const img = $('<img>').attr('src', gif.images.fixed_height.url)
                                      .attr('alt', gif.title)
                                      .addClass('img-fluid');
                $('#results').append(img);
            })
            .catch(error => {
                console.error('Error fetching data from GIPHY API:', error);
                $('#results').html('<p>Error fetching data. Please try again later.</p>');
            });
    });
  
    $('#clear-gifs').on('click', function() {
        $('#results').empty(); // Clear all GIFs from the results div
    });
  });
  