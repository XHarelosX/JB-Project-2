function reverse(x) {
    var o = '';
    o += x[8] += x[9] += x[7] += x[5] += x[6] += x[4] += x[0] += x[1] += x[2] += x[3];
    return o;
}; // אל תכעס עליי אסף, זה רק בשביל להפוך את התאריכים

function detailedRoles(Roles) {
    var ul = $(".UlInfo");
    for (var i = 0; i < Roles.length; i++) {
        var role = $(Roles)[i].text;
        var roleDateStart = "";
        var roleDateEnd = "";
        if (Roles[i].start_date != null) {
            $(".spanVisible").css("visibility", "visible");
            roleDateStart = reverse($(Roles)[i].start_date);
        } else {
            continue;
        }
        if ((Roles[i].end_date) == null) {
            var li3 = $("<span>").text(role + " מתאריך: " + roleDateStart + ".");
            var li = $("<li>").attr("class", "LiInfoRole").append(li3);
            $(".roles").append(li);
            if (Roles[i].end_date != null) {
                var roleDateEnd = reverse($(Roles)[i].end_date);
                var li3 = $("<span>").text(role + " מתאריך: " + roleDateStart + " עד " + roleDateEnd + ".");
                var li = $("<li>").attr("class", "LiInfoRole").append(li3);
                $(".roles").append(li);
            }
        }

    }
};
function linksOfHak(link) {
    $(".Li3Visible").css("visibility", "visible");
    for(i=1;i<link.length;i++){
        var x = link[i].url;
        var y = link[i].title;
       $(".linksOfHak").append($("<li>").attr("class", "spanFont LiWithAInfo"+i).append($("<a>").attr("class","icon-point-left").attr("href",x)));
       $(".LiWithAInfo"+i).append($("<span>").text(" "+y+"."));
    }
}

function committees(comm) {
    $(".Li2Visible").css("visibility", "visible");
    for (i = 0; i < comm.length-1; i++) {
        var x = comm[i][0];
        $(".committees").append($("<span>").attr("class","spanFont").text(x + ", "));
    }
    var last = "וה";
    last += comm[comm.length-1][0] += ".";
    $(".committees").append($("<span>").attr("class","spanFont").text(last));
}


function HakDetails() {
    var HakIconDetails = $(".icon-indent-decrease");
    for (i = 0; i < HakIconDetails.length; i++) {
        $(HakIconDetails[i]).bind("click", function () {
            var par = $(event.target).parent().attr("class");
            $.ajax({
                method: "GET",
                url: "http://oknesset.org/api/v2/member/" + par,
                success: function (data) {
                    $(".DivHakInfo").addClass("HakInfo").html("");
                    var ul = $("<ul>").attr("class", "UlInfo");
                    var pic = $("<img>").attr("src", data.img_url).attr("class", "hakPic");
                    var liPic = $("<li>").attr("class", "LiInfo").append(pic);
                    var li1 = $("<li>").attr("class", "LiInfo").append($("<span>").text("שם:   " + data.name));
                    var li2 = $("<li>").attr("class", "LiInfo").append($("<span>").text("מפלגת:   " + data.party_name + " במקום ה- " + data.current_position + "."));
                    ul.append(liPic).append(li1);
                    if (data.date_of_birth != null) {
                        var li3 = $("<li>").attr("class", "LiInfo").append($("<span>").text("תאריך לידה: " + reverse(data.date_of_birth) + "."));
                        ul.append(li3);
                    }
                    ul.append(li2);
                    var li4 = $("<li>").attr("class", "LiInfo").append($("<span>").text("הצטרף לכנסת בתאריך: " + reverse(data.start_date) + "."));
                    ul.append(li4);
                    if (data.current_role_descriptions != null) {
                        var li5 = $("<li>").attr("class", "LiInfo").append($("<span>").text("תפקיד נוכחי: " + data.current_role_descriptions + "."));
                        ul.append(li5);
                    }
                    var li6Span = $("<span>").attr("class", "spanVisible").text("תפקידי עבר: ");
                    var li6 = $("<li>").attr("class", "LiInfo");
                    ul.append($("<div>").attr("class", "roles").append(li6Span).append(li6));
                    ul.append($("<div>").attr("class", "committees").append($("<li>").attr("class", "Li2Visible").text("השתתף בועדות: ")));
                    $(".HakInfo").append(ul);
                    detailedRoles($(data.detailed_roles));
                    committees($(data.committees));
                    var li7 = $("<li>").attr("class", "LiInfo").append($("<span>").attr("class","spanFont").text("אימייל: ")).append($("<a>").attr("href","mailto:"+data.email).text(data.email));
                     ul.append(li7);
                     ul.append($("<div>").attr("class", "linksOfHak").append($("<li>").attr("class", "Li3Visible").text("לינקים: ")));
                     linksOfHak($(data.links));
                }
            });
        })
    }
};