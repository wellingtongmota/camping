import { Flex } from '@chakra-ui/react'
import ImgDescription from './ImgDescription'
import Wrapper from './Wrapper'

import imgPiscina from '../images/PISCINA_dois.jpg'
import imgSinuca from '../images/SINUCA.jpg'
import imgFutebol from '../images/FUTEBOL.jpg'

const Leisure = (props) => {
  return (
    <Wrapper justify='center' title='Áreas de lazer' {...props}>

      <Flex flexWrap='wrap' w='full' gap={4} justify='space-evenly'>
        <ImgDescription image={imgPiscina} title='Piscina'>
          {/* No retiro de jovens, a piscina é o lugar perfeito para relaxar, refrescar-se e se divertir ao sol. */}
        </ImgDescription>

        <ImgDescription image={imgSinuca} title='Sala de jogos'>
          {/* Descontração e diversão, onde os laços de amizade se fortalecem e as memórias se formam. */}
        </ImgDescription>

        <ImgDescription image={imgFutebol} title='Futebol'>
          {/* Um lembrete de que o esporte é uma forma de se manter ativo e saudável enquanto se diverte. */}
        </ImgDescription>
      </Flex>

    </Wrapper>
  )
}

export default Leisure