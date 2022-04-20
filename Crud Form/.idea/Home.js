import React, {useEffect, useState} from "react";

let initialUserData = {
        id:"",
        username: "",
        email: "",
        phone: "",
        gender: "",
        hobby: [],
        city: ""
};
const Home = () => {
    const [tableData, setTableData] = useState([]);
    const [UserData, setUserData] = useState(initialUserData);
    const [Edit, setEdit] = useState(true);
    const[isEditItem,setIsEditItem]=useState(null);

    // page refresh karvi to data add thayela jay ni
    useEffect(() => {
        let array = JSON.parse(localStorage.getItem('listsItems'));
        setTableData(array);
    }, []);

    // data get -> then push(add) -> (array ma get karel te ne set) -> then set in local storage
    // add in localStorage
    function handleAddTask() {
        let array = JSON.parse(localStorage.getItem('listsItems')) || [];
        // console.log('Data from local storage',array);
        // console.log('Storage data', array.push(UserData));
        array.push(UserData);
        //form ma add
        setTableData(array);
        localStorage.setItem('listsItems', JSON.stringify(array));
        setUserData((preState)=>({...preState,...initialUserData}));
        // console.log(handleAddTask);
        //reset the gender filed with submit button
        document.getElementsByName('gender').forEach((item)=>{
            document.getElementById(item.id).checked = false;
        });
        //reset the hobby filed with submit button
        document.getElementsByName('hobby').forEach((item)=>{
            document.getElementById(item.id).checked =false;
        });
    }

    //delete the items
    const removeHandler = (id) => {
        // console.log("username", username)
        // console.log("tableData",tableData);
        // let deleteData = tableData.filter(UserData => UserData.id !== id);
        let tempArray = tableData;
        tempArray.splice(id,1);
        setTableData(()=>([...tempArray]));
        localStorage.setItem('listsItems', JSON.stringify(tempArray));
        // console.log(deleteData);
       alert("do you want to delete this filed");
    };

    //form details remove it
    // const removeAll = ()=>{
    //     setTableData([])
    // };

    // reset the form
    const resetData = () => {
        setUserData(
            {
                id:"",
                username: "",
                email: "",
                phone: "",
                gender: "",
                hobby: "",
                city: ""
            }
        );
        //reset the gender filed
        document.getElementsByName('gender').forEach((item)=>{
            // console.log('++++++++++++++', document.getElementById(item.id));
            // console.log("id ---- ",item.id);
            document.getElementById(item.id).checked = false;
        });
        //reset the hobby filed
            document.getElementsByName('hobby').forEach((item)=>{
                // console.log('++++++++++++++', document.getElementById(item.id));
                // console.log("id ---- ",item.id);
                document.getElementById(item.id).checked = false;
            });
    };

    // Edit the items
    const editHandler = (index) => {
        let newEditItem = tableData.find((item) => item.id !== index);
        console.log(newEditItem);
        setEdit(false);
        setUserData(newEditItem.username);
        setIsEditItem(index);

        // let editData = JSON.parse(localStorage.getItem('listsItems'));
        // console.log("edit data----------->", editData);
        // setTableData(editData);
        // setUserData({
        //     username: editData.username,
        //     email: editData.email,
        //     phone: editData.phone,
        //     gender: editData.gender,
        //     hobby: editData.hobby,
        //     city: editData.city
        // })

        // const newContacts = [...tableData];
        // const index = UserData.findIndex((index) => index.id === setEdit);
        // newContacts[index] = editHandler;
        // setTableData(UserData);
        // setEdit(null);

    };





    // spread previous value show kare name,email etc...
    // useState() hooks update for object(multiple one time)
    const dataChange = (e) => {
        // console.log(name);
        const {name, value} = e.target;
        setUserData({
            ...UserData,
            [name]: value
        });
    };

    // multiple hobby set
    const handelHobbyValue = (e) => {
        // console.log("log of Hobby",e.target.value);
        // console.log("log of Hobby",e.target.checked);
        let value = UserData.hobby || [];
        if (e.target.checked) {
            value.push(e.target.value);
        } else {
            value = UserData.hobby.filter((item) => item !== e.target.value);
        }
        setUserData((preState) => ({
            ...preState,
            hobby: value,
        }))
    };
    return (
        <>
            <div className="container col-sm-10 py-md-4 text-center" id="form">
                <div>
                    {/*<h1> {id ?"Edit":"Add"} :Login Form: </h1>*/}
                    <h1>  :Login Form: </h1>
                    <div className="ui dropdown-divider"></div>
                    <div className="ui form">

                        <div className="username">
                            <label> Username: </label>
                            <input type="text" name="username" placeholder="Enter Your UserName" onChange={dataChange}
                                   value={UserData.username}/> <br/>
                        </div>

                        <div className=" email mt-3">
                            <label> Email: </label>
                            <input type="text" name="email" placeholder="Enter Your Email" onChange={dataChange}
                                   value={UserData.email}/>
                        </div>

                        <div className=" phone mt-3">
                            <label> PhoneNo: </label>
                            <input type="number" name="phone" placeholder="Enter Your phoneNo" onChange={dataChange}
                                   value={UserData.phone}/>
                        </div>

                        <div className="gender mt-3">
                            <label> Gender: </label>
                            <label htmlFor="male" className="radio">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={dataChange}
                                    id='male'
                                />
                                    Male </label>
                            <label htmlFor="female" className="radio">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={dataChange}
                                    id='female'
                                />
                                     Female
                            </label>
                            <label htmlFor="other" className="radio">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    onChange={dataChange}
                                    id='other'
                                />
                                Other
                            </label> <br/>
                        </div>

                        <div className="field mt-3">
                            <label> Hobby: </label>
                            <label htmlFor="reading" className="checkbox"><input type="checkbox" name="hobby"
                                                                                 value="reading"
                                                                                 onChange={handelHobbyValue}
                                                                                 id='reading'
                                                                                /> Reading
                            </label>
                            <label htmlFor="writing" className="checkbox"><input type="checkbox" name="hobby"
                                                                                 value="writing"
                                                                                 onChange={handelHobbyValue}
                                                                                 id='writing'
                                                                                /> Writing
                            </label>
                            <label htmlFor="dancing" className="checkbox"><input type="checkbox" name="hobby"
                                                                                 value="dancing"
                                                                                 onChange={handelHobbyValue}
                                                                                 id='dancing'
                                                                                /> Dancing
                            </label>
                            <label htmlFor="traveling" className="checkbox"><input type="checkbox" name="hobby"
                                                                                   value="traveling"
                                                                                   onChange={handelHobbyValue}
                                                                                   id='traveling'
                                                                                /> Traveling
                            </label>
                        </div>

                        <div className="field mt-3">
                            <label> City: </label>
                                <select name="city" value={UserData.city} onChange={dataChange}>
                                    <option selected="">--select city--</option>
                                    <option value={"surat"}>Surat</option>
                                    <option value={"vapi"}>Vapi</option>
                                    <option value={"vadodra"}>Vadodra</option>
                                </select>
                        </div>
                        <div className="field mt-3">
                            {
                                Edit ?  <button  onClick={handleAddTask} className="btn btn-primary mr-1"> Submit </button> :
                                   < button onClick={handleAddTask} className="btn btn-primary mr-1"> Edit</button>
                            }

                            <button  onClick={resetData} className="btn btn-danger">Reset</button>
                            {/*<button onClick={removeAll}> Remove All</button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="table container container-fluid text-center">
                <table>
                    <tr>
                        <th> No </th>
                        <th> Username</th>
                        <th> Email</th>
                        <th> PhoneNo</th>
                        <th> Gender</th>
                        <th> Hobby</th>
                        <th> City</th>
                        <th> Action</th>
                    </tr>
                    {/*//table ma add */}
                    {tableData?.map((item,index,id) =>
                        <tr>
                            <td> {index+1} </td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.gender}</td>
                            <td>{item.hobby}</td>
                            <td>{item.city}</td>
                            <td>
                                <button onClick={() => editHandler(index)}> Edit</button>
                                <button onClick={() => removeHandler(index)}> Delete</button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        </>
    );
};
export default Home;


// const[username,setUsername]=useState();
// const[email,setEmail]=useState();
// const[phone,setPhone]=useState();
// const[gender,setGender]=useState();
// const[hobby,setHobby]=useState();
// const[city,setCity]=useState();

// const userChange=(e)=>{
//     setUserData(e.target.value);
//     console.log(name);
// };
// const emailChange=(e)=>{
//     setUserData(e.target.value);
//     console.log(name);
// };
// const phoneChange=(e)=>{
//     setUserData(e.target.value);
//     console.log(name);
// };
// const genderChange=(e)=>{
//     setUserData(e.target.value);
//     console.log(name);
// };
// const HobbyChange=(e)=>{
//     setUserData(e.target.value);
//     console.log(name);
// };
// const cityChange=(e)=>{
//     setUserData(e.target.value);
//     console.log(name);
// };

//To get the data from localStorage(to console)
// const values=JSON.parse(localStorage.getItem('listsItems'));
// console.log(values);

// remove all the data stored in LocalStorage, use the clear() function
// localStorage.clear();

//add data on localStorage
//  useEffect(() => {
//      localStorage.setItem('listsItems',JSON.stringify(UserData));
//  }, [UserData]);

// retrieve the same data
// const UserData = JSON.parse(localStorage.getItem('listsItems'));

// if (edit) {
//     let copy = Users;
//     Object.assign(copy[active], user);
//     setUsers([...copy]);
//     setEdit(false);
//     setActive(null);
// } else {
//     setUsers([...Users, user]);
// }
// setName("");
// setEmailid("");
// setMobileno("");
// setGender("");
// setHobby(" ");
// };
// const onEditClick = (index) => {
//     const user = Users[index];
//     setName(user.name);
//     setEmailid(user.email);
//     setMobileno(user.mobileno);
//     setGender(user.gender);
//     setHobby(user.hobby);
//     setActive(index);
//     setEdit(true);
// };
// edit and update

//     resetData.gender = "";
//     gender.forEach((item) => {
//         if (item.checked == true) {
//             data.gender = item.value;
//             console.log(genderlist);
// ​   }
//     });

// const [gender, setGender] =useState();
// const resetRadioState = () => {
//     setGender('');
// };

// resetData() = (e) => {
//         setUserData({
//         selectedValue : ''
//     })
// };

//reset alag thi useeffect thi and reset ma j sathe pan thay ae upar karel che
//reset the hobby and gender
// useEffect(()=>{
// console.log("----------->",document.getElementsByName('hobby'));
// console.log("----------->",document.getElementsByName('hobby')[0]);
// console.log("Here ib UseEffect");
// if(UserData.gender === '' && UserData.hobby === []){
//     document.getElementsByName('hobby').forEach((item)=>{
//         console.log('++++++++++++++', document.getElementById(item.id));
//         // console.log("id ---- ",item.id);
//         document.getElementById(item.id).checked = false;
//     })
// }
// },[UserData]);

{/*<h1 className='text-center'> {id ?"Edit":"Add"} Users</h1>*/}
{/*9:38*/}
{/*<input class="form-check-input" type="radio" name="gender" id="male" value='male' onChange={(e) =>
setUser({ ...user, [e.target.name]: e.target.value })} checked={user.gender === 'male' ? true : false} />*/}
{/*<label class="form-check-label" for="male">*/}
{/*    Male*/}
{/*</label>*/}

{/*9:38*/}
{/*<div className="form-check form-check-inline">*/}
{/*    <input className="form-check-input" type="checkbox" id="Cricket" value="Cricket" name='hobby' onChange={handelHobbyValue} checked={user&&user.hobby.filter((e)=>(e==="Cricket"))[0]==='Cricket'?true:false}/>*/}
{/*<label className="form-check-label" for="Cricket">Cricket</label>*/}
{/*</div>*/}

{/*9:39*/}
{/*const { id } = useParams();*/}
{/*useEffect(() => {*/}
{/*    if (id) {*/}
{/*        let obj = JSON.parse(localStorage.getItem('Users'));*/}
{/*        console.log("________________________", obj[id]);*/}
{/*        setUser({*/}
{/*            fname: obj[id].fname,*/}
{/*            lname: obj[id].lname,*/}
{/*            mNumber: obj[id].mNumber,*/}
{/*            city: obj[id].city,*/}
{/*            gender: obj[id].gender,*/}
{/*            hobby: obj[id].hobby,*/}
{/*        })*/}
{/*    }*/}
{/*}, [id])*/}









