"use client"
import React from 'react'
import { useState, useEffect } from 'react';

const HelloMsg = () => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 8000)
  }, []);
  return (
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        <iframe width="100%" height="auto" src="https://serverless-endpoints.chuongtang.workers.dev/welcome" />
      </p>
    </div>
  )
}

export default HelloMsg