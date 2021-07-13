<template>
  <v-container
    id="result-manage-view"
    fluid
    tag="section"
  >
    <!--标题-->
    <view-intro
      heading="测试结果管理"
      link="components/simple-tables"
    />

    <material-card
      full-header
      color="accent"
    >
      <template #heading>
        <div class="pa-8 white--text">
          <div class="text-h4 font-weight-light">
            测试结果列表
          </div>
          <div class="text-caption">
            共{{ testResult.length }}次测试
          </div>
        </div>
      </template>
      <v-data-table
        :headers="testResultHeaders"
        :items="testResult"
      >
        <template v-slot:[`item.createtime`]="{item}">
          {{new Date(item.createtime).toLocaleString()}}
        </template>
        <template v-slot:[`item.testManage`]="{item}">
          <v-row justify="space-around">
            <v-btn
              x-small
              color="green"
              @click="handleCheck(item)"
            >
              查看
            </v-btn>
            <v-btn
              x-small
              color="green"
              @click="handleUpload(item)"
            >
              上传
            </v-btn>
            <v-btn
              x-small
              color="red"
              @click="handleDelete(item)"
            >
              删除
            </v-btn>
          </v-row>
        </template>
      </v-data-table>
    </material-card>
    <div class="py-3" />
  </v-container>
</template>

<script>
  import { getResult } from '@/api/resultManage'
  export default {
    name: 'ResultManageView',
    data: () => ({
      testResult: [],
      testResultHeaders: [
        {
          text: '序号',
          value: 'id',
        },
        {
          text: '测试名称',
          value: 'name',
        },
        {
          text: '测试时间',
          value: 'createtime',
        },
        {
          text: '创建人',
          value: 'creator',
          sortable: false,
        },
        {
          text: '操作',
          value: 'testManage',
          sortable: false,
        },
      ],
    }),
    mounted(){
      this.getResult()
    },
    methods: {
      async getResult(){
        let { data } = await getResult();
        //console.log("结果列表",data)
        this.testResult = data;
      }
    }
  }
</script>
