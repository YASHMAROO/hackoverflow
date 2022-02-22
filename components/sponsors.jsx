import React from 'react'
import Link from 'next/link'

export default function Sponsors () {
  return (
    <React.Fragment>
      <div className='container' style={{ marginTop: '40px' }}>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='serction_title_large mb-16'>
              <h3>Sponsors</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className='w-full pt-2 md:pt-6 md:pb-4 flex md:flex-row flex-col items-center md:justify-around'
        style={{ marginTop: '30px', marginBottom: '20px' }}
      >
        <div className='p-3'>
          <Link href='https://devfolio.co/'>
            <img src='/devfolio.png' />
          </Link>
        </div>
        <div className='p-1'>
          <Link href='https://polygon.technology/'>
            <img src='/Portis_Logo-Colored.png' />
          </Link>
        </div>
        <div className='p-1'>
          <Link href='https://tezos.com/'>
            <img src='/tezos.png' />
          </Link>
        </div>
        <div className='p-1'>
          <Link href='https://celo.org'>
            <img src='/Celo_Logo_Color.png' />
          </Link>
        </div>
      </div>
      <div
        className='w-full pt-2 md:pt-6 md:pb-8 flex md:flex-row flex-col items-center md:justify-around'
        style={{ marginBottom: '80px' }}
      >
        <div className='p-1'>
          <Link href='https://filecoin.io'>
            <img src='/Filecoin.png' />
          </Link>
        </div>
        <div className='p-1'>
          <Link href='https://geeksforgeeks.org/'>
            <img src='/gfg.png' />
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
