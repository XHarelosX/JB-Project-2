$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://oknesset.org/api/v2/member/?is_current=True",
        success: function (data) {
            paintDOM(data.objects);
            HakDetails();
        }
    });
});

function paintDOM(list) {

    for (var i = 0; i < list.length; i++) {
        var avg = list[i].average_weekly_presence_hours;
        var li = $("<li>").attr("class", list[i].id);
        var divName = $("<div>").html(list[i].name).attr("class", "Div-Hak-Name");
        var divToStars = $("<div>");
        var divStars = "";
        if (avg >= 21) {
            divStars = MakeStarts(5);
        }
        if (avg >= 16 && avg < 21) {
            divStars = MakeStarts(4);
        }
        if (avg >= 11 && avg < 16) {
            divStars = MakeStarts(3);
        }
        if (avg >= 6 && avg < 11) {
            divStars = MakeStarts(2);
        }
        if (avg >= 1 && avg < 6) {
            divStars = MakeStarts(1);
        }
        if (avg == 0 || avg == null) {
            divStars = MakeStarts(0);
        }

        var details = $("<span>").attr("class","icon-indent-decrease");
        li.append(divName).append(divToStars).append(details);
        divToStars.attr("class", "DivStars").append(divStars);

        $(".Hakim-List").append(li);
    }
}