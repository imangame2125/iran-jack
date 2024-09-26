import { Route, Routes } from 'react-router-dom'
import VanArdselPage from './pages/vanArdsel'
import Chat from './pages/chat'
import ActivityPage from './pages/activity'
import TeamsPage from './pages/teams'
import CalendarPage from './pages/calendar'
import CallsPage from './pages/calls'
import FilesPage from './pages/files'
import AppsPage from './pages/apps'
import MainLayout from './components/mainLayout'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.pathname = '/van-ardsel/home'
    }
  }, [])
  return (
    <MainLayout>
      <Routes>
        <Route path='/activity' element={<ActivityPage />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/teams' element={<TeamsPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='/calls' element={<CallsPage />} />
        <Route path='/files' element={<FilesPage />} />
        <Route path='/van-ardsel/*' element={<VanArdselPage />} />
        <Route path='/apps' element={<AppsPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
