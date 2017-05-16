function MakeStarts(x) {
    var span = "";
    if (x == 5) {
        for (star = 1; star <= x; star++) {
            span += "<span class='icon-star-full'></span>";
        };
        return span;
    };
    if (x == 4) {
        for (var emptyStar = 0; emptyStar < 1; emptyStar++) {
            span += "<span class='icon-star-empty'></span>"
        };
        for (star = 1; star <= x; star++) {
            span += "<span class='icon-star-full'></span>";
        };
        return span;
    };
    if (x == 3) {
        for (var emptyStar = 0; emptyStar < 2; emptyStar++) {
            span += "<span class='icon-star-empty'></span>"
        };
        for (star = 1; star <= x; star++) {
            span += "<span class='icon-star-full'></span>";
        };
        return span;
    };
    if (x == 2) {
        for (var emptyStar = 0; emptyStar < 3; emptyStar++) {
            span += "<span class='icon-star-empty'></span>"
        };
        for (star = 1; star <= x; star++) {
            span += "<span class='icon-star-full'></span>";
        };
        return span;
    };
    if (x == 1) {
        for (var emptyStar = 0; emptyStar < 4; emptyStar++) {
            span += "<span class='icon-star-empty'></span>"
        };
        for (star = 1; star <= x; star++) {
            span += "<span class='icon-star-empty'></span>";
        };
        return span;
    };
    if (x == 0) {
        for (star = 4; star >= x; star--) {
            span += "<span class='icon-star-empty'></span>";
        };
        return span;
    };
};