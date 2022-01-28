// import { useGetUserData } from "./useGetUserData"
// import { postUserPoints } from "../api/api"
import { useState } from "react"

// export const useAddPoints = () => {
//   const pointsUrl = "https://coding-challenge-api.aerolab.co/user/points"
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVhYzcxZWNkZWVjMDAwMWEwNThkYzYiLCJpYXQiOjE2NDI3NzYzNTB9.ZNfBbSO62LgcI6iQbH8YuMPV8jyJYhcyfzpg7hyJFMo"
//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': token
//   }

//   let body = {
//     'amount': 1000
//   }

//   const response = fetch(pointsUrl, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     headers: headers,
//     referrerPolicy: 'same-origin',
//     body: JSON.stringify(body)
//   })

// }

// export const useAddPoints = () => {

//   const [newData, setNewData] = useState({})

//   try {
//     postUserPoints.then(res => res.json()).then(data => setNewData(data)).catch(error => console.log(error))
//   } catch (err) {
//     console.log(err)
//   }

//   return { newData }
// }

