import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";


export function Main() {
    const [data, setData] = useState({});
    const [pages, setPages] = useState([]);
    const [page, setPage] = useState(1);
    const [type, setType] = useState("none");
    const [capacity, setCapacity] = useState("none");

    useEffect(() => {
        async function getData() {
            const res = await fetch(`http://localhost:3000/?page=${+page}&type=${type}&capacity=${capacity}`);
            setData(await res.json());
        }
        getData();
        handleData();

    }, [page, capacity, type]);

    const handleData = () => {
        console.log(data);
        var arr = [];
        for (var i = 1; i <= data?.count; i++) {
            arr.push(i);
        }
        setPages(arr);
        console.log(arr);
        setPage(data?.currentPage);
    }

    return <Div>
        <h2>Current Vehicle Listing</h2>
        <Search>
            <div>
                <label htmlFor="registration">Registration No:</label>
                <input type="text" name="search" placeholder="Enter Number" />
                <button>Search</button>
            </div>
            <div>
                <label htmlFor="filter">Filter by type</label>
                <select onChange={({ target }) => setType(target.value)} name="filter" >
                    <option value="none">None</option>
                    <option value="bus">Bus</option>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                </select>
            </div>
            <div>
                <label htmlFor="sort">Sort by Capacity</label>
                <select onChange={({ target }) => setCapacity(target.value)} name="sort">
                    <option value="none">None</option>
                    <option value="ascend">Ascending</option>
                    <option value="desend">Decending</option>
                </select>
            </div>
        </Search>
        <div>
            {data?.vehicle?.map(v => (
                <Div2 key={v._id}>
                    <img src={v.image} alt="v" />
                    <div>
                        <h3>{v.make} {v.model}</h3>
                        <div>Year: {v.year}</div>
                        <div>Total Trips: </div>
                    </div>
                </Div2>
            ))}
        </div>
        <Page>
            <button onClick={() => setPage(page - 1)}>Prev</button>

            {pages.map(el => (
                <button onClick={(e) => setPage(e.target.innerHTML)} key={el}>{el}</button>
            ))}
            <button onClick={() => setPage(page + 1)}>Next</button>

        </Page>
    </Div>
}

const Div = styled.div`
    margin:auto;
    padding: 100px 0px;
    width: 80%;
    &>div:nth-child(3){
        margin-top:30px;
        width:100%;
        display:grid;
        grid: 350px 350px 350px/23.5% 23.5% 23.5% 23.5%;
        grid-gap: 2%;
    }
`;
const Search = styled.div`
    display:flex;
    justify-content:space-between;
    background-color:black;
    padding:1%;
    color:white;
    align-items:center;
    & >div>label{
        margin-right:10px;
    }
    & >div:nth-child(1){
        width:50%;
    }
    & >div>input{
        width:40%;
        height:25px;
        border-radius:4px;
    }
    & >div>input::placeholder{
        margin: 10px;

    }
    & >div>button{
        height:25px;
        color:white;
        padding: 0px 12px;
        background-color:black;
        border:1px solid white;
        margin: 0px 15px;
        border-radius:4px;
        cursor: pointer;
        transition: all .3s ease;
    }
    & >div>button:hover{
        color:black;
        background-color:white;
    }
`;

const Div2 = styled.div`
    /* height: 150px; */
    box-shadow: 1px 1px 5px gray;
    background-color:#a4ffe963;
    &>img{
        width:100%;
        height: 60%;
        cursor: pointer;
    }
    & div>h3{
        cursor: pointer;
    }
`;

const Page = styled.div`
    width:100%;
    margin-top:10%;
    background-color:black;
    padding: 10px;
    display:flex;
    justify-content:space-around;
    color:white;
    &>button{
        font-size:16px;
        background-color:black;
        color:white;
        padding:4px 10px;
        border: 1px solid white;
        transition: all .3s ease;
        cursor: pointer;
    }&>button:hover{
        background-color:white;
        color:black;
    }
    &>button:active{
        background-color:white;
        color:black;
    }
`;