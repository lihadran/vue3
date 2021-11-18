import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://yapi.smart-xwork.cn/mock/102224/wealipay',
    headers: {
        apikey: '896efb2f1a4e41a228b96868dc37ac24e41cf072cc743d6cce9d8efd113ce0f5'
    }
})
export default axios