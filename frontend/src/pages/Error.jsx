import React from 'react'

const Error = () => {
  return (
    <div>
   
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-error mb-4">Oops!</h1>
        <p className="text-xl text-base-content mb-6">
          We couldn’t find the page you were looking for.
        </p>
        <div className="alert alert-error shadow-lg mb-6">
          <span>Error 404: Page Not Found</span>
        </div>
        <a href="/" className="btn btn-primary">
          Go Back Home
        </a>
      </div>
    </div>
    </div >
 
  )
}

export default Error
