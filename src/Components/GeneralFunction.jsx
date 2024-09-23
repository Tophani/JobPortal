import axios from "axios"

export const config ={
    headers: {'content-type':'multipart/form-data',
      'Authorization':'Bearer'}
  }
  export const Jobdata =[
    {
    image:'',
    title:'Project Manager',
    company:'Dominos',
    location:'NSUK Nasarawa',
    min_salary:'20',
    max_salary:'500',
    level:'Entry Level',
    id:'1',
    office:'Lagos Unit'
    }
,
    {
        image:'images/job/1.png',
        title:'Graphic Designer',
        company:'Coldstone',
        location:'Wuse 2',
        min_salary:'500',
        max_salary:'1500',
        level:'Expert Level',
        id:'2',
        office:'Abuja Branch'
        }
  ]