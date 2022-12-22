import axios from "axios";
import { BASE_API } from "../../configs/constants/base";

const getTitleNameList = async () => {
  return await axios.get(`${BASE_API}/title?page=0&size=100`)
    .then((res: any) => {
      return res
    })
    .catch((err: any) => {
      return err
    })
}
const getTitleName = async (id: string) => {
  return await axios.get(`${BASE_API}/title/${id}`)
    .then((res: any) => {
      return res
    })
    .catch((err: any) => {
      return err
    })
}
const addTitleName = async (data: any) => {
  return await axios.post(`${BASE_API}/title`, data)
    .then((res: any) => {
      return res
    })
    .catch((err: any) => {
      return err
    })
}
const deleteTitleName = async (id: string) => {
  return await axios.delete(`${BASE_API}/title/${id}`)
    .then((res: any) => {
      return res
    })
    .catch((err: any) => {
      return err
    })
}
const editTitleName = async (id: string, data: any) => {
  return await axios.put(`${BASE_API}/title/${id}`, data)
    .then((res: any) => {
      return res
    })
    .catch((err: any) => {
      return err
    })
}
export {
  getTitleNameList,
  addTitleName,
  deleteTitleName,
  getTitleName,
  editTitleName
}