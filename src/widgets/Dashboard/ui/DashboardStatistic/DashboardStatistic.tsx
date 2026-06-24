import type { FC } from 'react';
import cls from './DashboardStatistic.module.scss'

interface DashboardStatisticProps {
  title: string;
  mainIndicator: string;
  footer: string;
  color: string;
}
const DashboardStatistic: FC<DashboardStatisticProps> = ({ title, mainIndicator, footer }) => {
  const colorCheck = (checkedValue: string) => checkedValue.includes('%') || checkedValue.includes('$') ? 'green' : ''
  return (
    <div className={`${cls.dashboardStatistic}`}>
      <div className={`${cls.title}`}>{title}</div>
      <div className={`${cls.percent}`} style={{ color: `${colorCheck(mainIndicator)}` }}>{mainIndicator}</div>
      <div className={`${cls.profit}`} style={{ color: `${colorCheck(footer)}` }}>{footer}</div>
    </div>
  )
}

export default DashboardStatistic;