import { Routes, Route } from 'react-router';
import { DashboardPage } from '../pages/dashboardpage';

export default function AppRoutes() {
    <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
}