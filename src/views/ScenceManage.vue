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
            >
            <template v-slot:[`item.operate`]="{item}">
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
                  color="blue"
                  @click="handleUpload(item)"
                  
                >
                  编辑
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
          </v-card-text>
        </material-card>
      </v-col>
      <v-col
        cols="12"
      >
        <v-file-input
          @change="handleUpload"
        ></v-file-input>
        <v-btn @click="handleDownload">下载</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import { getScence, downLoad } from '@/api/scenceManage'
  export default {
    name: 'ScenceManageView',
    data: () => ({
      scence: [],
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
    mounted(){
      this.getScence()
    },
    methods: {
      // 上传文件
      handleUpload(file){
        if(file){
          const formData = new FormData()
          formData.append('file',file)
          axios({
            method: 'post',
            url: '/api/avaCommander/upload',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            data: formData
          }).then(res=>{
            console.log(res)
          })
        }
      },
      // 下载文件
      handleDownload(){
        downLoad({name:'1625475530587.docx'})
        .then(res=>{
          let filename = res.headers['content-disposition'].substr(23,17);
          let blob = new Blob([res.data]);
          let link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = filename
          link.click()
          window.URL.revokeObjectURL(link.href);
          console.log(res)
        })
      },
      // 获取场景列表
      async getScence(){
        let { data } = await getScence();
        this.scence = data
      }
    }
  }
</script>
