import { Redirect, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { InitialPage } from '../pages';
import '../i18n'
import { useEffect } from 'react';

// interface PrivateRouteProps {
//   component: any
//   path?: string
//   exact?: boolean
// }

// const PrivateRoute = (props: PrivateRouteProps) => {
//   const { component: Component, ...rest } = props

//   const estaAutenticado = (name: string, estaLogado: boolean) => {
//     if (name !== "" && estaLogado) {
//       return true
//     } else {
//       false
//     }
//   }

//   return (
//     <Route
//       {...rest}
//       render={(routerProps) => (estaAutenticado("", true) ?
//         <Component {...routerProps} />
//         : <Redirect to='/' />)}
//     />
//   )
// }

const Rotas = () => {

  const { i18n } = useTranslation()

  const languageDefault = navigator.language

  const mudarLinguagem = (language: string | undefined) => {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    mudarLinguagem(languageDefault)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageDefault])

  return (
    <Switch>
      <Route exact path="/" component={InitialPage} />
    </Switch>
  )
}

export default Rotas