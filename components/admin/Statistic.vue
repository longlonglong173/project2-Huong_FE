<template>
  <div class="statistic-list">
    <div class="font-64 text-center">Thống kê</div>
    <!-- <Modal
      :value="isOpenModalEditTicket"
      modalClass="flex-center"
      bodyClass=""
      @close="closeDetailHandler()"
    >
      <EditTicket
        :ticket="ticketDetail"
        @close="closeDetailHandler()"
        @update="getData()"
        @delete="getData()"
      />
    </Modal> -->

    <!-- add ticket -->
    <!-- <Modal
      :value="isOpenModalAddTicket"
      modalClass="flex-center"
      bodyClass=""
      @close="closeDetailHandler()"
    >
      <AddTicket
        :ticket="ticketDetail"
        @close="closeDetailHandler()"
        @update="getData()"
        @success="getData()"
      />
    </Modal> -->
    <div class="chart-list w-100 mt-5">
      <h2>1) Thống kê số lượng đặt vé của các tour</h2>
      <select v-model="chartIdSelected" class="border-gray">
        <option value="1">Biểu đồ miền</option>
        <option value="2">Biểu đồ cột</option>
      </select>
      <LineChart
        v-if="isLoadedChart && chartIdSelected == '1'"
        :chartdata="byId.chartData"
        :options="byId.options"
        class="line-chart"
      />
      <ColumnChart
        v-if="isLoadedChart && chartIdSelected == '2'"
        :chartdata="byId.chartData"
        :options="byId.options"
        class="line-chart"
      />
      <hr />
      <!--  -->
      <h2 class="mt-5">2) Thống kê số lượng đặt vé của từng địa điểm</h2>
      <select v-model="chartLocationSelected" class="border-gray">
        <option value="1">Biểu đồ miền</option>
        <option value="2">Biểu đồ cột</option>
      </select>
      <LineChart
        v-if="isLoadedChart && chartLocationSelected == 1"
        :chartdata="byLocation.chartData"
        :options="byLocation.options"
        class="line-chart"
      />
      <ColumnChart
        v-if="isLoadedChart && chartLocationSelected == 2"
        :chartdata="{ ...byLocation.chartData }"
        :options="{ ...byLocation.options }"
        class="line-chart"
      />
      <hr />
      <!--  -->
      <h2 class="mt-5">3) Thống kê số lượng đặt vé của từng quý</h2>
      <select v-model="chartMonthSelected" class="border-gray">
        <option value="1">Biểu đồ miền</option>
        <option value="2">Biểu đồ cột</option>
      </select>
      <LineChart
        v-if="isLoadedChart && chartMonthSelected == 1"
        :chartdata="byMonth.chartData"
        :options="byMonth.options"
        class="line-chart"
      />
      <ColumnChart
        v-if="isLoadedChart && chartMonthSelected == 2"
        :chartdata="{ ...byMonth.chartData }"
        :options="{ ...byMonth.options }"
        class="line-chart"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FORMAT } from '~/plugins/mixin'
import EditTicket from '~/components/admin/EditTicket.vue'
import AddTicket from '~/components/admin/AddTicket.vue'
import LineChart from './chart/LineChart.vue'
import ColumnChart from './chart/ColumnChart.vue'

export default {
  components: {
    EditTicket,
    AddTicket,
    LineChart,
    ColumnChart,
  },
  data() {
    return {
      ticketList: null,
      isOpenModalEditTicket: false,
      isOpenModalAddTicket: false,
      ticketDetail: null,
      byId: {},
      byLocation: {},
      byMonth: {},
      chartIdSelected: '1',
      chartLocationSelected: '1',
      chartMonthSelected: '1',
      isLoadedChart: false,
    }
  },
  mixins: [FORMAT],
  async created() {
    const res = await this.statistic()
    if (res.success) {
      this.byId = {
        chartData: {
          labels: res.data.byId.data.map((d) => {
            return `[${d.tour.ma}]-${d.tour.ten}`
          }),
          datasets: [
            {
              label: 'Số lượng vé của tour',
              borderColor: '#ddd',
              borderWidth: 5,
              // fill: false,
              pointRadius: 8,
              pointHoverRadius: 6,
              pointBackgroundColor: 'yellow',
              pointHoverBorderColor: '#303030',
              data: res.data.byId.data.map((d) => d.count),
            },
          ],
        },
        options: {
          // maintainAspectRatio: false,
          responsive: true,
          tooltips: {
            titleFontColor: 'orange',
            bodyFontColor: 'brown',
            backgroundColor: 'gray',
          },
        },
      }
      this.byLocation = {
        chartData: {
          labels: res.data.byLocation.data.map((d) => d.tour.diaDiem),
          datasets: [
            {
              label: 'Số lượng vé của điểm du lịch',
              borderColor: '#ddd',
              borderWidth: 5,
              // fill: false,
              pointRadius: 8,
              pointHoverRadius: 6,
              pointBackgroundColor: 'yellow',
              pointHoverBorderColor: '#303030',
              data: res.data.byLocation.data.map((d) => d.count),
            },
          ],
        },
        options: {
          // maintainAspectRatio: false,
          responsive: true,
          tooltips: {
            titleFontColor: 'orange',
            bodyFontColor: 'brown',
            backgroundColor: 'gray',
          },
        },
      }
      this.byMonth = {
        chartData: {
          labels: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'],
          datasets: [
            {
              label: 'Số lượng vé theo mỗi quý',
              borderColor: '#ddd',
              borderWidth: 5,
              // fill: false,
              pointRadius: 8,
              pointHoverRadius: 6,
              pointBackgroundColor: 'yellow',
              pointHoverBorderColor: '#303030',
              data: [
                res.data.byMonth.data['0'].count,
                res.data.byMonth.data['1'].count,
                res.data.byMonth.data['2'].count,
                res.data.byMonth.data['3'].count,
              ],
            },
          ],
        },
        options: {
          // maintainAspectRatio: false,
          responsive: true,
          tooltips: {
            titleFontColor: 'orange',
            bodyFontColor: 'brown',
            backgroundColor: 'gray',
          },
        },
      }
      this.isLoadedChart = true
    }
  },
  methods: {
    ...mapActions({
      statistic: 'common/statistic',
    }),
  },
}
</script>

<style lang="scss">
.line-chart {
  width: 45%;
}

.border-gray {
  border-radius: 0.25rem;
  border: calc(1rem / 16) solid #333;
}
</style>
