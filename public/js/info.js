AOS.init();
var info = $('.info-inner');
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://numbersapi.com/1/30/date?json',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (index, item) {
                info.append(
                    '<p data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="300"><h6>' + index + ' :</h6><span>' + item + '</span></p>'
                )
            })
        }
    })
});
