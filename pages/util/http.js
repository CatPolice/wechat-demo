import {config} from '../config.js'

const tips = {
  1:'抱歉遇到一个错误',
  1005:'appkey 无效',
  3000:'内容不存在'
}

class HTTP{
  request(params){

    if(!params.method){
      params.method = "GET"
    }

    wx.request({
      url: config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{

        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          params.success(res)
        }else{
          this._show_error(res.data.error_code)
        }
        
      },
      fail:(error)=>{
        this._show_error(1)
      }
    })
  }
  _show_error(error_code) {
    wx.showToast({
      title: tips[error_code],
      icon:'none'
    })
  }
}

export {HTTP}