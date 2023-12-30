import { Flex } from '@chakra-ui/react'
import ImgDescription from './ImgDescription'
import Wrapper from './Wrapper'

import imgGincana from '../images/GINCANA.jpg'
import imgFantasia from '../images/FANTASIA.jpeg'
import imgNeon from '../images/NEON.jpg'

const Activities = (props) => {
  return (
    <Wrapper justify='center' title='Atividades' {...props}>

      <Flex flexWrap='wrap' w='full' gap={4} justify='space-evenly'>
        <ImgDescription image={imgGincana} title='Gincana'>
          Não esqueça de trazer aquela roupa velha pra sujar, vamos ter diversas atividades de interação!
        </ImgDescription>

        <ImgDescription image={imgFantasia} title='Festa à fantasia'>
          Festa com tema bíblico, podendo ser personagem, lugares, animais e até objetos citados na Bíblia!
        </ImgDescription>

        <ImgDescription image={imgNeon} title='Festa neon'>
          Traga sua roupa neon, tinta neon,
          o que quiser hahaha!
          Será uma festa com muitas cores.
        </ImgDescription>
      </Flex>
    </Wrapper>
  )
}

export default Activities