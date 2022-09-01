import DashboardForm from '../../components/dashboard/DashboardForm';
import DashboardList from '../../components/dashboard/DashboardList';

function DashboardPage() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <DashboardForm></DashboardForm>
            <DashboardList></DashboardList>
        </div>
    )
}

export default DashboardPage;