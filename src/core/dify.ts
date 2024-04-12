import axios from 'axios'

const baseUrl = 'https://api.dify.ai/v1'

const apiKey = 'app-X92eXCLkI6Z5y1oEvhM7RVwW'

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
}

const data = {
  inputs: {
    website_url: 'https://www.baidu.com',
  },
  response_mode: 'blocking',
  user: 'workflow01',
  files: null
}

const postDify = () => {
  return axios({
    method: 'post',
    url: `${baseUrl}/workflows/run`,
    headers: headers,
    data: data
  });

}

export default postDify
