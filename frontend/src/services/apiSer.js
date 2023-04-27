import axios from "axios"

let myApi = "https://cards-2040.herokuapp.com"

export const API_URL = myApi

export const PER_PAGE = 5

export const doApiGet = async (_url) => {
  try {
    let resp = await axios.get(_url)
    console.log(resp)
    return resp.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const doApiMethod = async (_url, _method, _bodyData) => {
  try {
    let resp = await axios({
      method: _method,
      url: _url,
      data: _bodyData,
      headers: {
        "content-type": "application/json",
        "x-auth-token": localStorage["tok"],
      },
    })
    return resp.data
  } catch (err) {
    console.log(err)
    throw err
  }
}
