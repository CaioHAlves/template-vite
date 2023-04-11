import { useTranslation } from 'react-i18next'
import * as SG from '../../components/globalStyledComponents'
import * as S from './styles'

export function InitialPage() {

  const { t } = useTranslation()

  return (
    <SG.Container>
      <S.Title>{t("teste")}</S.Title>
      <S.Paragraph>Ambiente de {import.meta.env.VITE_AMBIENTE}</S.Paragraph>
    </SG.Container>
  )
}
