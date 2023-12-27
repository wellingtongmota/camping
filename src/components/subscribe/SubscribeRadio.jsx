import { Radio } from '@chakra-ui/react'

const SubscribeRadio = ({ name, value, onChange }) => {

  const handleChange = (e) => onChange(e)
  return (
    <Radio
      name={name}
      onChange={handleChange}
      value={value}
      colorScheme='teal'
    >
      {value}
    </Radio>
  )
}

export default SubscribeRadio