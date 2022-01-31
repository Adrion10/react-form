import {useState} from 'react'

const ColorSlider = () => {

    const [color, SetColor] = useState(rgb (0,0,0))
    return (
        <div>
            
        </div>
    )
}

export default ColorSlider



  return (
    <Flex gap="size-300" wrap>
      <ColorSlider
        label="Hue (uncontrolled)"
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue"
      />
      <ColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue"
      />
    </Flex>
  );
}