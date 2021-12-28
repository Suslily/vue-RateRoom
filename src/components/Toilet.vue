
<script>
import { Bar } from 'vue-chartjs';
// ctx.canvas.height = 280;

export default {
  extends: Bar,
  name: 'chart',
  data () {
    return {
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Monday', 'Saturday','Sunday'],
        datasets: [
          {
            label: '今週のトイレの回数',
            data: [10, 20, 30, 40, 50, 30,10,20],
            backgroundColor: '#7cfc00',
            borderColor:'#00fa9a',
            borderWidth: 1,
          },
        //   {
        //     label: 'Line Dataset',
        //     data: [10, 50, 20, 30, 30, 40],
        //     borderColor: '#CFD8DC',
        //     fill: false,
        //     type: 'line',
        //     lineTension: 0.3,
        //   }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style lang="scss" scoped>
#bar-chart{
    max-width: 680px !important;
    width: 100% !important;
    height: auto !important;
    margin: 0 auto;
    padding-left: 1.3em;
}
</style>