import {useState} from 'react'

const Radio = () => {
    const [radio,setRadio ] = useState ('Berlin')
    return (
        <div>
            <input type = 'radio' value = 'Berlin' checked = {radio === 'Berlin'} onChange = {(e) => setRadio(e.target.value)}/>
            <input type = 'radio' value = 'London' checked = {radio === 'London'} onChange = {(e) => setRadio(e.target.value)}/>
            <input type = 'radio' value = 'Paris' checked = {radio === 'Paris'} onChange = {(e) => setRadio(e.target.value)}/>
        </div>
    )
}

export default Radio
