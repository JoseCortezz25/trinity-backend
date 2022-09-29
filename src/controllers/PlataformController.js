const Recommendations = [
  {
    title: 'YouTube',
    subtitle: 'Minudev',
    typeSite: 'youtube',
    link: 'https://www.youtube.com/channel/UC8LeXCWOalN8SxlrPcG-PaQ',
  },
  {
    title: 'YouTube',
    subtitle: 'HolaMundo',
    typeSite: 'youtube',
    link: 'https://www.youtube.com/c/HolaMundoDev',
  },
  {
    title: 'Platzi',
    subtitle: 'Curso Práctico de Front-end',
    typeSite: 'sitioweb',
    link: 'https://platzi.com/cursos/frontend-developer-practico/',
  },
  {
    title: 'Platzi',
    subtitle: 'MDN Web Docs',
    typeSite: 'youtube',
  },
  {
    title: 'Web',
    subtitle: 'Profe Alex',
    typeSite: 'sitioweb',
  },
]

const LearningPaths = [
  {
    title: 'Ruta Frontend',
    description:
      'Hola dev, aquí encontrarás la ruta sugerida por Trinity FS si deseas convertirte en desarrollador Front-End <Disfruta del proceso />',
    link: '/aprender/frontend',
  },
  {
    title: 'Ruta Backend',
    description:
      'Hola dev, aquí encontrarás la ruta sugerida por Trinity FS si deseas convertirte en desarrollador Back-End <Disfruta del proceso />',
    link: '/aprender/backend',
  },
  {
    title: 'Ruta Complementos',
    description:
      'Hola dev, Aquí encontrarás temas que te puede ayudar de complemento  <Disfruta del proceso />',
    link: '/aprender/complementos',
  },
]

class PlataformController {
  getLearningPaths = async (req, res, next) => {
    try {
      return res.status(202).json(LearningPaths).end()
    } catch (e) {
      next(e)
    }
  }

  getListOfRecommendations = async (req, res, next) => {
    try {
      return res.status(202).json(Recommendations).end()
    } catch (e) {
      next(e)
    }
  }
}

const plataformController = new PlataformController()
module.exports = { plataformController }
