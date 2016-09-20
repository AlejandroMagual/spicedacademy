
$(document).ready(function() {

    var frameId = 0;
    var distance = 0;

    // Ajax Request
    $.ajax({
        url: '/links/headlines.json',
        method: 'GET',
        data: {
            limit: 20
        },
        success: function(data) {

            for (var i=0; i<data.length; i++) {
                var element = '<a href="' + data[i].href + '">' + data[i].content + '</a>'
                $('#container').append(element);
            }


            frameId = requestAnimationFrame(newAnimation);


            $('a').on('mouseover', function() {   //  mouseenter
                cancelAnimationFrame(frameId);
            });
            $('a').on('mouseout', function() {   //   mouseleave
                frameId = requestAnimationFrame(newAnimation);
            });

        }
    });

    function newAnimation() {

        $('#container').css({ left: distance + 'px'});
        var width = $('a:first-child').outerWidth();

        if ($('#container').offset().left < -width) {
            var $replacement = $('a:first-child');
            $('a:first-child').remove();
            $('#container').append($replacement);
            distance += width;
            $('#container').css({ left: distance + 'px'});
        };

        distance -= 2;
        frameId = requestAnimationFrame(newAnimation);

    }

});
