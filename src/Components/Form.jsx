import  {useState} from 'react'

const Form = () => {

const [formData, setFormData] = useState({name: '', age:'',email:''})
const [search, setSearch] = useState('')
const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
}
const submitHandler = (e)=>{
    e.preventDefault()
    setSearch(formData.name)
}

    return (
        <form>
            <input type= 'text' name ='name' value= {formData.name} placeholder='Enter yore name' onChange = {changeHandler}/>
            <input type= 'text' name ='age' value= {formData.age} placeholder='Enter yore age'  onChange = {changeHandler} />
            <input type= 'text' name ='email' value= {formData.email} placeholder='Enter yore email'  onChange = {changeHandler} /> 
            <button onClick ={submitHandler}>Search</button>
            <p>{search}</p>

        </form>
    )
}

export default Form
