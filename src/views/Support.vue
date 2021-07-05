<template>
  <v-container
    id="support-view"
    fluid
    tag="section"
  >
    <view-intro
      heading="目前支持的协议和流量样本"
      link="styles/typography"
    />
    <!--支持协议-->
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
      >
        <material-card
          color="blue"
          full-header
        >
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                支持协议
              </div>
              <div class="text-caption">
                共{{ protocol.length }}种
              </div>
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="protocolHeaders"
              :items="protocol"
            />
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
    <!--已采集的流量样本-->
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
      >
        <material-card
          color="orange"
          full-header
        >
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                已采集的流量样本
              </div>
              <div class="text-caption">
                共{{ sampleTraffic.length }}个
              </div>
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="trafficHeaders"
              :items="sampleTraffic"
            />
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { getProtocolList, getTrafficList } from '@/api/support'
  export default {
    name: 'SupportView',

    data: () => ({
      protocolHeaders: [
        {
          sortable: false,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
      ],
      trafficHeaders: [
        {
          sortable: false,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
      ],
      protocol: [],
      sampleTraffic: [],
    }),
    mounted(){
      this.getProtocolList()
      this.getTrafficList()
    },
    methods: {
      async getProtocolList(){
        let { data } = await getProtocolList();
        this.protocol = data;
      },
      async getTrafficList(){
        let { data } = await getTrafficList();
        this.sampleTraffic = data;
      }
    }
  }
</script>
