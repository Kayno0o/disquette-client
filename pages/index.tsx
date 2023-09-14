import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Container from '../components/base/Container'
import H1 from '../components/base/H1'
import H2 from '../components/base/H2'
import type { Disquette } from '../types/types'

function Home(): React.ReactElement {
  const [disquettes, setDisquette] = React.useState<Array<Disquette>>([])

  React.useEffect(() => {
    const arr: Array<Disquette> = []
    for (let i = 0; i < 10; i++) {
      arr.push({
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        author: {
          username: 'John Doe',
          uuid: '00000000-0000-0000-0000-000000000000',
          avatarUrl: 'https://i.scdn.co/image/ab67757000003b82d9b11d035ffe1535bea78fad',
        },
        isOc: Math.random() >= 0.5,
        isPublic: true,
        name: 'Lorem ipsum dolor sit amet',
        slug: 'lorem-ipsum',
        tags: ['lorem', 'ipsum', 'dolor', 'sit', 'amet'],
        uuid: '00000000-0000-0000-0000-000000000000',
      })
    }
    setDisquette(arr)
  }, [])

  return (
    <>
      <Container>
        <H1>Bienvenue !</H1>
        <H2 className='mt-6'>Prêt a découvrir de nouvelle disquettes ?</H2>
        <div className='grid md:grid-cols-2 gap-8 mt-8'>
          {
            disquettes.map(disquette => (
              <div className='rounded-xl text-white flex flex-col gap-2 bg-dark-light p-4' key={ disquette.uuid }>
                <div className='flex gap-2 items-center'>
                  <img
                    className='w-6 h-6 rounded-full'
                    src={ disquette.author.avatarUrl }
                    alt={ disquette.author.username }
                  />

                  <div className='flex w-full justify-between'>
                    <p>{ disquette.author.username }</p>

                    <div className={ 'flex gap-1 border items-center border-white rounded-full w-fit bg-dark-lighter' }>
                      <FontAwesomeIcon
                        className='w-5 h-5 p-1 hover:bg-dark-light rounded-full hover:text-accent-light'
                        icon={ faArrowUp }
                      />
                      <span className="text-sm">18</span>
                      <FontAwesomeIcon
                        className='w-5 h-5 p-1 hover:bg-dark-light rounded-full hover:text-amber-600'
                        icon={ faArrowDown }
                      />
                    </div>
                  </div>
                </div>

                <p className='font-bold items-center justify-between'>
                  <span>{ disquette.name }</span>
                  { disquette.isOc && <span> · <span className='text-accent'>Originale</span></span> }
                </p>

                <div className='flex gap-2 flex-wrap'>
                  { disquette.tags.map(tag => (
                    <div className='rounded-full bg-white text-dark px-3 py-0.5 text-sm'>{ tag }</div>
                  )) }
                </div>
                <p>{ disquette.content }</p>
              </div>
            ))
          }
        </div>
      </Container>
    </>
  )
}

export default Home
