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
        <template v-slot:[`item.testManage`]="{item}">
          <v-row>
            <v-btn
              x-small
              color="green"
              @click="handleCheck(item)"
            >
              查看
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
  export default {
    name: 'ResultManageView',
    data: () => ({
      testResult: [
        {
          id: 1,
          testName: '001',
          testTime: new Date().toLocaleDateString(),
          testCreator: 'lzh',
          testManage: '上传',
        },
        {
          id: 2,
          testName: '002',
          testTime: new Date().toLocaleDateString(),
          testCreator: 'lzh',
          testManage: '上传',
        },
      ],
      testResultHeaders: [
        {
          text: '序号',
          value: 'id',
        },
        {
          text: '测试名称',
          value: 'testName',
        },
        {
          text: '测试时间',
          value: 'testTime',
        },
        {
          text: '创建人',
          value: 'testCreator',
          sortable: false,
        },
        {
          text: '操作',
          value: 'testManage',
          sortable: false,
        },
      ],
    }),
  }
</script>
