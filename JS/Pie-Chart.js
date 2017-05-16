function Chart1() {
    Chart.defaults.global.animation.duration = 9500;
    Chart.defaults.global.defaultFontSize = 24;
    Chart.defaults.global.legend.position = 'bottom';
    var chart = $("#PieChart1");
    var data = new Chart(chart, {
        type: "doughnut",
        data: {
            labels: ["קואליציה - 67", "אופוזיציה - 53"],
            datasets: [{
                data: [67, 53],
                backgroundColor: ["#2fa843", "#b20326", ],
                hoverBackgroundColor: ["#1b962f", "#91011e", ],
                hoverBorderWidth: [5, 5],
                borderColor: "black",
            }]
        },
        options: {
            maintainAspectRatio: true,
            responsive: true,
            legend: {
                labels: {
                    fontSize: 30,
                    boxWidth: 80,
                    padding: 20,
                    fontColor: "#000000",
                }
            },
            cutoutPercentage: "30",
            animation: {
                animateScale: false
            },
        }
    })
};
function Chart2() {
    Chart.defaults.global.animation.duration = 6500; 
    Chart.defaults.global.animation.easing = "linear";
    Chart.defaults.global.defaultFontSize = 24;
     Chart.defaults.global.legend.position = 'bottom';
    var chart = $("#PieChart2");
    var data = new Chart(chart, {
        type: "doughnut",
        data: {
            labels: ["הליכוד-30 ", "המחנה הציוני-24 ", "הרשימה המשותפת-13 ", "יש עתיד-11 ", "כולנו-10 ", " הבית היהודי-8 ", "שס-7 ", "ישראל ביתנו-6 ", "יהדות התורה-6 ", "מרצ-5"],
            datasets: [{
                data: [30, 24, 13, 11, 10, 8, 7, 6, 6, 5],
                backgroundColor: ["#023d84", "#4437a3", "#2bafa7", "#289122", "#990000", "#b2ae30", "#b28e39", "#7f6f48", "#8c8577", "#9435a5"],
                hoverBackgroundColor: ["#025ece", "#5b4eb7", "#42f4e2", "#3aa535", "#91011e", "#c1bd43", "#c19e4d", "#ad9969", "#ada593", "#ae43c1"],
                hoverBorderWidth: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, ],
                borderColor: "black"
            }]
        },
        options: {
            rotation:-0.75 * Math.PI,
            maintainAspectRatio: true,
            responsive: true,
            legend: {
                labels: {
                    usePointStyle:true,
                    fontSize: 14,
                    boxWidth: 20,
                    padding:14,
                    fontColor: "#000000",
                }
            },
            cutoutPercentage: "40",
            animation: {
                animateScale: false
            },
        }
    })
};