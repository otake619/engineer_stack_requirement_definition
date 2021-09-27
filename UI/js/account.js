var ctx = document.getElementById("categoryChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ["php", "Laravel", "バックエンド", "API"],
    datasets: [{
        backgroundColor: [
            "#BB5179",
            "#FAFF67",
            "#58A27C",
            "#3C00FF"
        ],
        data: [38, 31, 21, 10]
    }]
    },
    options: {
        title: {
            display: true,
            text: 'カテゴリ比率'
        }
    }
});