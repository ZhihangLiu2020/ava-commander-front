<template>
  <v-container
    id="scence-manage-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <view-intro
        heading="测试场景管理"
        link="components/simple-tables"
      />
      <v-col
        cols="12"
        md="12"
      >
        <material-card
          color="orange"
          full-header
        >
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                测试场景列表
              </div>
              <div class="text-caption">
                共{{ scence.length }}种测试场景
              </div>
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="scenceHeaders"
              :items="scence"
            />
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ScenceManageView',
    data: () => ({
      scence: [
        {
          id: 1,
          name: 'xxx并发测试',
          description: '用于测试并发xxx设备抗压能力',
          operate: '编辑',
        },
        {
          id: 2,
          name: 'xxx并发测试',
          description: '用于测试并发xxx设备抗压能力',
          operate: '编辑',
        },
      ],
      scenceHeaders: [
        {
          text: '序号',
          value: 'id',
        },
        {
          text: '名称',
          value: 'name',
        },
        {
          text: '场景描述',
          value: 'description',
        },
        {
          text: '操作',
          value: 'operate',
        },
      ],
    }),
  }
</script>
