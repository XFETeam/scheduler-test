const axios = require('axios');
const parser = require("@xfe-team/http-request-text-parser").default;

function notifyEnterpriseRobot(message) {
  axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=24d3395a-9c3b-44b8-9866-9b3a913edbc9', {
    "msgtype": "text",
    "text": {
      "content": message
    }
  })
}

notifyEnterpriseRobot(`[${new Date()}]: 测试`);

const result = parser(
  `POST https://api.golink.com/wx/ajax-speed-card-receive HTTP/1.1
Host: api.golink.com
Connection: keep-alive
Content-Length: 0
Accept: application/json, text/javascript, */*; q=0.01
Origin: https://api.golink.com
X-Requested-With: XMLHttpRequest
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36 QBCore/4.0.1301.400 QQBrowser/9.0.2524.400 Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2875.116 Safari/537.36 NetType/WIFI MicroMessenger/7.0.5 WindowsWechat
Referer: https://api.golink.com/wx/once-card
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.5;q=0.4
Cookie: advanced-frontend=g2i78a3je5nupbd7q7hkl85i8r; __tins__20201607=%7B%22sid%22%3A%201588779271395%2C%20%22vd%22%3A%2013%2C%20%22expires%22%3A%201588782684566%7D; __51cke__=; __51laig__=13`
);

axios.post(
  result.url,
  result.data,
  {
    headers: result.headers
  }
).then(response=> {
  notifyEnterpriseRobot(JSON.stringify(response.data));
}).catch(error=> {
  notifyEnterpriseRobot(JSON.stringify(error.message));
});
