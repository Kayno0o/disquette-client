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
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit magnam rem nobis cumque consequatur iure necessitatibus! Deserunt non sit, eius, consequatur, corporis placeat odit sequi quos nemo et porro.',
        author: {
          username: 'John Doe',
          uuid: '00000000-0000-0000-0000-000000000000',
          avatarUrl: 'https://i.scdn.co/image/ab67757000003b82d9b11d035ffe1535bea78fad',
        },
        isOc: Math.random() >= 0.5,
        isPublic: true,
        name: 'Lorem ipsum',
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
        <div className='grid grid-cols-2 gap-8 mt-8'>
          {
            disquettes.map(disquette => (
              <div className='rounded-xl text-white flex flex-col gap-2 bg-dark-light p-4' key={disquette.uuid}>
                <div className='flex gap-2 items-center'>
                  <img className='w-6 h-6 rounded-full' src={disquette.author.avatarUrl} alt={disquette.author.username} />
                  <div className='text-sm flex w-full justify-between'>
                    <p>{disquette.author.username}</p>
                    {disquette.isOc && <p className='text-accent'>Originale</p>}
                  </div>
                  <p></p>
                </div>
                <p className='font-bold text-lg'>{disquette.name}</p>
                <div className='flex gap-2'>
                  {disquette.tags.map(tag => (
                    <div className='rounded-full bg-white text-dark px-3 py-0.5 text-sm'>{tag}</div>
                  ))}
                </div>
                <p>{disquette.content}</p>
              </div>
            ))
          }
        </div>
      </Container>
    </>
  )
}

export default Home
