import { DashboardStatistic } from '../../../widgets/Dashboard';
import cls from './Dashboard.module.scss'

const tempStatisticData = [
    { title: 'Today\'s PnL', mainIndicator: '2.45%', footer: '+245$', color: 'green' },
    { title: 'Win Rate', mainIndicator: '56%', footer: '14/25 trade', color: 'green' },
    { title: 'Total trades', mainIndicator: '25', footer: 'today', color: 'none' },
    { title: 'Average R:R', mainIndicator: '1.32', footer: 'For all time', color: 'none' },
]

const Dashboard = () => {
    return (
        <div className={cls.main}>
            {tempStatisticData.map((value, index) => <DashboardStatistic key={index} title={value.title} mainIndicator={value.mainIndicator} footer={value.footer} color={value.color} />)}
        </div>
    )
}

export default Dashboard;