import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			{/* <div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div> */}
		</div>
	)
}

export default Dashboard