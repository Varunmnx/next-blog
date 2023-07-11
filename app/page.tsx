import Head from "next/head"

const Page = () => {
  console.log("environment")
  console.log(process.env.NEXT_PUBLIC_PASS)
  return (<>
                    <Head>
                          <title>Home</title>
                    </Head>
                
                    <div className='w-full h-[100vh] bg-[#E5E5E5] flex justify-center items-center'>
                            <h1>Page</h1>
                    </div>
           </>
  )
}

export default Page