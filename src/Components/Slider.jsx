import {useState} from 'react'

const Slider = () => {
    const [slide, setSlider] = useState(50)
    return (
        <div>
            <input type = 'range' min = '0' max = '100' value ={slide} onChange= {(e)=>setSlider(e.target.value)}/>
        </div>
    )
}
export default Slider
