import Head from "next/head"

const Page = () => {
  return (<>
                    <Head>
                          <title>Home</title>
                    </Head>
                
                    <div className='w-full h-[100vh] bg-blue-400 flex justify-center items-center'>
                            <h1>Page</h1>
                    </div>
           </>
  )
}

export default Page