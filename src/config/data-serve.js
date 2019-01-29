import fetch from './fetch'

export const getPro = () => fetch('/Bss/QueryPartnerProvince', {},"POST");
export const getOper = (pro) => fetch('/Bss/QueryPartnerByProvince', {Province:pro}, "POST");
export const getQuality = (num) => fetch('/Car/QueryWarrantyInfoByQuery', {Query:num}, "POST");