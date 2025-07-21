import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ViewUser from './Day 6/ViewUser'
import Home from './Day 6/Home'
import UserDetails from './Day 6/UserDetails'
import Layout from './Layout'
import PageNotFound from './PageNotFound'
import Todo from './Day 8/Todo'

export default function Path() {
  return (
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>

        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/userlist'element={<ViewUser />} />
            <Route path='/userDetails/:id' element={<UserDetails/>} />
            <Route path='/day8/todo' element={<Todo />} />
        </Route>
    </Routes>
  )
}
