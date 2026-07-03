import { Routes, Route } from 'react-router';
import ScrollToTop from './components/shared/ScrollToTop';
import Home from './pages/Home';
import Companies from './pages/Companies';
import CompaniesList from './pages/CompaniesList';
import CompanyDetail from './pages/CompanyDetail';
import Team from './pages/Team';
import TeamDetail from './pages/TeamDetail';
import Concepts from './pages/Concepts';
import Connect from './pages/Connect';
import Invest from './pages/Invest';
import Careers from './pages/Careers';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies-list" element={<CompaniesList />} />
      <Route path="/company/:slug" element={<CompanyDetail />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team/:slug" element={<TeamDetail />} />
      <Route path="/concepts" element={<Concepts />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/invest" element={<Invest />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}
