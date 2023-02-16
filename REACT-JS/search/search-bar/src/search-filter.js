import React,{useEffect,useState} from 'react'
export default function Searchfilter(){
    const [data,setData]=useState([]);
    const[searchApiData,setSearchApiData]=useState([]);
    const[filterVal,setFilterVal]=useState('');
useEffect(()=>{
    const fetchData=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(json=>{
            setData(json)
            setSearchApiData(json)

        })

    }
    fetchData();
},[])
const handleFilter=(e)=>{
    if(e.target.value===''){
        setData(searchApiData)
    }
    else{
        const filterResult=searchApiData.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())||item.username.toLowerCase().includes(e.target.value.toLowerCase())||item.email.toLowerCase().includes(e.target.value.toLowerCase()))
        if(filterResult.length>0){
            setData(filterResult)
        }else{
            setData([{"email":"No Data" }])
        }
        setData(filterResult)
    }
    setFilterVal(e.target.value)

}
return(
    <div style={{margin:'20px 20%'}}>
        <div>
            <input type='search' placeholder='Search' value={filterVal} onInput={(e)=>handleFilter(e)}/>
        </div>
        <table>
            <th>name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>

            {
              data.map(item=>{
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>

                    </tr>
                )
              })  
            }
        </table>
    </div>
)

}
